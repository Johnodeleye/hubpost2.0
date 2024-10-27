{/**THIS PAGE IS TO DISPLAY JUST THE POSTS ITSELF ONLY WHEN CLICK ON IT */}
import prisma from "@/lib/prismadb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";


// pages/api/posts/[id]/route.js

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        author: {
          select: { name: true, image: true, id: true, email: true }
        },
        comments: {
          include: {
            author: {
              select: { name: true, email: true }
            }
          }
        }
      }
    });

    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    const session = await getServerSession(authOptions);
    const authorEmail = session?.user?.email;

    const likesCount = await prisma.like.count({ where: { postId: id } });
    const isLiked = authorEmail
      ? await prisma.like.findFirst({
          where: { postId: id, authorEmail },
        })
      : null;

    const { comments, ...postData } = post;

    return NextResponse.json({
      ...postData,
      likesCount,
      isLiked: !!isLiked,
      commentsCount: post.comments.length
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Couldn't fetch post" });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401});
  }

  const { title, content, links, selectedCategory, imageUrl, publicId } =
    await req.json();
  const id = params.id;

  try {
    const post = await prisma.post.update({
      where: { id },
      data: {
        title,
        content,
        links,
        catName: selectedCategory,
        imageUrl,
        publicId
      }
    });

    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error editing post" });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401});
  }

  const id = params.id;
  try {
    const post = await prisma.post.delete({ where: { id } });
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error deleting the post" });
  }
}

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Not authenticated or invalid user data" }, { status: 401 });
  }

  const requestBody = await req.json();
  const id = params.id;

  const like = await prisma.like.findFirst({
    where: { postId: id, authorEmail: session.user?.email },
  });
  if (like) {
    await prisma.like.delete({ where: { id: like.id } });
  } else {
    await prisma.like.create({
      data: {
        postId: id,
        authorEmail: session.user.email
      }
    });
  }

  const likesCount = await prisma.like.count({ where: { postId: id } });
  const isLiked = await prisma.like.findFirst({
    where: { postId: id, authorEmail: session.user.email },
  });

  return NextResponse.json({ likesCount, isLiked: !!isLiked });
}

  
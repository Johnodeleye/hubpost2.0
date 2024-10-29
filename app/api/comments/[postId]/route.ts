import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import authOptions from '@/lib/auth';
import prisma from "@/lib/prismadb";

export async function GET(req: Request) {
  const postId = req.url.split('/').pop();

  if (!postId) {
    return NextResponse.json({ error: "Invalid post ID" }, { status: 400 });
  }

  try {
    const comments = await prisma.comment.findMany({
      where: { postId },
      include: {
        author: {
          select: {
            name: true,
            image: true,
            id: true,
            email: true,
          },
        },
      },
      orderBy: [{ createdAt: 'desc' }], // Fetch latest comments first
    });
    return NextResponse.json(comments);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Could not fetch comments." }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const postId = req.url.split('/').pop();

  if (!postId) {
    return NextResponse.json({ error: "Invalid post ID" }, { status: 400 });
  }

  const { commentContent } = await req.json();

  if (!commentContent) {
    return NextResponse.json(
      { error: "Comment content is required" },
      { status: 500 } // Bad Request
    );
  }

  try {
    const userEmail = session.user?.email;

    if (!userEmail) {
      return NextResponse.json({ error: "User email not found" }, { status: 401 });
    }

    const newComment = await prisma.comment.create({
      data: {
        content: commentContent,
        postId,
        authorEmail: userEmail,
      },
    });

    console.log("Comment created");
    return NextResponse.json(newComment);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Could not create comment." }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const commentId = req.url.split('/').pop();

  if (!commentId) {
    return NextResponse.json({ error: "Invalid comment ID" }, { status: 400 });
  }

  try {
    const comment = await prisma.comment.findUnique({
      where: { id: commentId },
    });

    if (!comment) {
      return NextResponse.json({ error: "Comment not found" }, { status: 404 });
    }

    // if (comment.authorEmail !== session.user?.email) {
    //   return NextResponse.json({ error: "Unauthorized to delete comment" }, { status: 403 });
    // }

    await prisma.comment.delete({
      where: { id: commentId },
    });

    console.log("Comment deleted");
    return NextResponse.json({ message: "Comment deleted successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Could not delete comment." }, { status: 500 });
  }
}
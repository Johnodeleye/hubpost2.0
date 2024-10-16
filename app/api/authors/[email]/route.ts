import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import { authOptions } from "../../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export async function GET(
  req: Request,
  { params }: { params: { email: string } }
) {
  try {
    const email = params.email;
    const posts = await prisma.user.findUnique({
      where: { email },
      include: {
        posts: {
          orderBy: { createdAt: "desc" },
          include: {
            author: {
              select: {
                id: true,
                name: true,
                image: true,
                bio: true,
              },
            },
          },
        },
      },
    });

    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Could not fetch post" });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { email: string } }
) {
  const email = params.email;
  const { name, bio, imageUrl, publicId } = await req.json();
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401});
  }

  try {
    const updatedAuthor = await prisma.user.update({
      where: { email },
      data: {
        name,
        bio,
        image: imageUrl,
      },
    });

    return NextResponse.json(updatedAuthor);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Failed to update author" }, { status: 500 });
  }
}
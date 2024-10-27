import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401});
  }

  const { title, content, links, selectedCategory, imageUrl, publicId }: {
    title: string;
    content: string;
    links: string[];
    selectedCategory: string;
    imageUrl: string;
    publicId: string;
  } = await req.json();

  const authorEmail = session?.user?.email as string;

  if (!title || !content) {
    return NextResponse.json(
      { error: "Title and content are required" },
      { status: 500 }
    );
  }

  try {
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        links,
        imageUrl,
        publicId,
        catName: selectedCategory,
        authorEmail,
      },
    });

    console.log("Post created");
    return NextResponse.json(newPost);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Could not create post." }, { status: 500 });
  }
}

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      include: { author: { select: { name: true, image: true, id: true, email: true } } },
    });

    const shuffledPosts = shuffleArray(posts);

    return NextResponse.json(shuffledPosts);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Some error occurred" },
      { status: 500 }
    );
  }
}

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
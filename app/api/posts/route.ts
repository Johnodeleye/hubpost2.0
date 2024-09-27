import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req: Request) {

  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401});
  }
    const {title, content, links, selectedCategory, imageUrl, publicId} = await req.json();

    const authorEmail = session?.user?.email as string;

    if(!title || !content) {
        return NextResponse.json(
            { error: "Title and content are required"},
            { status: 500 }
        );
    }

    {/**Remember THAT WHEN U ARE SENDING A REQUEST IN THUNDERCLIENT OR ANYWHERE USE http not https */}

    {/**we called all these becuase thats what we call in our prisma schema */}
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
        return NextResponse.json({ message: "Could not create post." });
      }
    }

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      include: { author: { select: { name: true, image: true, id: true }, } },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Some error occured" },
      { status: 500 }
    );
  }
}

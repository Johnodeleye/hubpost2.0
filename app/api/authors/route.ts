import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
    try {
       const authors = await prisma.user.findMany();
       return NextResponse.json(authors)
    } catch (error) {
        return NextResponse.json("Couldn't find authors");
    }
}


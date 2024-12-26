// import prisma from "@/lib/prismadb";
// import { NextResponse } from "next/server";

// export async function GET(
//   req: Request,
//   { params }: { params: { email: string } }
// ) {
//   try {
//     const email = params.email;
//     const author = await prisma.user.findUnique({
//       where: { email },
//       include: {
//         posts: {
//           orderBy: { createdAt: "desc" },
//           include: {
//             author: {
//               select: {
//                 id: true,
//                 name: true,
//                 image: true,
//                 bio: true,
//               },
//             },
//           },
//         },
//       },
//     });

//     return NextResponse.json(author);
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ message: "Could not fetch author" });
//   }
// }
// export async function PUT(
//   req: Request,
//   { params }: { params: { email: string } }
// ) {
//   try {
//     const email = params.email;
//     const { name, bio, imageUrl } = await req.json();

//     const updatedAuthor = await prisma.user.update({
//       where: { email },
//       data: {
//         name,
//         bio,
//         image: imageUrl,
//       },
//     });

//     return NextResponse.json(updatedAuthor);
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ message: "Could not update author" }, { status: 500 });
//   }
// }



import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

function setCORSHeaders(response: Response) {
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, PUT, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  return response;
}

export async function GET(
  req: Request,
  { params }: { params: { email: string } }
) {
  try {
    const email = params.email;
    const author = await prisma.user.findUnique({
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

    const response = NextResponse.json(author);
    return setCORSHeaders(response);
  } catch (error) {
    console.log(error);
    const response = NextResponse.json({ message: "Could not fetch author" }, { status: 500 });
    return setCORSHeaders(response);
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { email: string } }
) {
  try {
    const email = params.email;
    const { name, bio, imageUrl } = await req.json();

    const updatedAuthor = await prisma.user.update({
      where: { email },
      data: {
        name,
        bio,
        image: imageUrl,
      },
    });

    const response = NextResponse.json(updatedAuthor);
    return setCORSHeaders(response);
  } catch (error) {
    console.log(error);
    const response = NextResponse.json({ message: "Could not update author" }, { status: 500 });
    return setCORSHeaders(response);
  }
}

export async function OPTIONS() {
  // Respond to preflight requests with CORS headers
  const response = new Response(null, { status: 204 });
  return setCORSHeaders(response);
}

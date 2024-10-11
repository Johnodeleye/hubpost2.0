import Post from "@/components/Post";
import Link from "next/link";
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Image from "next/image";
import { files } from "../assets/files";
import { TPost } from "../types";
import Verified from "@/components/Verified";

const getPosts = async (email: string) => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/authors/${email}`);
    const {posts} = await res.json();
    return posts;
  } catch (error) {
    return null;
  }
}

const page = async ({}) => {

  const session = await getServerSession(authOptions); // Fetch session data
  const email = session?.user?.email;
  let posts = [];

  if (!session) {
    redirect('/sign-in');
  }

  if (email){
    posts = await getPosts(email)
  }

  const verifiedUserIds = ['66ef45f5a6138e4340dbe9f6',
    '66ef46f5a6138e4340dbe9fa',
    '',
   ];

  return (
    <div className="">
    {session && (
      <h1 className="font-bold text-heading1-bold"><span className="text-green-500  whitespace- sm:text-ellipsis">Welcome Back, </span>{session?.user?.name}!</h1>
    )}
      {posts && posts.length > 0 ? (
              posts.map((post: TPost) => 
              <Post 
              key={post.id}
              id={post.id}
              author={post.author?.name || "Unknown Author"}
              authorid={post.author?.id}
              authorimg={post.author?.image}
              authorEmail={post.authorEmail}
              // authorbio={post.author.bio}
              date={post.createdAt}
              image={post.imageUrl}
              category={post.catName}
              title={post.title}
              content={post.content}
              links={post.links || []}
              />)
      ) : (
        
        
        <>
        <>
        <div className="py-6">No posts created yet.{''}</div><Link className="btn" href={'/create-post'}>Create New</Link>
        </>
        </>
      )}
    </div>
  );
}

export default page;
import { postsData } from "@/data";
import Post from "@/components/Post";
import Link from "next/link";
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Image from "next/image";
import { files } from "../assets/files";


const page = async () => {
  const session = await getServerSession(authOptions); // Fetch session data
  
  if (!session) {
    redirect('/sign-in');
  }
  return (
    <div>
    {session && (
      <h1>Welcome Back, {session?.user?.name}!</h1>
    )}
      {postsData && postsData.length > 0 ? (
              postsData.map((post) => <Post 
              key={post.id}
              id={post.id}
              author={post.author}
              authorEmail={'test@gmail.com'}
              date={post.datepublished}
              image={post.image}
              category={post.category}
              title={post.title}
              content={post.content}
              links={post.links || []}
              />)
      ) : (
        
        
        <>
        <>
        <div className="py-6">No posts created yet.{''}</div><Link className="underline" href={'/create-post'}>Create New</Link>
        </>
        </>
      )}
    </div>
  );
}

export default page;
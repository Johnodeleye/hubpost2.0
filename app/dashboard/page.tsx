import Post from "@/components/Post";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { TPost } from "../types";
import Verified from "@/components/Verified";

const getPosts = async (email: string) => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/authors/${email}`);
    const { posts } = await res.json();
    return posts;
  } catch (error) {
    return null;
  }
};

const DashboardPage = async ({}) => {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  let posts = [];

  if (!session) {
    redirect('/sign-in');
  }

  if (email) {
    posts = await getPosts(email);
  }

  const verifiedUserIds = ['66ef45f5a6138e4340dbe9f6', '66ef46f5a6138e4340dbe9fa'];

  const sessionEmail = session?.user?.email;

  return (
    <div>
      {session && (
        <div className="flex flex-col gap-2 mb-4">
          <h1 className="font-bold text-2xl text-white">
            <span className="text-green-500">Welcome Back, </span>
            {session?.user?.name}!
          </h1>
          <Link
            href={`/authors/${sessionEmail}`}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg w-fit"
          >
            See Profile 
          </Link>
        </div>
      )}
      {posts && posts.length > 0 ? (
        posts.map((post: TPost) => (
          <Post
            key={post.id}
            id={post.id}
            author={post.author?.name || "Unknown Author"}
            authorid={post.author?.id}
            authorimg={post.author?.image}
            authorEmail={post.authorEmail}
            date={post.createdAt}
            image={post.imageUrl}
            category={post.catName}
            title={post.title}
            content={post.content}
            links={post.links || []}
          />
        ))
      ) : (
        <div className="py-6">
          No posts created yet.
          <Link className="btn" href={'/create-post'}>Create New</Link>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { TPost } from "@/app/types";
import Author from "@/components/Author";
import Post from "@/components/Post";
import { getServerSession } from "next-auth";
import Link from "next/link";

const getAuthors = async (email: string): Promise<TPost[] | null> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/authors/${email}/posts`, { cache: "no-store" });

    if (res.ok) {
      const posts = await res.json();
      return posts;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
}

const getAuthor = async (email: string): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/authors/${email}`, { cache: "no-store" });

    if (res.ok) {
      const author = await res.json();
      return author;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
}

const Page = async ({
  params,
}: {
  params: { email: string };
}) => {
  const session = await getServerSession(authOptions);
  const sessionEmail = session?.user?.email;
  const user = params.email;
  const posts = await getAuthors(user);
  const author = await getAuthor(user);

  if (!posts || posts.length === 0) {
    if (sessionEmail === author?.email) {
      return (
        <div className="py-6">
          <Author
            author={author?.name || "Unknown Author"}
            authorid={author?.id || "null"}
            authorimg={author?.image || ""}
            authorbio={author?.bio || ""}
            authorEmail={author?.email || ""}
            date={author?.createdAt || ""}
            image={author?.imageUrl || ""}
          />
          <h2 className="mt-4">You haven't created any posts yet.</h2>
          <Link href="/create-post">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg bg-green-500 mt-3">
              Create Post
            </button>
          </Link>
        </div>
      );
    } else {
      return (
        <div className="py-6">
          <Author
            author={author?.name || "Unknown Author"}
            authorid={author?.id || "null"}
            authorimg={author?.image || ""}
            authorbio={author?.bio || ""}
            authorEmail={author?.email || ""}
            date={author?.createdAt || ""}
            image={author?.imageUrl || ""}
          />
          <h2 className="mt-4">No posts available.</h2>
        </div>
      );
    }
  }

  return (
    <div>
      <Author
        author={author?.name || "Unknown Author"}
        authorid={author?.id || "null"}
        authorimg={author?.image || ""}
        authorbio={author?.bio || ""}
        authorEmail={author?.email || ""}
        date={author?.createdAt || ""}
        image={author?.imageUrl || ""}
      />

      {posts.map((post: TPost) => (
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
      ))}
    </div>
  );
};

export default Page;


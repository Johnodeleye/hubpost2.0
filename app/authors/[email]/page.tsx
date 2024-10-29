import authOptions from '@/lib/auth';
import { TAuthor, TPost } from "@/app/types";
import Author from "@/components/Author";
import Post from "@/components/Post";
import { getServerSession } from "next-auth";
import Link from "next/link";

const getAuthors = async (email: string): Promise<TAuthor | null> => {
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

const AuthorPage = async ({
  params,
}: {
  params: { email: string };
}) => {
  const email = params.email;
  const author = await getAuthors(email);
  const session = await getServerSession(authOptions);
  const sessionEmail = session?.user?.email;

  if (!author) {
    return (
      <div className="py-6">
        <h2>Author Not Found</h2>
      </div>
    );
  }

  const posts = author.posts;

  return (
    <div>
      <Author
        author={author.name}
        authorimg={author.image}
        authorid={author.id}
        authorEmail={author.email}
        authorbio={author.bio}
      />

      <h2 className="text-2xl font-bold mt-10">Posts</h2>

      {posts && posts.length > 0 ? (
        posts.map((post: TPost) => (
          <Post
            key={post.id}
            id={post.id}
            author={post.author.name}
            authorid={post.author.id}
            authorimg={post.author.image}
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
        <p className="text-lg text-gray-500">No posts available</p>
      )}

      {sessionEmail === author.email && (
        <>
          <p className="text-lg text-gray-500">You are viewing your own profile.</p>
          {/* <Link href={`/edit-profile/${sessionEmail}`}>
            <div className="text-lg text-white hover:bg-green-600 bg-green-500 py-2 rounded-lg

            px-3 mt-2">
            Create Post
          </div>
        </Link> */}
      </>
    )}
  </div>
);
};

export default AuthorPage;
import { files } from "@/app/assets/files";
import { TPost } from "@/app/types";
import Post from "@/components/Post";
import { Metadata } from 'next';

const getPosts = async (catName: string): Promise<TPost[] | null> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories/${catName}`, { cache: "no-store" });

    if (res.ok) {
      const categories = await res.json();
      const posts = categories.posts;
      return posts;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
}

export async function generateMetadata({
  params,
}: {
  params: { catName: string };
}): Promise<Metadata> {
  const category = params.catName;
  const posts = await getPosts(category);

  return {
    title: `Category: ${decodeURIComponent(category)}`,
    description: `Explore posts from the ${decodeURIComponent(category)} category.`,
    openGraph: {
      type: 'website',
      images: [
        {
          url: `${files.verified}`, // Default image
        },
      ],
    },
    twitter: {
      card: 'summary',
    },
  };
}

const page = async ({
  params,
}: {
  params: { catName: string };
}) => {
    const category = params.catName
    const posts = await getPosts(category);

      // Early return if no posts
  if (!posts || posts.length === 0) {
    return (
      <div className="py-6">
        <h2>No Posts from this Category</h2>
      </div>
    );
  }

    return (
        <div>
      <h1>
        <span className="font-normal text-green-400">Category: </span>{" "}
        {decodeURIComponent(category)}
      </h1>
      {posts.map((post: TPost) => (
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
        />
      ))}
        </div>
    )
}

export default page
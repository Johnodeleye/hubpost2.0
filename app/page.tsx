import CategoriesList from "@/components/CategoriesList";
import Post from "@/components/Post";
import { TPost } from "./types";

import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'HubPost | Spark, Connect, Ignite',
};

// Fetch posts API endpoint
const POSTS_API = `${process.env.NEXTAUTH_URL}/api/posts`;

// Fetch posts function
const getPosts = async (): Promise<TPost[] | null> => {
  try {
    const response = await fetch(POSTS_API, {
      cache: "no-store",
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(`Error fetching posts: ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
    return null;
  }
};



export default async function Home() {
  const posts = await getPosts();

  // Early return if no posts
  if (!posts || posts.length === 0) {
    return (
      <div className="py-6 text-white">
        <h2>No Posts</h2>
      </div>
    );
  }

  return (
    <>
      <CategoriesList />
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
          // commentsCount={response.commentsCount}
        />
      ))}
    </>
  );
}

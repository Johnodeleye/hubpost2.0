import { TPost } from "@/app/types";
import Footer from "@/components/Footer";
import MorePost from "@/components/MorePost";
import Post from "@/components/Post";

const getPost = async (id: string): Promise<TPost | null> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${id}`, { cache: "no-store" });

    if (res.ok) {
      const post = await res.json();
      return post;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

const page = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const post = await getPost(id);

  // Early return if no post
  if (!post) {
    return (
      <div className="py-6">
        <h2>Post not found</h2>
      </div>
    );
  }

  return (
    <div>
      <MorePost
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
      <Footer/>
    </div>
  );
};

export default page;
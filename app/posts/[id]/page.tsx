import { TPost, TComment } from "@/app/types";
import Comment from "@/components/Comment";
import CommentForm from "@/components/CommentForm";
import MorePost from "@/components/MorePost";
import { Metadata } from 'next';

const getPost = async (id: string): Promise<TPost | null> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${id}`, { cache: "no-store" });

    if (res.ok) {
      const post = await res.json();
      const commentsRes = await fetch(`${process.env.NEXTAUTH_URL}/api/comments/${id}`);
      const comments = await commentsRes.json();
      return { ...post, comments };
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const id = params.id;
  const post = await getPost(id);

  return {
    title: post?.title || 'Post not found',
    description: post?.content|| 'Post description not available',
  };
}

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

      <CommentForm postId={post.id} />

      {post.comments.map((comment: TComment) => (
        <Comment
          key={comment.id}
          id={comment.id}
          author={comment.author?.name || "Unknown Author"}
          authorid={comment.author.id}
          authorimg={comment.author?.image}
          authorEmail={comment.authorEmail}
          date={comment.createdAt}
          content={comment.content}
          postId={comment.postId}
        />
      ))}
    </div>
  );
};

export default page;
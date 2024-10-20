import { TPost, TComment } from "@/app/types";
import Comment from "@/components/Comment";
import CommentForm from "@/components/CommentForm";
import Footer from "@/components/Footer";
import MorePost from "@/components/MorePost";

const getPost = async (id: string): Promise<TPost | null> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${id}`, { cache: "no-store" });

    if (res.ok) {
      const data = await res.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

const Page = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const response = await getPost(id);

  if (!response) {
    return (
      <div className="py-6">
        <h2>Post not found</h2>
      </div>
    );
  }

  const post = response.post;

  return (
    <div>
      <MorePost
        key={post.id}
        id={post.id}
        author={post.author.name}
        authorid={post.author.id}
        authorimg={post.author.image}
        authorEmail={post.author.email}
        date={post.createdAt}
        image={post.imageUrl}
        category={post.catName}
        title={post.title}
        content={post.content}
        links={post.links}
      />

      <CommentForm postId={post.id} />

      {post.comments?.map((comment: TComment) => (
        <Comment
          key={comment.id}
          id={comment.id}
          author={comment.author.name}
          authorid={comment.author.id}
          authorimg={comment.author.image}
          authorEmail={comment.author.email}
          date={comment.createdAt}
          content={comment.content}
          postId={comment.postId}
        />
      ))}
    </div>
  );
};

export default Page;
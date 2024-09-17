import { postsData } from "@/data";
import Post from "@/components/Post";
import Link from "next/link";

const page = () => {
    return (
        <div>
        <h1>Welcome Back</h1> 
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
      <div className="py-6">No posts created yet.{''}</div>
      <Link className="underline" href={'/create-post'}>Create New</Link>
      </>
    )}
    </div>
  );
}

export default page
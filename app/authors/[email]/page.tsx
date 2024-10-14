import { TAuthor, TPost } from "@/app/types";
import Author from "@/components/Author";
import Post from "@/components/Post";

const getAuthors = async(email: string): Promise<TPost[]|null> =>{
    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/authors/${email}`, {cache:"no-store"});

        if (res.ok){
            const authors = await res.json();
            const posts = authors.posts;
            return posts;
        }
    } catch (error) {
        console.log(error);
        
    }
    return null;
}
const page = async ({
    params,
}: {
    params: {email: string };
}) => {
    const user = params.email
    const posts = await getAuthors(user);

      // Early return if no posts
  if (!posts || posts.length === 0) {
    return (
      <div className="py-6">
        <h2>Author Not Found</h2>
      </div>
    );
  }

    return (
        <div>
{posts && (
  <Author
    key={posts[0].id}
    author={posts[0].author?.name || "Unknown Author"}
    authorid={posts[0].author?.id}
    authorimg={posts[0].author?.image}
    authorbio={posts[0].author?.bio}
    authorEmail={posts[0].authorEmail}
    date={posts[0].createdAt}
    image={posts[0].imageUrl}
  />
)}

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
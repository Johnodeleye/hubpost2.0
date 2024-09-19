import Bottombar from "@/components/Bottombar";
import CategoriesList from "@/components/CategoriesList";
import LeftSidebar from "@/components/Leftbar";
import Post from "@/components/Post";
import { postsData } from "@/data";
import Image from "next/image";

export default function Home() {
  
  return (
    <>
    <CategoriesList />
    {postsData && postsData.length > 0 ? (
      postsData.map((post) => <Post 
      key={post.id}
      id={post.id}
      author={post.author}
      authorimg={post.authorimg}
      authorEmail={'test@gmail.com'}
      date={post.datepublished}
      image={post.image}
      category={post.category}
      title={post.title}
      content={post.content}
      links={post.links || []}
      />)
        ) : (
      <div className="py-6">No Posts</div>
    )}

    </>
  );
}

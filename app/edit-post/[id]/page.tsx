import { TPost } from "@/app/types";
import EditPostForm from "@/components/EditPostForm";
import { getServerSession } from "next-auth/next";
import authOptions from '@/lib/auth';
import { redirect } from "next/navigation";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Edit Post',
};

const getPost = async (id: string): Promise<TPost | null> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${id}`, {
      cache: "no-store",
    });

    if (res.ok) {
      const post = await res.json();
      return post;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};

export default async function EditPost({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/sign-in");
  }

  const id = params.id;
  const post = await getPost(id);

  return <>{post ? <EditPostForm post={post} /> : <div>Invalid Post</div>}</>;
}

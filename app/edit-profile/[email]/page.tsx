import EditProfileForm from "@/components/EditProfileForm";
import { getServerSession } from "next-auth/next";
import authOptions from '@/lib/auth';
import { redirect } from "next/navigation";

import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Edit Profile',
};

const getAuthor = async (email: string): Promise<any | null> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/authors/${email}`);
    if (res.ok) {
      const author = await res.json();
      return author;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};

export default async function EditAuthorProfile({ params }: { params: { email: string } }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/sign-in");
  }

  const sessionEmail = session?.user?.email;
  const requestedEmail = params.email;

  if (!sessionEmail) {
    redirect("/dashboard"); // Redirect to dashboard if trying to access another user's profile
  }

  const author = await getAuthor(requestedEmail);

  return <>{author ? <EditProfileForm author={author} /> : <div>Invalid Author</div>}</>;
}
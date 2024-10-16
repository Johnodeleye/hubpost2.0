import EditProfileForm from "@/components/EditProfileForm";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

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

  const email = params.email;
  const author = await getAuthor(email);

  return <>{author ? <EditProfileForm author={author} /> : <div>Invalid Author</div>}</>;
}
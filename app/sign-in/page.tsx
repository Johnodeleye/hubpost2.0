import SigninBtns from "@/components/SigninBtns";
import { getServerSession } from "next-auth";
import authOptions from '@/lib/auth';
import { redirect } from "next/navigation";

import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Sign in | HubPost',
};

const Page = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/dashboard");
  }

  return (
    <div>
      <SigninBtns />
    </div>
  );
};

export default Page;
import SigninBtns from "@/components/SigninBtns";
import { getServerSession } from "next-auth";
import authOptions from '@/lib/auth';
import { redirect } from "next/navigation";
import Head from 'next/head';
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
     <Head>
        <meta name="google-site-verification" content="P2r_Z6CA_GDV7PMAudkhj9jsvXZfGY1Aq77CTvllPJw" />
      </Head>
      <SigninBtns />
    </div>
  );
};

export default Page;

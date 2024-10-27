import SigninBtns from "@/components/SigninBtns";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await getServerSession(authOptions);

  // const sendEmail = async () => {
  //   const res = await fetch(`${process.env.NEXTAUTH_URL}/api/send`, {
  //     method: "POST",
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       // Email content
  //     })
  //   });
  // };

  if (session) {
    // await sendEmail(); // Ensure email sending completes before redirect
    return redirect("/dashboard");
  }

  return (
    <div>
      <SigninBtns />
    </div>
  );
};

export default Page;
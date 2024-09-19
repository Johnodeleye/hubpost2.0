'use client';

import Image from "next/image"
import github from '@/app/assets/githubblack.png';
import google from '@/app/assets/google-logo.svg';
import { signIn } from "next-auth/react";

const SigninBtns = () => {
    return (
        <div className="mt-4 p-4 flex flex-col items-center justify-center gap-4 lg:mt-4">
          <h1 className="text-center text-green-400">Sign In to HubPost</h1>
          <div>
            <button onClick={()=> signIn('github')} className=" mt-4 flex items-center border p-3 px-5 py-2 rounded-full gap-2 border-green-400 hover:bg-green-400 transition">
                <span>
                    <Image className="bg-black rounded-full" src={github} width={50} height={50} alt="githublogo"/>
                </span>
                Sign In with Github
            </button>

            <button onClick={( )=> signIn("google")} className=" flex items-center border p-3 px-6 mt-7 rounded-full gap-4 py-4 border-green-400 hover:bg-green-400 transition">
                <span>
                    <Image className="bg-black rounded-full" src={google} width={30} height={30} alt="Google logo"/>
                </span>
                Sign In with Google
            </button>
          </div>
        </div>
    )
}

export default SigninBtns
'use client';

import Image from "next/image";
import Link from "next/link";
import { files } from '@/app/assets/files';
import logo from '@/app/assets/Logo White.png';
import { useSession, signOut } from "next-auth/react";

//The Navbar on the homepage
function Topbar() {
  const { data: session } = useSession();

  return (
    <nav className="topbar">
      <div>
        <Link href={'/'}>
          <Image src={logo} width={110} height={110} alt="hubpost" />
          {/* <h1 className="text-4xl font-bold tracking-tighter text-green-400">HubPost</h1> */}
        </Link>
        <p className="whitespace-nowrap text-sm font-semibold">
          Spark💖, Connect🤑, and Ignite🔥
        </p>
      </div>

      {session?.user ? (
        <div className="flex gap-2 items-center">
                    <div className="flex items-center">
                    <button onClick={()=> signOut()}>
                        Sign Out
                    </button>
        </div>
          <Link className="flex gap-2 items-center" href={'/create-post'}>
            <span></span>
            <span className="text-white">Create new</span>
          </Link>
          <Image
            src={session?.user?.image || files.user} // Use user's image or default
            width={36}
            height={36}
            alt="profile image"
            className="rounded-full"
          />
        </div>
      ) : (
        <div className="flex items-center">
          <Link className="btn" href={'/sign-in'}>
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Topbar;
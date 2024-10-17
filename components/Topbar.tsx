'use client';

import Image from "next/image";
import Link from "next/link";
import { files } from '@/app/assets/files';
import logo from '@/app/assets/Logo White.png';
import { useSession, signOut } from "next-auth/react";
import { useEffect, useRef, useState } from "react";

//The Navbar on the homepage
function Topbar() {
  const { data: session } = useSession();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);

  //this session email is very important to track someone's email
  const sessionEmail = session?.user?.email;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
        if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
            setIsPopupVisible(false);
        }
    };

    document.addEventListener('click', handleClickOutside);

    if (!isPopupVisible) {
        document.removeEventListener('click', handleClickOutside);
    }

    return () => {
        document.removeEventListener('click', handleClickOutside);
    }
  }, [isPopupVisible]);

  return (
    <nav className="topbar">
      <div>
        <Link href={'/'}>
              <Image
                src={logo}
                className="w-auto h-8"  
                alt='hubpost'
                />
          {/* <h1 className="text-4xl font-bold tracking-tighter text-green-400">HubPost</h1> */}
        </Link>
        <p className="whitespace-nowrap text-sm font-semibold text:sm text-gray-200">
          Spark💖, Connect🤑, & Ignite🔥
        </p>
      </div>

      {session?.user ? (
        
        <>
            <div 
            ref={popupRef}
            className={`absolute z-30 right-0 mr-10 top-20 p-6 shadow-lg shadow-green-600 border border-green-500 rounded-md  flex-col gap-2 text-right min-w-[160px] bg-dark-1 ${isPopupVisible ? 'flex' : 'hidden'}`}>

                <div className="text-green-500 font-semibold text-left">Hey, {session?.user?.name}
                </div>
                <div className="text-justify">{session?.user?.email}</div>
                <Link onClick={() => setIsPopupVisible(false)} className="hover:bg-green-500 hover:text-dark-1 rounded-xl text-justify" href={`/authors/${sessionEmail}`}>🟢Go to Profile</Link>
                <Link onClick={() => setIsPopupVisible(false)} className="hover:bg-green-500 rounded-xl text-justify hover:text-dark-1" href={'/create-post'}>🟢Create Post</Link>
                <Link onClick={() => setIsPopupVisible(false)} className="hover:bg-green-500 rounded-xl text-justify hover:text-dark-1" href={'https://whatsapp.com/channel/0029Vajn8TuFcovziHg7rM2B'}>🟢Join Community</Link>
                  <button onClick={() => signOut()} className="btn">
                      Sign Out
                  </button>
              </div>
              <div className="flex gap-2 items-center">
                      <Link className="hidden md:flex gap-2 items-center mr-6 btn" href={'/create-post'}>
                          <span className="">
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-6 h-6"
                              >
                                  <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                          </span>
                          <span className="text-white">Create new</span>
                      </Link>
                      <div className="relative cursor-pointer" onClick={() => setIsPopupVisible((prev) => !prev)}>
                    <Image
                      src={session?.user?.image || files.user} 
                      width={36}
                      height={36}
                      alt="profile image"
                      className="rounded-full md:mr-9 hover:scale-105 transition shadow"
                    />
                    <span>
                    <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={5}
  stroke="green"
  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 xs:block"  // Apply green-400 class to svg
  style={{ zIndex: 1, }} // Ensure icon is on top
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M19 9l-7 7-7-7"
  />
                </svg>
                    </span>
                  </div>
                  </div>
                  </>
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
'use client'
import {sidebarLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { files } from '@/app/assets/files';
import { signOut, useSession } from 'next-auth/react';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

function LeftSidebar() {
    const { data: session } = useSession();
    const router = useRouter();
    const pathname = usePathname();
    const logout = files.logout;

    
    return (
        <section className="custom-scrollbar leftsidebar">
            <div className="flex flex-col flex-1 w-full gap-6 px-6">
                {/* To connect or map the links from index.js in constant folder */}
                {sidebarLinks.map((link) => {
            const isActive = pathname ? (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route : false;
                    

                
                return (
                    <Link 
                    href={link.route}
                    key={link.label}
                    className={`leftsidebar_link ${isActive && "bg-green-600"}`}
                    >
                    <Image 
                    src={link.imgURL}
                    alt={link.label}
                    width={24}
                    height={24}
                    />

                    <p className={`text-${isActive ? "white" : "green-600"} max-lg:hidden`}>
                    {link.label}
                    </p>
                    </Link>
                )}
                )}
            </div>
            <div className="px-6 mt-0">
                        <Link href={'https://whatsapp.com/channel/0029Vajn8TuFcovziHg7rM2B'}>
                        <div className="flex gap-4 p-4 cursor-pointer">
                            <Image src={files.group}alt="Logout" width={24} height={24}/>
                            <p className="text-green-600 max-lg:hidden">Join Community</p>
                        </div>
                    </Link>
            </div>
            {session?.user ? (
                        <div className="px-6 mt-10">
                        <button>
                        <div className="flex gap-4 p-4 cursor-pointer">
                            <Image src={logout}alt="Logout" width={24} height={24}/>
                            <p className="text-green-600 max-lg:hidden">Logout</p>
                        </div>
                    </button>
            </div>
            ):(
                <div></div>
            )}
        </section>
    )
}

export default LeftSidebar;
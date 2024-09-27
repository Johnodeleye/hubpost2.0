//This is the mobile bottom navigation
'use client'
import {sidebarLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import SlideBar from './SlideBar';
function Bottombar() {
    const router = useRouter();
    const pathname = usePathname();
    
    return (
        <section className="bottombar">
            <div className="bottombar_container">
            {sidebarLinks.map((link) => {
            const isActive = pathname ? (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route : false;
                        
                            //   if(link.route === '/profile') link.route = `${link.route}/${userId}`
                
                return (
                    <>
                    <Link
                        href={link.route}
                        key={link.label}
                        className={`bottombar_link ${isActive && "bg-green-600"}`}
                    >
                        <Image
                            src={link.imgURL}
                            alt={link.label}
                            width={24}
                            height={24} />

                        <p className={`text-${isActive ? "white" : "green-600"} max-sm:hidden`} style={{ fontSize: '12px' }}>
                            {link.label.split(/\s+/)[0]}
                        </p>
                    </Link>
                    </>
                )}
                )}
                <SlideBar/>
            </div>
        </section>
    )
}

export default Bottombar;
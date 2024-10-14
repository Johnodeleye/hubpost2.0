'use client';
import React from 'react';
import { useState } from 'react'
import '@/app/globals.css';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import logo from '@/app/assets/Logo White.png';
import Image from 'next/image';
import Bottombar from '@/components/Bottombar';
import Topbar from '@/components/Topbar';
import LeftSidebar from '@/components/Leftbar';
import Footer from '@/components/Footer';

export default function Learn() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>  
      <div className='min-h-screen overflow-hidden bg-[#1F2937]'>
        {/* <Topbar/> */}
        {/* <LeftSidebar/> */}
        <header className="absolute inset-x-0 top-0 z-50">
          {/* Nav content */}
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only"> HubPost </span>
              <Image
                src={logo}
                className="w-auto h-8 ml-4"
                alt='hubpost' />
            </a>
          </div>
        </header>
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 mt-8">
          <h2 className="text-heading2-semibold font-bold text-green-400 mt-4">
            Welcome to HubPost
          </h2>
          <h2 className="text-xl font-bold mb-2 text-green-600">Our Mission</h2>
          <p className="text-lg leading-7 mb-8 text-light-1">
            <code>At HubPost, we believe in the power of creativity and innovation. We're dedicated to empowering creators and founders to build a remarkable online presence that inspires and uplifts others. Our mission is to provide a platform where you can share your ideas, showcase your talents, and connect with like-minded individuals who share your passions.</code>
          </p>
          <h2 className="text-xl font-bold mb-2 text-green-600">What is HubPost?</h2>
          <p className="text-lg leading-7 mb-8 text-light-1">
            HubPost is more than just a platform - it's a community of dreamers, thinkers, and doers. We offer a range of tools and resources to help you establish yourself as a thought leader in your niche, connect with your audience, and grow your online community.
          </p>
          <h2 className="text-xl font-bold mb-2 text-green-600">Benefits of HubPost</h2>
          <ul className="list-disc pl-4 mb-8 text-light-1">
            <li className="text-lg leading-7 mb-2">
              Connect with like-minded individuals: Join a community that shares your passions and interests, and collaborate with others to achieve greatness.
            </li>
            <li className="text-lg leading-7 mb-2">
              Access exclusive resources: Get access to expert advice, tutorials, and industry insights that will help you grow your online presence and achieve your goals.
            </li>
            <li className="text-lg leading-7">
              Stay updated on industry trends: Stay ahead of the curve with the latest news, updates, and trends in your niche, and use that knowledge to fuel your creativity and innovation.
            </li>
          </ul>
          <h2 className="text-xl font-bold mb-2 text-green-600">Features of HubPost</h2>
          <ul className="list-disc pl-4 text-light-1">
            <li className="text-lg leading-7 mb-2">
              Customizable profiles: Showcase your personality and brand with our customizable profile options, and stand out from the crowd.
            </li>
            <li className="text-lg leading-7 mb-2">
              Community forums: Connect with others, ask questions, and share your expertise in our community forums, and help create a supportive and inspiring community.
            </li>
            <li className="text-lg leading-7">
              Resource library: Access a library of expert advice, tutorials, and industry insights that will help you grow your online presence and achieve your goals.
            </li>
          </ul>
        </div>
        <Footer />
        <Bottombar />  
      </div>
    </>
  );
};
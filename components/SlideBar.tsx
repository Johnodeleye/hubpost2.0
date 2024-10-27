'use client'
import React from 'react'
import Head from 'next/head';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useState } from 'react'
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import  '@/app/globals.css';
import logo from '@/app/assets/Logo White.png';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

const navigation = [
  { name: 'Learn More', href: '/LearnMore' },
  { name: 'Support', href: '/faq' },
  { name: 'Blog', href: '/authors/info' },
  { name: 'Contact', href: 'https://thefuturefounder.onrender.com#contact' },
  { name: 'Join Community', href: 'https://whatsapp.com/channel/0029Vajn8TuFcovziHg7rM2B' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { data: session } = useSession();
  return (
    <div >
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-1.5 bg-light-2 text-green-600"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="w-6 h-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2.5 text-base leading-1 text-sm font-semibold leading-6 text-green-400 hover:bg-white">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="/sign-in" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-1 text-sm leading-6 text-white hover:bg-green-600">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-[#1F2937] sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only"> HubPost </span>
                <Image
                src={logo}
                className="w-auto h-8"
                alt='hubpost'
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-green-600"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="w-6 h-6" />
              </button>
            </div>
            <div className="flow-root mt-6">
              <div className="-my-6 divide-y divide-green-600">
                <div className="py-6 space-y-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-green-600 rounded-lg hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                {!session?.user ? (
                <div className="py-6">
                <a
                    href="/sign-up"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-green-600"
                  >
                    Get Started
                  </a>
                  
                  <a
                    href="/sign-in"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-green-600"
                  >
                    Log in
                  </a>
                </div>
                ):(
                  <p className='italic text-gray-400 pt-6'>You're currently signed in as {session?.user?.name ||'null'}</p>
                )}
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      
    </div>
  )
}

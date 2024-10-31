'use client';

import Image from "next/image";
import whatsapp from '@/app/assets/whatsapp.png';
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Field, Label, Switch } from '@headlessui/react';

interface Props {
  showPopup: boolean;
  setShowPopup: (showPopup: boolean) => void;
}

const WhatsappLive = ({ showPopup, setShowPopup }: Props) => {
  const [showWhatsappPopup, setShowWhatsappPopup] = useState(showPopup);
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    setShowWhatsappPopup(showPopup);
  }, [showPopup]);

  const handlePopupClick = () => {
    setShowWhatsappPopup(true);
  };

  const onsubmit = async function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8d4a9798-6b50-4e7e-b2d6-55108dd78b15");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });
    const result = await response.json();
    if (result.success) {
      Swal.fire({
        title: "Success!",
        text: "Thank you for your message, we'll get back to you",
        icon: "success"
      });
      sendEmail();
    }
  }

  const sendEmail = async () => {
    const res = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({

      })
    });
  }

  return (
    <div className="isolate bg-dark-3 px-6 py-15 sm:py-32 lg:px-8">
      <button className="whatsapp-link fixed bottom-4 right-4 z-50 md:bottom-8 md:right-8 lg:bottom-12 lg:right-12" onClick={handlePopupClick}>
        <span className="absolute left-[7px] top-[7px] -z-50 size-10">
          <span className="flex size-full items-center justify-center animate-spin rounded-full bg-green-500 opacity-75"></span>
        </span>
        <Image src={whatsapp} alt="whatsapp" width={40} height={40} className="whatsapp-icon z-50" />
      </button>

      {/* Popup content */}
      {showWhatsappPopup && (
      
  <div className="isolate bg-dark-3 px-6 py-16 sm:py-20 lg:px-8">
  <div
    aria-hidden="true"
    className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
  >
    <div
      style={{
        clipPath:
          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
      }}
      className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
    />
  </div>
  <div className="mx-auto max-w-2xl text-center">
  <button
       onClick={() => setShowPopup(false)}
        className="block w-full rounded-md bg-red-600 px-3.5 py-2.5 mb-10  text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Close
      </button>
    <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-300 sm:text-5xl">Share your Feeback</h2>
    <p className="mt-2 text-lg/8 text-gray-400">Help us improve, by sharing your feedback about this community and about what needs to be done</p>
  </div>
  <form onSubmit={onsubmit} method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-300">
          First name
        </label>
        <div className="mt-2.5">
          <input
            id="first-name"
            name="first-name"
            type="text"
            autoComplete="given-name"
            className="block w-full rounded-md border-0 px-3.5 py-2 bg-dark-3 text-gray-300 shadow-sm ring-1 ring-inset ring-dark-3 placeholder:text-green-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm/6"
          />
        </div>
      </div>
      <div>
        <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-300">
          Last name
        </label>
        <div className="mt-2.5">
          <input
            id="last-name"
            name="last-name"
            type="text"
            autoComplete="family-name"
            className="block w-full rounded-md border-0 px-3.5 py-2 bg-dark-3 text-gray-300 shadow-sm ring-1 ring-inset ring-dark-3 placeholder:text-green-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm/6"
          required
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-300">
          Email
        </label>
        <div className="mt-2.5">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="block w-full rounded-md border-0 px-3.5 py-2 bg-dark-3 text-gray-300 shadow-sm ring-1 ring-inset ring-dark-3 placeholder:text-green-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm/6"
          required
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-300">
          Phone number
        </label>
        <div className="relative mt-2.5">
          <div className="absolute inset-y-0 left-0 flex items-center">
            <label htmlFor="country" className="sr-only">
              Country
            </label>
            <select
              id="country"
              name="country"
              className="h-full rounded-md border-0 bg-transparent bg-dark-3 py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm"
            >
              <option>US</option>
              <option>CA</option>
              <option>NG</option>
              <option>EU</option>
              <option>Other</option>
            </select>
            <ChevronDownIcon
              aria-hidden="true"
              className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
            />
          </div>
          <input
            id="phone-number"
            name="phone-number"
            type="tel"
            autoComplete="tel"
            className="block w-full rounded-md border-0 bg-dark-3 px-3.5 py-2 pl-20 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-green-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm/6"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
          Message
        </label>
        <div className="mt-2.5">
          <textarea
            id="message"
            name="message"
            rows={4}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-green-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm/6"
            defaultValue={''}
          />
        </div>
      </div>
      <Field className="flex gap-x-4 sm:col-span-2">
        <div className="flex h-6 items-center">
          <Switch
            checked={agreed}
            onChange={setAgreed}
            className="group flex w-8 flex-none cursor-pointer rounded-full bg-dark-3 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 data-[checked]:bg-green-600"
          >
            <span className="sr-only">Agree to policies</span>
            <span
              aria-hidden="true"
              className="h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
            />
          </Switch>
        </div>
        <Label className="text-sm/6 text-gray-600">
          By selecting this, you agree to our{' '}
          <a href="/privacy" className="font-semibold text-green-600">
            privacy&nbsp;policy
          </a>
          .
        </Label>
      </Field>
    </div>
    <div className="mt-10">
      <button
        type="submit"
        className="block w-full rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
      >
        Send
      </button>
    </div>
  </form>
</div>
      )}
    </div>
  );
};

export default WhatsappLive;
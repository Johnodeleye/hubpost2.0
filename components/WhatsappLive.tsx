'use client';
import Image from "next/image";
import whatsapp from '@/app/assets/whatsapp.png';
import { useEffect, useState } from "react";
import Swal from 'sweetalert2'

const WhatsappLive = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const whatsappLinkElement = document.querySelector(".whatsapp-link");

      if (window.scrollY > 100) {
        whatsappLinkElement?.classList.add("visible");
      } else {
        whatsappLinkElement?.classList.remove("visible");
      }
    };

    const checkScrollVisibility = () => {
      const whatsappLinkElement = document.querySelector(".whatsapp-link");
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollHeight > clientHeight) {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
      } else {
        whatsappLinkElement?.classList.add("visible");
      }
    };

    checkScrollVisibility();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlePopupClick = () => {
    setShowPopup(true);
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
        text: "Thank you for your message, we'll get back to you😎",
        icon: "success"
      });
      sendEmail();
    }
}

const sendEmail = async() => {
const res = await fetch("/api/send", {
  method: "POST",
  body: JSON.stringify({
    
  })
});
}

  return (
    <div className="">
      <button className="whatsapp-link relative" onClick={handlePopupClick}>
        <span className="absolute left-[7px] top-[7px] -z-50 size-10">
          <span className="flex size-full items-center justify-center animate-spin rounded-full bg-green-500 opacity-75"></span>
        </span>
        <Image src={whatsapp} alt="whatsapp" width={40} height={40} className="whatsapp-icon z-50" />
      </button>

      {/* Popup content */}
      {showPopup && (
        <div className=" fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-dark-1 shadow-lg shadow-green-600 rounded-md shadow-outline popup-container">
          <div className="flex justify-between items-center text-center mb-4">
            <h3 className="text-base lg:text-lg font-bold text-green-400 md:text-center">Share Your <span className="ml-5 lg:ml-0">Feedback 💯</span></h3>

            <button className="text-red-600 font-bold lg:ml-4 tooltip" onClick={() => setShowPopup(false)}>

              ❌
            </button>
          </div>
          <p className="text-sm text-ellipsis text-gray-600 mb-4">Help us improve by sharing your feedback about HubPost</p>
          <form className="flex flex-col gap-2" onSubmit={onsubmit}>
            <code><input required type="text" name="name" className="border rounded-md p-2 bg-dark-4 lg:w-full sm:w-11/12" placeholder="Enter your name" id="name" /></code>
            <code><input required type="email" name="email" className="border rounded-md p-2 bg-dark-4 lg:w-full sm:w-11/12" placeholder="Enter your email" id="email" /></code>
           <code> <textarea required name="message" className="border rounded-md p-2 bg-dark-4 lg:w-full text-ellipsis sm:w-11/12" placeholder="Your message...." id="message"></textarea> </code>
            <button type="submit" className="bg-green-400 text-white rounded-md p-2 mt-2 sm:w-11/12">Send {''}{''}➡</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default WhatsappLive; 
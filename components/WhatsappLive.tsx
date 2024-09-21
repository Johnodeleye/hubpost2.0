'use client';
import Image from "next/image";
import whatsapp from '@/app/assets/whatsapp.png';
import { useEffect, useState } from "react";

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
  
  const sendWhatsapp = () => {
    // Get references to the input elements after they are rendered
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
  
    // Check if all elements are found before accessing their values
    if (nameInput && emailInput && messageInput) {
      const nameInput = document.getElementById("name") as HTMLInputElement;
      const messageInput = document.getElementById("message") as HTMLInputElement;
      const emailInput = document.getElementById("email") as HTMLInputElement;
      const name = nameInput.value;
      const email = emailInput.value;
      const message = messageInput.value;
  
      // Build the URL string
      const url = "https://wa.me/" + "+2348120423106" + "?text="
        + " *HubPost's Review from* " + name + "%0a"
        + " My *Name* is " + name + "%0a"
        + " My *Email* is " + email + "%0a"
        + " My *Message* goes thus:" + message + "%0a%0a";
  
        const newWindow = window.open(url, '_blank');
        if (newWindow) {
          newWindow.focus();
        } else {
          console.error("Failed to open a new window for WhatsApp");
        }
    } else {
      console.error("Failed to find input elements with the provided IDs");
    }
  };

  //   e.preventDefault();
  //   // Handle form submission here (e.g., send data to server)
  //   setShowPopup(false);
  // };

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
            <h3 className="text-base lg:text-lg font-bold text-green-400">Share Your Feedback 💯</h3>
            <span className="">
           
            </span>
            <button className="text-red-600 font-bold lg:ml-4 tooltip" onClick={() => setShowPopup(false)}>
              ❌
            </button>
          </div>
          <p className="text-sm text-ellipsis text-gray-600 mb-4">Help us improve by sharing your feedback about HubPost</p>
          <form className="flex flex-col gap-2">
            <code><input required type="text" name="name" className="border rounded-md p-2 bg-dark-4 lg:w-full" placeholder="Enter your name" id="name" /></code>
            <code><input required type="email" name="email" className="border rounded-md p-2 bg-dark-4 lg:w-full" placeholder="Enter your email" id="email" /></code>
           <code> <textarea required name="message" className="border rounded-md p-2 bg-dark-4 lg:w-full text-ellipsis" placeholder="Your message...." id="message"></textarea> </code>
            <button onClick={sendWhatsapp} type="submit" className="bg-green-400 text-white rounded-md p-2 mt-2">Send {''}{''}➡</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default WhatsappLive; 
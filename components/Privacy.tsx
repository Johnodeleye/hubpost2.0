'use client';
import { useState } from 'react';
import WhatsappLive from './WhatsappLive';
import { Button } from './ui/button';
export default function PrivacyPolicy() {
    const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8 bg-gray-900 text-white">
      
      {/* Title Section */}
      <h1 className="text-4xl font-bold text-green-400 mb-4">Privacy Policy</h1>
      <p className="text-xl mt-2 font-bold italic text-gray-300">Your Privacy Matters</p>
      
      {/* Introduction Section */}
      <h2 className="text-2xl font-bold text-green-400 mt-8 mb-2">Introduction</h2>
      <p className="text-lg text-gray-300 mb-4">HubPost cares about your privacy. This policy outlines how we collect, use, and protect your personal data.</p>
      
      {/* Information We Collect Section */}
      <h2 className="text-2xl font-bold text-green-400 mt-8 mb-2">Information We Collect</h2>
      <ul className="list-disc text-lg text-gray-300 pl-4 mb-4">
        <li className="bg-gray-800 p-2 rounded-lg mb-2"><span className="font-bold">Registration Information:</span> We collect your Google or GitHub authentication details, including:</li>
        <ul className="list-disc text-lg text-gray-300 pl-8 mb-4">
          <li>Email address</li>
          <li>Profile picture</li>
          <li>Username</li>
          <li>Profile ID</li>
        </ul>
        <li className="bg-gray-800 p-2 rounded-lg mb-2"><span className="font-bold">Interaction Data:</span> Posts, comments, likes, and other interactions on our platform</li>
      </ul>
      
      {/* Use of Information Section */}
      <h2 className="text-2xl font-bold text-green-400 mt-8 mb-2">Use of Information</h2>
      <p className="text-lg text-gray-300 mb-4">We use your information to provide and improve our services, communicate with you, and enforce our policies.</p>
      
      {/* Sharing Information Section */}
      <h2 className="text-2xl font-bold text-green-400 mt-8 mb-2">Sharing Information</h2>
      <p className="text-lg text-gray-300 mb-4">We may share your information with third-party service providers, affiliates, or law enforcement agencies as required by law.</p>
      
      {/* Data Security Section */}
      <h2 className="text-2xl font-bold text-green-400 mt-8 mb-2">Data Security</h2>
      <p className="text-lg text-gray-300 mb-4">We implement industry-standard security measures to protect your data.</p>
      
      {/* Your Rights Section */}
      <h2 className="text-2xl font-bold text-green-400 mt-8 mb-2">Your Rights</h2>
      <p className="text-lg text-gray-300 mb-4">You have the right to access, correct, or delete your personal data. Contact <button onClick={() => setShowPopup(true)} className="text-green-400">support@hubpost.com</button> for assistance.</p>
      
      {/* Changes to This Policy Section */}
      <h2 className="text-heading3-bold font-bold text-green-400 mt-8 mb-2">Changes to This Policy</h2>
      <p className="text-lg text-gray-300 mb-4">We reserve the right to update this policy. Changes will be effective immediately upon posting.</p>
      <div className="bg-green-400">
      <WhatsappLive showPopup={showPopup} setShowPopup={setShowPopup}/>
      </div>
    </div>
  );
}
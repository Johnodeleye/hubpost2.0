'use client';
import Link from 'next/link';
import WhatsappLive from './WhatsappLive';
import { useState } from 'react';

export default function CommunityGuidelines() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8 bg-gray-900 text-white">
      
      {/* Title Section */}
      <h1 className="text-heading3-bold font-bold text-green-400 mb-4">Community Guidelines</h1>
      <p className="text-xl mt-2 font-bold italic text-gray-300">Spark, Connect, Ignite!</p>
      
      {/* Introduction Section */}
      <h2 className="text-2xl font-bold text-green-400 mt-8 mb-2">Introduction</h2>
      <p className="text-lg text-gray-300 mb-4">Welcome to HubPost! Our community is built on respect, inclusivity, and open communication.</p>
      
      {/* Guiding Principles Section */}
      <h2 className="text-2xl font-bold text-green-400 mt-8 mb-2">Guiding Principles</h2>
      <ul className="list-disc text-lg text-gray-300 pl-4 mb-4">
        <li className="bg-gray-800 p-2 rounded-lg mb-2"><span className="font-bold">Respect:</span> Treat others with kindness and respect.</li>
        <li className="bg-gray-800 p-2 rounded-lg mb-2"><span className="font-bold">Family-Friendly:</span> No profanity, nudity, or explicit content.</li>
        <li className="bg-gray-800 p-2 rounded-lg mb-2"><span className="font-bold">No Harassment:</span> Report incidents immediately.</li>
        <li className="bg-gray-800 p-2 rounded-lg mb-2"><span className="font-bold">Intellectual Property:</span> No copyright infringement.</li>
        <li className="bg-gray-800 p-2 rounded-lg mb-2"><span className="font-bold">Relevant Conversations:</span> Stay on topic.</li>
      </ul>
      
      {/* Prohibited Content Section */}
      <h2 className="text-2xl font-bold text-green-400 mt-8 mb-2">Prohibited Content</h2>
      <ul className="list-disc text-lg text-gray-300 pl-4 mb-4">
        <li className="bg-gray-800 p-2 rounded-lg mb-2">Hate speech or discrimination</li>
        <li className="bg-gray-800 p-2 rounded-lg mb-2">Violence or threats</li>
        <li className="bg-gray-800 p-2 rounded-lg mb-2">Spam or self-promotion</li>
        <li className="bg-gray-800 p-2 rounded-lg mb-2">Pirated or copyrighted materials</li>
        <li className="bg-gray-800 p-2 rounded-lg mb-2">Malicious or harmful content</li>
      </ul>
      
      {/* Reporting Violations Section */}
      <h2 className="text-2xl font-bold text-green-400 mt-8 mb-2">Reporting Violations</h2>
      <p className="text-lg text-gray-300 mb-4">If you witness or experience harmful behavior, report it {''} 
        <button onClick={() => setShowPopup(true)} className="text-green-400">Here</button>
      </p>
      
      {/* Consequences Section */}
      <h2 className="text-2xl font-bold text-green-400 mt-8 mb-2">Consequences</h2>
      <p className="text-lg text-gray-300 mb-4">Violations may result in temporary or permanent suspension of accounts.</p>
      
      <WhatsappLive showPopup={showPopup} setShowPopup={setShowPopup} />
    </div>
  );
}
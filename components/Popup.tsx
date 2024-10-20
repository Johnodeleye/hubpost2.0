'use client';

import { useState } from 'react';
import Share from './Share';
import { files } from '@/app/assets/files';
import Image from 'next/image';

interface PopupProps {
  children: React.ReactNode;
  id: string;
}

const Popup = ({ children, id }: PopupProps) => {
  const [isShareOpen, setIsShareOpen] = useState(false);

  const handleShareClick = () => {
    setIsShareOpen(true);
  };

  const handleShareClose = () => {
    setIsShareOpen(false);
  };

  return (
    <div>
      <button onClick={handleShareClick}>
        {children}
      </button>

      {isShareOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center share-popup">
        <div className="bg-white p-4 rounded-md w-96 relative cursor-pointer">
          <button className="absolute top-2 right-2 mr-3" onClick={handleShareClose}>
            ❌
          </button>
          <Share url={`${process.env.NEXTAUTH_URL}/posts/${id}`} />
        </div>
      </div>
      )}
    </div>
  );
};

export default Popup;
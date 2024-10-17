import React from 'react';
import Image from 'next/image';
import { files } from '@/app/assets/files';

const verifiedUserIds = ['67110a882ef002fb20e97156',]; 

interface VerifiedProps {
  authorId: string;
}

const Verified: React.FC<VerifiedProps> = ({ authorId }) => {
  if (verifiedUserIds.includes(authorId)) {
    return (
      <Image
        src={files.verified} 
        alt="Verified"
        width={20}  // Increased width
        height={20}  // Increased height
        className="verified-icon"
      />
    );
  }
  return null;
};

export default Verified;
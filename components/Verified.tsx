import React from 'react';
import Image from 'next/image';
import { files } from '@/app/assets/files';

const verifiedUserIds = ['67110a882ef002fb20e97156', '67110f1c2ef002fb20e9715a', '672412b819b4e5b906e5a01d','672415b949fb23ee4fb70739']; 

interface VerifiedProps {
  authorId: string;
  className: string;
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
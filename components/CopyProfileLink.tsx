'use client';

import { files } from "@/app/assets/files";
import Image from "next/image";
import toast from "react-hot-toast";

function CopyProfileLink({ authorId, authorEmail }: { authorId: string, authorEmail?: string }) {
  const profileLink = `${process.env.NEXTAUTH_URL}/authors/${authorEmail}`;
  const handleCopyProfileLink = (link: string) => {
    navigator.clipboard.writeText(link).then(() => {
      toast.success('Profile link copied to clipboard!', {
        // 2 seconds
      });
      console.log('Profile link copied to clipboard');
    }).catch((error) => {
      toast.error('Error copying profile link', {
      });
      console.error('Error copying profile link:', error);
    });
  };

  return (
    <span 
      className="flex mt-2 bg-gray-900 py-2 gap-3 rounded-md cursor-pointer"
      onClick={() => handleCopyProfileLink(profileLink)}
    >
      <Image src={files.copy} alt="copy" className='ml-3 w-6 h-6' />
      <p className="text-green-400">Copy Profile Link</p>
    </span>
  );
}

export default CopyProfileLink;
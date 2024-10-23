'use client';

import { files } from "@/app/assets/files";
import Image from "next/image";
import toast from "react-hot-toast";

function CopyProfileId({ authorId }: { authorId: string }) {
    const handleCopyAuthorId = (id: string) => {
        navigator.clipboard.writeText(id).then(() => {
          toast.success('Author ID copied to clipboard!', {
             // 2 seconds

          });
          console.log('Author ID copied to clipboard');
        }).catch((error) => {
          toast.error('Error copying author ID', {
          });
          console.error('Error copying author ID:', error);
        });
      };

    return (
      <span 
        className="flex mt-2 bg-gray-900 py-2 gap-3 rounded-md cursor-pointer"
        onClick={() => handleCopyAuthorId(authorId)}
      >
        <Image src={files.copy} alt="copy" className='ml-3 w-6 h-6' />
        <p className="text-green-400">Copy Profile ID</p>
      </span>
    );
  }

export default CopyProfileId;
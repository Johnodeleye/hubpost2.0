
import Image from 'next/image'
import { files } from "@/app/assets/files"

const Verified = () => {
  return (
    <Image
      src={files.verified}
      alt="Verified badge"
      layout="fixed"
      width={24} 
      height={24} 
      className="w-4 h-4 ml-2"
    />
  );
};

export default Verified;
/* In your Verified component */
import Image from 'next/image'
import { files } from "@/app/assets/files"

const Verified = () => {
  return (
    <Image
      src={files.verified}
      alt="Verified badge"
      layout="fixed"
      className="verified-badge mr-5"
    />
  );
};

export default Verified;
import { files } from '@/app/assets/files';
import Image from 'next/image';

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-50">
      <Image src={files.logo} alt="Loading..." />
    </div>
  );
};

export default Loader;
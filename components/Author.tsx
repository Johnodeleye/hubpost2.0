import Image from "next/image"
import Link from "next/link"
import offimage from '@/app/assets/thumbnail-placeholder.png'
import userimage from '@/app/assets/user.svg'
import DeleteButton from "./DeleteButton"
import { files } from "@/app/assets/files";
import Verified from "./Verified";
import { getServerSession } from "next-auth";
import authOptions from '@/lib/auth';
import CopyProfileId from "@/components/CopyProfile"
import CopyProfileLink from "./CopyProfileLink"

interface PostProps {
    author: string,
    authorimg?: string,
    authorid: string,
    authorEmail?: string,
    authorbio?: string,
}



 function formatPostDate(date: string | number) {
  const dateObject = new Date(date as string);
  const seconds = Math.floor((new Date().getTime() - dateObject.getTime()) / 1000);
  const min = 60;
  const hour = 3600;
  const day = 86400;
  const week = 604800;

  if (seconds < min) {
    return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
  } else if (seconds < hour) {
    return `${Math.floor(seconds / min)} min${Math.floor(seconds / min) > 1 ? 's' : ''} ago`;
  } else if (seconds < day) {
    return `${Math.floor(seconds / hour)} hour${Math.floor(seconds / hour) > 1 ? 's' : ''} ago`;
  } else if (seconds < week) {
    return `${Math.floor(seconds / day)} day${Math.floor(seconds / day) > 1 ? 's' : ''} ago`;
  } else {
    return `${dateObject.toLocaleString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
      year: "numeric",
    })}`;
  }
}

const Page = async ({
    author,
    authorimg,
    authorid,
    authorEmail,
    authorbio,
}: PostProps) => {

  const session = await getServerSession(authOptions);

  const isEditable = session && session?.user?.email === authorEmail;

  // const formattedDate = formatPostDate(date);

  const sessionEmail = session?.user?.email;

    return(
        <div className='flex flex-col justify-start w-full'>
            <div className='flex items-center justify between'>
                <div className='flex items-center gap-3'>
                    <div className='relative object-cover w-20 h-20'>
                        {/* This Classname above which is relative.... makes a profile pic okay when building a profile photo  */}
                        <Image
                        src={authorimg || userimage}
                        alt='Profile image'
                        fill
                        className='object-cover rounded-full shadow-2xl'
                        />
                    </div>
                    
                    <div className="flex-1 flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-heading3-bold text-light-1 truncate-name">{author}</span>
              <Verified authorId={authorid} className="" />
            </div>
            <p className="text-base-medium text-gray-1 truncate-email">@{authorEmail}</p>
          </div>
                </div>
              </div>
              
              <p className='max-w-lg mt-2 text-base-regular text-light-2'>{authorbio}</p>
              <div className="">
          <p className='max-w-lg mt-2 text-base-regular text-light-2'>Profile ID: <span className="text-green-400 font-bold">{authorid}</span>
          </p>
          <CopyProfileId authorId={authorid} />
          <CopyProfileLink authorId={authorid} authorEmail={authorEmail} />
        </div>

              <div className='mt-4  bg-dark-3'>
              {isEditable && (
                <Link href={`/edit-profile/${sessionEmail}`}>
                    <div className='flex cursor-pointer gap-3 rounded-lg bg-gray-900 px-4 py-2'>
                    <Image src={files.edit} alt="edit" />
              <p className='text-green-400'>Edit Profile</p>
            </div>
          </Link>
             )}
            </div>

              <div className='h-0 mt-12.5 w-full bg-white'/>
            
        </div>
    )
}

export default Page
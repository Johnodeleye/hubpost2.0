import Image from "next/image"
import Link from "next/link"
import offimage from '@/app/assets/thumbnail-placeholder.png'
import userimage from '@/app/assets/user.svg'
import DeleteButton from "./DeleteButton"
import { files } from "@/app/assets/files";
import Verified from "./Verified";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface PostProps {
    id: string,
    author: string,
    authorimg?: string,
    authorid: string,
    date: string,
    image?: string,
    authorEmail?: string,
    title: string,
    content: string,
    links?: string[],
    category?: string
}

//List if Verified User
const verifiedUserIds = ['66ef45f5a6138e4340dbe9f6',
  '66ef46f5a6138e4340dbe9fa',
  '',
 ];

 function formatPostDate(date: string | number) {
  const dateObject = new Date(date as string);
  const seconds = Math.floor((new Date().getTime() - dateObject.getTime()) / 1000);
  const minute = 60;
  const hour = 3600;
  const day = 86400;
  const week = 604800;

  if (seconds < minute) {
    return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
  } else if (seconds < hour) {
    return `${Math.floor(seconds / minute)} minute${Math.floor(seconds / minute) > 1 ? 's' : ''} ago`;
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

const Post = async ({
    id,
    author,
    authorimg,
    authorid,
    date,
    image,
    authorEmail,
    title,
    content,
    links,
    category,
}: PostProps) => {

  const session = await getServerSession(authOptions);

  const isEditable = session && session?.user?.email === authorEmail;

  const formattedDate = formatPostDate(date);

  return (
    <div className="my-4 border-b border-b-300 py-8">

      <div className="flex items-center mb-4">
        <Image
          src={authorimg || userimage}
          width={24}
          height={24}
          alt={title}
          className="rounded-full object-cover w-8 h-8 mr-2"
        />
        <div className="flex items-center flex-grow">
          <h4 className='text-light-1 text-base-semibold'>
          <Link href={`/user/${authorid}`}>
            {author}
            </Link>
            </h4>
          {verifiedUserIds.includes(authorid) && <Verified />}
          {isEditable && (
            <div className="flex gap-7 font-bold py-2 px-4 rounded-md bg-gray-800 w-fit ml-auto">
              <Link href={`/edit-post/${id}`}>
                <Image src={files.edit} alt="edit" />
              </Link>
              <DeleteButton id={id}/>
            </div>
          )}
        </div>
      </div>

      <div className="w-full h-72 relative">
        <Image
          src={image || offimage}
          alt={title}
          className="object-cover rounded-md object-center"
          fill
        />
      </div>

      {category && (
        <Link className="bg-green-500 w-fit text-white px-4 py-0.5 text-sm font-bold rounded-md mt-4 block" href={`categories/${category}`}>
          {category}
        </Link>
      )}

      <h2 className="text-heading2-semibold mt-2">{title}</h2>
      <div>
        <p className="content text-base-medium truncatepost sm:truncatepost-none">
          <code>{content}</code>
          </p>
          <Link className="text-green-400 font-bold lg:hidden md:hidden" href={`/post/${id}`}>Read More</Link>
          </div>

          {links && links.length > 0 ? (
          <div className="my-4 flex flex-col gap-3">
            {links.map((link, i) => (
              <div key={i} className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
                <Link className="link" href={link}>{link}</Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 italic mt-3">No links available</p>
        )}

<span className="text-gray-400 m-1 text-sm mr-5">
Posted {''} {formattedDate} by {''}
  <span className="inline-flex items-center">
    <span className="author-name truncate sm:truncate-none">
      {author} 
    </span>
    {verifiedUserIds.includes(authorid) && <Verified />}
  </span>
</span>

    <div className="flex gap-4 mt-4">
      <button>
        <Image src={files.comment} alt={'reply'} />
      </button>
      <button>
        <Image src={files.comment} alt={'reply'} />
      </button>
      <button>
        <Image src={files.comment} alt={'reply'} />
      </button>
    </div>
  </div>
)
}

export default Post
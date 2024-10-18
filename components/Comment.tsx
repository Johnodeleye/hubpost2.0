import Image from "next/image";
import Link from "next/link";
import userimage from '@/app/assets/user.svg';
import Verified from "./Verified";

interface CommentProps {
  id: string;
  author: string;
  authorid: string;
  authorimg?: string;
  authorEmail?: string;
  date: string;
  content: string;
}

const Comment = ({ id, author, authorimg, authorEmail, date, content, authorid }: CommentProps) => {
  const formattedDate = formatCommentDate(date);

  return (
    <div key={id} className="my-4 border-b border-b-300 py-4">
      <div className="flex items-center mb-4">
        <Image
          src={authorimg || userimage}
          width={24}
          height={24}
          alt={author}
          className="rounded-full object-cover w-8 h-8 mr-2"
        />
        <div className="flex items-center flex-grow">
          <h4 className='text-light-1 text-base-semibold inline-flex items-center'>
            <Link href={`/authors/${authorEmail}`}>
              {author}
            </Link>
            <Verified authorId={authorid} className="ml-1" />
          </h4>
        </div>
      </div>

      <p className="content text-base-medium whitespace-pre-line">
        {content}
      </p>

      <span className="text-gray-400 m-1 text-sm mr-5 italic">
        Commented {formattedDate} by  {''}
        <span className="inline-flex items-center">
          {author}
          <Verified authorId={authorid} className="ml-1" />
        </span>
      </span>
    </div>
  );
};


const formatCommentDate = (date: string | number) => {
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
};

export default Comment;
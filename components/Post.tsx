import Image from "next/image"
import Link from "next/link"
import offimage from '@/app/assets/thumbnail-placeholder.png'
import DeleteButton from "./DeleteButton"

interface PostProps {
    id: string,
    author: string,
    date: string,
    image?: string,
    authorEmail?: string,
    title: string,
    content: string,
    links?: string[],
    category?: string
}
const Post = ({
    id,
    author,
    date,
    image,
    authorEmail,
    title,
    content,
    links,
    category,
}: PostProps) => {

    const isEditable = true;

    return (
        <div className="my-4 border-b border-b-300 py-8">
            <div className="mb-4">
                Posted by: {''}
                <span className="font-bold text-green-400">{author}</span> on {date}
            </div>
            <div className="w-full h-72 relative">
                {image ? (<Image src={image} alt={title} fill className="object-cover rounded-md object-center"/> 
            ): 
            <Image
            src={offimage}
            alt={title}
            fill
            className="object-cover rounded-md object-center" />
             }
            </div>

            {category && (<Link className="bg-green-500 w-fit text-white px-4 py-0.5 text-sm font-bold rounded-md mt-4 block" href={`categories/${category}`}>{category}</Link>)}

            <h2>{title}</h2>
            <p className="content"><code>{content}</code></p>

            {links && (
                <div className="my-4 flex flex-col gap-3">
                    {links.map((link, i) =>(
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
            )}

            {
                isEditable && (
                    <div className="flex gap-3 font-bold py-2 px-4 rounded-md bg-green-400 w-fit">
                        <Link href={`/edit-post/${id}`}>Edit</Link>
                        <DeleteButton/>
                    </div>
                )
            }
        </div>
    )
}

export default Post
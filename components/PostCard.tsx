// components/PostCard.tsx
import React from "react";
import { TPost } from "@/app/types";
import Image from "next/image";
import { Button } from "./ui/button";
import router from 'next/router'
import Link from "next/link";

interface Props {
  post: TPost;
}

function PostCard({ post }: Props) {
  return (
    <article className='user-card'>
    <div className='user-card_avatar mt-5'>
        <Image
        src={post.imageUrl || ''}
        alt={post.catName || ''}
        width={48}
        height={48}
        className="rounded-full"
        />

    <div className="flex-1 text-ellipsis">
        <h4 className='text-base-semibold text-light-1 flex items-center'>
            {post.title}
        </h4>
        <p className='text-small-medium text-gray-1'>@{post.catName}</p>
    </div>
    </div>
    
    <Link href={`/posts/${post.id}`} className="user-card_btn text-center">
    <Button className='user-card_btn'>
        View Post
    </Button>
    </Link>
</article> 
  );
}

export default PostCard;
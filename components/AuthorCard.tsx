"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { TAuthor } from "@/app/types";
import Verified from "./Verified";
import router from "next/router";
import { Button } from "./ui/button";

interface Props {
  author: TAuthor;
}

function AuthorCard({ author }: Props) {
    return(
        <article className='user-card'>
            <div className='user-card_avatar mt-5'>
                <Image
                src={author.image}
                alt={author.name}
                width={48}
                height={48}
                className="rounded-full"
                />

            <div className="flex-1 text-ellipsis">
                <h4 className='text-base-semibold text-light-1 flex items-center'>
                    {author.name}
                    <Verified authorId={author.id} className="ml-1" />
                </h4>
                <p className='text-small-medium text-gray-1'>@{author.email}</p>
            </div>
            </div>
            
            <Button className='user-card_btn' onClick={() => router.push(`/authors/${author.email}`)}>
                View Profile
            </Button>
        </article> 
    )
}

export default AuthorCard;
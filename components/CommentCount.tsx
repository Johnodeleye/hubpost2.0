'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import { files } from "@/app/assets/files";

interface CommentCountProps {
  id: string;
}

const CommentCount = ({ id }: CommentCountProps) => {
  const [commentsCount, setCommentsCount] = useState(0);

  useEffect(() => {
    const fetchCommentsCount = async () => {
      const res = await fetch(`/api/posts/${id}`);
      const data = await res.json();
      setCommentsCount(data.commentsCount);
    };
    fetchCommentsCount();
  }, [id]);

  return (
    <button className="mt-3 ml-1">
      <Image src={files.comment} width={32} height={32} alt={'reply'} />
      <span className="text-sm ml-1">{commentsCount}</span>
    </button>
  );
};

export default CommentCount;
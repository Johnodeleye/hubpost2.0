'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import { files } from "@/app/assets/files";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";

interface LikeButtonProps {
  id: string;
  authorEmail: string;
}

const LikeButton = ({ id, authorEmail }: LikeButtonProps) => {
  const [likes, setLikes] = useState({ likesCount: 0, isLiked: false });
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchLikes = async () => {
      const res = await fetch(`/api/posts/${id}`);
      const data = await res.json();
      setLikes({ likesCount: data.likesCount, isLiked: data.isLiked });
    };
    fetchLikes();
  }, [id]);

  const handleLike = async () => {
    if (loading) return;
    if (!session) {
      toast.error("You need to sign in to like a post.");
      return;
    }
  
    setLoading(true);
    try {
      toast.loading("Liking Post!");
  
      const res = await fetch(`/api/posts/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ authorEmail: session.user?.email }), // Use session.user.email
      });
      toast.dismiss();
      const data = await res.json();
      setLikes({ likesCount: data.likesCount, isLiked: data.isLiked });
      toast.success("Liked Post!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to like post.");
    } finally {
      setLoading(false);
    }
  }; 
  return (
    <button onClick={handleLike} className="mt-3">
      <Image
        src={likes.isLiked ? files.heartFilled : files.heart}
        width={28}
        height={28}
        alt={likes.isLiked ? "unlike" : "like"}
      />
      <span className="text-sm ml-1">{likes.likesCount}</span>
    </button>
  );
};

export default LikeButton;
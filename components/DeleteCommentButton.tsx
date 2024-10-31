'use client'
import Image from "next/image"
import Alert from './alert';
import { useState } from "react";
import toast from "react-hot-toast";
import { files } from "@/app/assets/files";
import { useRouter } from "next/navigation";

interface DeleteCommentButtonProps {
  commentId: string;
  postId: string;
}

export default function DeleteCommentButton({ commentId, postId }: DeleteCommentButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleDelete = async () => {
    setIsLoading(true);
    try {
      toast.loading('Deleting Comment')
      const res = await fetch(`/api/comments/${commentId}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });

      toast.dismiss(); // Dismiss loading toast

      if (res.ok) {
        toast.success("Comment Deleted");
        router.refresh()
        // Refresh comments list or update UI
      }
    } catch (error) {
      toast.error('Failed to delete comment');
      console.log(error)
    } finally {
      setIsLoading(false);
      setIsOpen(false);
    }
  };

  const handleConfirmDelete = () => {
    handleDelete();
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpenAlert = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Image 
        src={files.del} // Update icon
        alt="delete comment button"
        className="cursor-pointer"
        onClick={handleOpenAlert}

      />
      <Alert
        isOpen={isOpen}
        onConfirm={handleConfirmDelete}
        onCancel={handleClose}
        onClose={handleClose}
      />
    </>
  )
}
'use client'
import Image from "next/image"
import { files } from "@/app/assets/files"
import Alert from './alert';
import { useState } from "react";
import toast from "react-hot-toast";

interface DeleteButtonProps {
  id: string;
}

export default function DeleteButton({ id }: DeleteButtonProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const deleteImage = async(publicId: string)=>{
      const res = await fetch('/api/removeImage', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ publicId }),
      });
    }
  
    const handleDelete = async () => {
      setIsLoading(true);
      try {
        toast.loading('Deleting Post')
        const res = await fetch(`/api/posts/${id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        });

        toast.dismiss(); // Dismiss loading toast

        if (res.ok) {
          toast.success("Post Deleted");
          const post = await res.json();
          const {publicId} = post;
          await deleteImage(publicId);
        }
      } catch (error) {
        toast.error('Failed to delete post');
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
        src={files.del}
        alt="delete button"
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
'use client'
import Image from "next/image"
import { files } from "@/app/assets/files"
import Alert from './alert';
import { useState } from "react";

interface DeleteButtonProps {
  id: string;
}

export default function DeleteButton({ id }: DeleteButtonProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
  
    const handleDelete = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/posts/${id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        });
  
        if (res.ok) {
          console.log("Post Deleted");
        }
      } catch (error) {
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
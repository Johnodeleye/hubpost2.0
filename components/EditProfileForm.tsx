'use client';

import { useState } from "react";
import toast from "react-hot-toast";
import { CldUploadButton, CloudinaryUploadWidgetResults } from "next-cloudinary";
import Image from "next/image";
import { files } from "@/app/assets/files";
import { useRouter } from 'next/router';
import { redirect } from "next/navigation";
import useNavigate  from 'next/navigation';

const EditProfileForm = ({ author }: { author: any }) => {

  const [name, setName] = useState(author.name);
  const [bio, setBio] = useState(author.bio);
  const [imageUrl, setImageUrl] = useState(author.imageUrl);
  const [publicId, setPublicId] = useState(author.publicId);


  const handleImageUpload = (result: CloudinaryUploadWidgetResults) => {
    toast.loading('Uploading image...'); // Display toast on upload start
    const info = result.info as object;
    if ('secure_url' in info && 'public_id' in info){
      toast.dismiss(); // Dismiss loading toast
      const url = info.secure_url as string;
      const public_id = info.public_id as string;
      setImageUrl(url);
      setPublicId(public_id);
      toast.success('Image uploaded successfully!');
    } else {
      toast.error('Failed to upload image.');
    }
  }

  const removeImage = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      toast.loading('Removing image...'); // Display toast notification)
      const res = await fetch("/api/removeImage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ publicId }),
      });
      toast.dismiss(); // Dismiss loading toast)
      if (res.ok) {
        setImageUrl("");
        setPublicId("");
      }
      toast.success('Image removed successfully!'); // Display success toast
    } catch (error) {
      console.log(error);
    }
  };

  // ...
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !bio) {
      toast.error('Name and Bio must be Provided!');
      return;
    }
    try {
      toast.loading('Updating Your Profile!')
      const res = await fetch(`/api/authors/${author.email}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, bio, imageUrl, publicId }),
      });
      toast.dismiss();
      if (res.ok) {
        toast.success('Profile Updated Successfully!', {
          duration: 3000, // Display for 3 seconds
        });
        toast.success('You can now Go back to Profile', {
          duration: 10000, 
        });
      } else {
        toast.error('Something went wrong, Please try again later')
      }
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div className="overflow-hidden">
      <h2 className="text-green-400 text-center">Edit Profile</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input 
          onChange={(e) => setName(e.target.value)} 
          type="text" 
          value={name}
          placeholder="Name"
        />
        <textarea 
          onChange={(e) => setBio(e.target.value)}
          placeholder="Bio" 
          cols={27} 
          value={bio}
          className="w-full"
        >
        </textarea>
        <CldUploadButton
          uploadPreset={process.env.CLOUDINARY_UPLOAD_PRESET} 
          className={`h-48 border-2 mt-4 border-doted grid place-items-center bg-green-400 rounded-md relative ${imageUrl && 'pointer-events-none'}`}
          onSuccess={handleImageUpload}
        >
          <div className="">
            <Image src={files.create} alt="upload image"/>
          </div>
          {imageUrl && <Image src={imageUrl} fill className="absolute object-cover inset-0" alt=''/>}
        </CldUploadButton>
        {publicId && <button onClick={removeImage} className="py-2 px-4 rounded-md font-bold w-fit bg-red-600 text-white mb-4">Remove Image</button>}
        <button className="primary-btn font-bold" type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default EditProfileForm;
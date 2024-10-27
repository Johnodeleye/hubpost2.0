'use client';
import { TCategory } from "@/app/types";
import Link from "next/link";
import router, { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import { CldUploadButton, CloudinaryUploadWidgetResults } from "next-cloudinary";
import { files } from "@/app/assets/files";
import Image from "next/image";
import toast from "react-hot-toast";

const CreatePostForm = () => {
  const [links, setLinks] = useState<string[]>([]);
  const [linkInput, setLinkInput] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState<TCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [publicId, setPublicId] = useState("");

  const router = useRouter();

useEffect(() => {
  const fetchAllCategories = async () => {
    const res = await fetch("api/categories");
    const catNames = await res.json();
    setCategories(catNames);
  };
  fetchAllCategories();
}, []);

const handleImageUpload = (result: CloudinaryUploadWidgetResults) => {
  console.log('result: ', result);
  const info = result.info as object;

  if ('secure_url' in info && 'public_id' in info){
    const url = info.secure_url as string;
    const public_id = info.public_id as string;
    setImageUrl(url);
    setPublicId(public_id);
    console.log('url: ', url);
    console.log('public_id: ', public_id);
  }
}

const removeImage = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/removeImage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ publicId }),
    });

    if (res.ok) {
      setImageUrl("");
      setPublicId("");
    }
  } catch (error) {
    console.log(error);
  }
};

const addLink = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    e.preventDefault();
    if (linkInput.trim() !== ''){
    setLinks((prev) => [...prev, linkInput]);
    setLinkInput('');
       }
  };

    const deleteLink = (index: number) => {
        setLinks((prev) => prev.filter((_, i) => i !== index))
    }

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
    
      if (!title || !content) {
        const errorMessage = 'Title and Content must be provided';
        toast.error(errorMessage);
        return;
      }
    
      try {
        toast.loading('Uploading post...'); // Start loading toast
    
        const res = await fetch("api/posts", {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            title, content, links, selectedCategory, imageUrl, publicId,
          }),
        });
    
        toast.dismiss(); // Dismiss loading toast
    
        if (res.ok) {
          toast.success('Post Created Successfully!');
          router.push("/dashboard");
          router.refresh();
        } else {
          toast.error('Something went wrong, Please try again later');
        }
      } catch (error) {
        toast.dismiss(); // Dismiss loading toast
        toast.error('Something went wrong!');
        console.log(error);
      }
    };

    return (
        <div className="overflow-hidden">
           <h2 className="text-green-400 text-center">Share Your Voice🔥📢</h2>
           <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input 
            onChange={(e) => setTitle(e.target.value)} 
            type="text" 
            placeholder="Title"/>

            <code>
              <textarea 
              onChange={(e) => setContent(e.target.value)}
              placeholder="Content" cols={27} 
              className="w-full">
              </textarea>
              </code>

              {links && links.map((link, i) => (
  <div key={i} className="flex items-center gap-2">
    <span>
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
    </span>
    <Link
  href={link}
  className="link truncate-link"
  title={link}
>
  {link}
</Link>
    <span
      className="cursor-pointer"
      onClick={() => deleteLink(i)}
    >
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
          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        />
      </svg>
    </span>
  </div>
              ))}

            <div className="flex gap-2">
                <input className="flex-1 w-full" 
                type="text" 
                placeholder="Input the link and click on Add"
                onChange={e => setLinkInput(e.target.value)}
                value={linkInput}
              
                />
            <button onClick={addLink} className="btn w-fit flex gap-2 items-center overflow-x-hidden overflow-hidden mb-4 lg:ml-3">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 lg:w-10"
                >
                  <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                </svg>
                <span className="text-on-desktop">Add</span> </span>
            </button>
            </div>

            <CldUploadButton uploadPreset={process.env.CLOUDINARY_UPLOAD_PRESET} className={`h-48 border-2 mt-4 border-doted grid place-items-center bg-green-400 rounded-md relative ${imageUrl && 'pointer-events-none'}`}
            onSuccess={handleImageUpload}
            >
              <div className="">
                <Image src={files.create} alt="upload image"/>
              </div>

              {imageUrl && <Image src={imageUrl} fill className="absolute object-cover inset-0" alt=''/>}
            </CldUploadButton>

            {/** To remove image*/}
            {publicId && <button onClick={removeImage} className="py-2 px-4 rounded-md font-bold w-fit bg-red-600 text-white mb-4">Remove Image
              </button>}

          <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-3 rounded-md border border-green-400 appearance-none bg-transparent text-gray-400 mt-3"
        >
          <option className="bg-dark-1" value="">Select A Category

          </option>
          {categories &&
            categories.map((category) => (
              <option key={category.id} className="bg-dark-1" value={category.catName}>
                {category.catName}
              </option>
            ))}
        </select>

            <button className="primary-btn font-bold" type="submit">Post</button>

           </form>
        </div>
    )
}

export default CreatePostForm
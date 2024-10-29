'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import { TCategory } from "@/app/types";

const getCategories = async (): Promise<TCategory[] | null> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`);

    if (res.ok) {
      const categories = await res.json();
      return categories;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

export default function CategoriesList() {
  const [showMore, setShowMore] = useState(false);
  const [categories, setCategories] = useState<TCategory[] | null>(null);
  

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  if (!categories) {
    return <div className="animate-bounce italic">Loading Categories.....</div>;
  }

  const displayedCategories = categories.slice(0, 2);

  return (
    <div>
      <p className='mb-2 text-gray-400'>Select a category</p>
      <div className="flex gap-2 text-sm flex-wrap">
      {Array.isArray(displayedCategories) && displayedCategories.map((category) => (
          <Link
            key={category.id}
            className="px-4 py-1 rounded-md bg-green-500 text-white cursor-pointer"
            href={`/categories/${category.catName}`}
          >
            {category.catName}
          </Link>
        ))}
        {categories.length > 2 && (
          <button
            className="text-blue-500 hover:underline"
            onClick={handleShowMore}
          >
            {showMore ? "See Less" : "See More..."}
          </button>
        )}
      </div>
      {showMore && (
  <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-75 z-50 flex items-center justify-center md:relative md:bg-transparent md:opacity-100">
    <div className="bg-dark md:bg-transparent max-w-5xl mx-auto p-4 lg:p-6 xl:p-8 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8 overflow-y-auto md:overflow-y-hidden h-screen md:h-auto">
      {categories.map((category) => (
        <div key={category.id} className="bg-dark-4 rounded-xl shadow-md p-4 text-center md:w-full lg:w-full xl:w-full">
          <Link
            className="text-green-400 text-base-semibold hover:bg-white block w-full px-3 py-2"
            href={`/categories/${category.catName}`}
          >
            {category.catName}
          </Link>
        </div>
      ))}
      <div className="bg-white rounded-xl shadow-md p-4 text-center md:hidden">
        <button
          className="text-red-400 text-base-semibold hover:bg-white block w-full px-3 py-2"
          onClick={handleShowMore}
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
}
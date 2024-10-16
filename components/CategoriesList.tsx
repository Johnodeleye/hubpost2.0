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
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-75 z-50">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-dark p-9 rounded shadow shadow-green-400 px-9 py-10 pb-20 pt-8 whitespace-nowrap lg:px-20 lg:py-15">
            <h1 className="text-heading4-medium mb-2 text-center text-white bg-green-600 rounded-md font-bold">
              All Categories
            </h1>
            <ul className="list-none">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    className="text-green-400 text-base-semibold hover:bg-white rounded-xl px-3"
                    href={`/categories/${category.catName}`}
                  >
                    {category.catName}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              className='absolute top-right mt-4 mr-2 hover:bg-green-600 rounded-xl px-4 py-2 text-white border border-green-400'
              onClick={handleShowMore}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
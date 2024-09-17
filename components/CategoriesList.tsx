'use client';
import { categoriesData } from '@/data';
import Link from 'next/link';
import { useState } from 'react'; // Import useState for state management

const CategoriesList = () => {
  const [showMore, setShowMore] = useState(false); // State to control "See More" visibility

  const handleShowMore = () => {
    setShowMore(!showMore); // Toggle showMore state on click
  };

  const displayedCategories = categoriesData.slice(0, 2); // Slice first 2 categories

  return (
    <div>
      <p className='mb-2 text-gray-400'>Select a category</p>
      <div className='flex gap-2 text-sm flex-wrap'>
        {displayedCategories.map((category) => (
          <Link
            className='px-4 py-1 rounded-md bg-green-500 text-white'
            href={`/categories/${category.name}`}
            key={category.name} // Add key prop for better performance
          >
            {category.name}
          </Link>
        ))}
        {categoriesData.length > 2 && ( // Check for more than 2 categories
          <button className='text-blue-500 hover:underline' onClick={handleShowMore}>
            {showMore ? 'See Less' : 'See More...'}
          </button>
        )}
      </div>
      {showMore && ( // Conditionally render overlay when showMore is true
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-black opacity-75 z-50'>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-dark p-9 rounded shadow shadow-green-400 px-9 py-10 pb-20 pt-8 whitespace-nowrap lg:px-20 lg:py-15'>
            <h3 className='text-lg mb-2 font-semibold text-center text-white bg-green-500 rounded-xl'>
              All Categories
            </h3>
            <ul className='list-none'>
              {categoriesData.map((category) => (
                <li key={category.name}>
                  <Link
                    className='text-blue-500 hover:underline'
                    href={`/categories/${category.name}`}
                  >
                    {category.name}
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
};

export default CategoriesList;
import React from 'react';

const SearchBanner = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("./images/banner.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '340px',
        width: '100%',
        position: 'relative',
      }}
      className='flex items-center justify-center'
    >
      <div className='text-left px-10 py-6' style={{ position: 'absolute', left: '0', right: '0', top: '48px', bottom: '0' }}>
        <h2 className='text-white text-3xl font-bold mb-2'>Welcome.</h2>
        <h3 className='text-white text-3xl font-bold mb-10'>
          Millions of movies, TV shows and people to discover. Explore now.
        </h3>
        <div className='relative'>
          <input
            type="text"
            placeholder="Search for a movie, TV show, person..."
            className='px-4 py-3 rounded-full w-full pr-20 text-grey-200'
          />
          <button className='absolute right-0 top-0 bottom-0 px-7 py-2 text-white rounded-full doubleColor font-bold hover:text-black'>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBanner;

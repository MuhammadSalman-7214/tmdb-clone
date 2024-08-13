import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../App.css'; // Ensure this file includes your CSS variables
import { trendingToday } from '../api/trendingToday'; // Adjusted import for your API

const FreeToWatch = () => {
  const [selected, setSelected] = useState('movies');


  const selectedStyle = {
    backgroundColor: 'rgb(3, 37, 65)',
    color: 'transparent',
    position: 'relative',
    overflow: 'hidden',
  };

  const gradientText = {
    position: 'relative',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    backgroundImage: 'linear-gradient(45deg, #17ead9, #6078ea)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  };

  const defaultStyle = {
    backgroundColor: 'white',
    color: 'black',
  };

  // Slider settings for manual horizontal scrolling
  const sliderSettings = {
    dots: false,
    infinite: false, // No infinite looping
    speed: 500,
    slidesToShow: 7, // Adjust based on layout
    slidesToScroll: 3,
    swipeToSlide: true,
    arrows: false, // Disable next/prev arrows
    draggable: true, // Allow dragging
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative overflow-hidden bg-bars-container mb-10">
      <div className='flex flex-col sm:flex-row sm:items-center sm:space-x-4 my-3 p-1 rounded-lg px-4 sm:px-8 lg:px-12'>
        <h2 className='text-2xl font-semibold mb-4 sm:mb-0'>Free To Watch</h2>
        <div className='relative flex space-x-4 sm:space-x-2 rounded-full' style={{border:'1px solid rgb(3, 37, 65)'}}>
          <button
            onClick={() => setSelected('movies')}
            style={selected === 'movies' ? selectedStyle : defaultStyle}
            className='px-4 py-2 rounded-full text-sm font-medium'
          >
            <span style={selected === 'movies' ? gradientText : {}}>
            Movies
            </span>
          </button>
          <button
            onClick={() => setSelected('tv')}
            style={selected === 'tv' ? selectedStyle : defaultStyle}
            className='px-4 py-2 rounded-full text-sm font-medium'
          >
            <span style={selected === 'tv' ? gradientText : {}}>
              TV
            </span>
          </button>
        </div>
      </div>

      <div
        className='relative overflow-x-auto slider-container'
        style={{
          maxWidth: '100%',
          whiteSpace: 'nowrap',
          position: 'relative',
        }}
      >
     

        {/* Horizontal Slider for Trending */}
        <div className="slider-wrapper ps-8">
          <Slider {...sliderSettings}>
            {trendingToday.map(item => (
              <div key={item.id} className='inline-block w-full'>
                <div className='rounded-lg p-2'>
                  <div className='relative'>
                    <a title={item.title}>
                      <img
                        loading="lazy"
                        className='w-full h-52 rounded-lg object-cover' // Reduced height
                        src={item.image}
                        alt={item.title}
                      />
                    </a>
                    <div className='absolute top-2 right-2'>
                      <a href="#" aria-label="View Item Options">
                        <div className='bg-gray-200 px-2 pb-1  rounded-full hover:bg-blue-400'>
                        <i class="fa-solid fa-ellipsis text-xs"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className='-mt-4 ms-2'>
                    <div className='flex items-center space-x-2'>
                      <div className='relative'>
                        <div className='w-10 h-10 rounded-full border-2 flex items-center justify-center' style={{backgroundColor:'rgb(3, 37, 65)'}}> {/* Reduced size */}
                          <div className='relative w-8 h-8'>
                            <div className='absolute inset-0 flex items-center justify-center'>
                              <span className='text-xs font-bold text-white'>{item.percentage}%</span>
                            </div>
                            <canvas className='w-full h-full' height="34" width="34" style={{ height: '34px', width: '34px' }}></canvas>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h2 className='text-lg text-left font-semibold'>
                      <a className='text-black overflow-x-hidden w-90%'>{item.title.slice(0,17)}</a>
                    </h2>
                    <h2 className='text-md text-left font-semibold mt-2'>
                      <a className='text-gray-600'>{item.date}</a>
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default FreeToWatch;

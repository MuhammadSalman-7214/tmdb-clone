import React from 'react';
import "../App.css"; // Ensure this path is correct
import { leaderBoard } from '../api/leaderBoard';

const LeaderBoard = () => {
  return (
    <div className='px-10 my-5'>
      {/* Title */}
      <div className='flex items-center mb-5'>
        <h3 className='text-black text-xl font-bold'>Leaderboard</h3>
        <div className='ms-3 flex flex-col'>
          <div className='flex items-center mb-2'>
            <div className='doubleColor1 p-1 rounded-full'></div>
            <div className='ms-2 font-semibold text-sm'>All Time Edits</div>
          </div>
          <div className='flex items-center'>
            <div className='doubleColor2 p-1 rounded-full'></div>
            <div className='ms-2 font-semibold text-sm'>Edits This Week</div>
          </div>
        </div>
      </div>

      {/* Leaderboard Detail */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {leaderBoard.map(item => {
          // Calculate bar widths based on data (example percentages)
          const allTimeBarWidth = (parseInt(item.allTime.replace(/,/g, '')) / 4500000) * 100; // Adjust max value as needed
          const thisWeekBarWidth = (parseInt(item.thisWeek.replace(/,/g, '')) / 40000) * 100; // Adjust max value as needed

          return (
            <div key={item.id} className='flex items-center mx-3'>
              <div className='w-16 h-16 mr-4 flex items-center justify-center'>
                {item.image ? (
                  <img src={item.image} alt={item.name} className='w-16 h-16 rounded-full object-cover' />
                ) : (
                  <div className='w-16 h-16 flex items-center justify-center text-lg font-bold bg-gray-200 rounded-full'>
                    {item.name.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
              <div className='flex-1'>
                <h5 className='text-lg text-left font-semibold'>{item.name}</h5>
                <div className='my-1'>
                  <div className='flex items-center mb-1'>
                    <div className='relative w-full h-2 rounded-full mr-2'>
                      <div
                        className='absolute top-0 left-0 h-full allTime rounded-full'
                        style={{ width: `${allTimeBarWidth}%` }}
                      ></div>
                      <div className='absolute top-0 right-0 h-full flex items-center pr-2 text-xs font-semibold text-sm text-black'>
                        {item.allTime}
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <div className='relative w-full h-2 rounded-full mr-2 flex'>
                      <div
                        className='absolute top-0 left-0 h-full thisWeek rounded-full'
                        style={{ width: `${thisWeekBarWidth}%` }}
                      ></div>
                      <div className='absolute top-0 right-0 h-full flex items-center pr-2 text-xs font-semibold text-sm text-black'>
                        {item.thisWeek}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LeaderBoard;

import React, { useState } from 'react';
import art from '../assets/art5.png';
import art2 from '../assets/art2.png';

function Stories() {
  const [selectedStory, setSelectedStory] = useState(null);

  const stories = [
    { image: art, description: "Story 1", className: "col-span-3 row-span-1 bg-red-600" },
    { image: art2, description: "Story 2", className: "col-span-1 row-span-1 bg-green-600" },
    { image: art, description: "Story 3", className: "col-span-2 row-span-1 bg-yellow-600" },
    { image: art2, description: "Story 4", className: "col-span-2 row-span-1 bg-blue-600" },
    { image: art2, description: "Story 5", className: "col-span-1 row-span-1 bg-purple-600" },
    { image: art, description: "Story 6", className: "col-span-3 row-span-1 bg-pink-600" },
  ];

  return (
    <div className='w-full h-fit bg-black flex flex-col items-center justify-center relative'>
      <div className='w-full h-full flex flex-col items-center justify-between'>

        <div className='w-full h-[8%] bg-[#ff3b6d] text-center flex items-center justify-center py-4'>
          <h2 className='font-bold text-4xl text-white'>See how our Volunteers change lives — one story at a time!</h2>
        </div>

        <p className='text-white py-5'>
          *All the children have their names and other identifying features hidden to comply with Child Protection Policy
        </p>

        <div className='w-[90vw] h-[90%] grid grid-cols-3 grid-rows-4'>
          {stories.map((story, index) => (
            <div
              key={index}
              className={`${story.className} rounded-xl m-1 transform hover:scale-105 transition duration-300 cursor-pointer flex items-center justify-center`}
              onClick={() => setSelectedStory(story)}
            >
              <img src={story.image} alt="Story" className='w-[200px]' />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedStory && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setSelectedStory(null)}
          />
          <div className="fixed z-50 bg-white rounded-xl p-6 max-w-md w-full shadow-lg flex flex-col items-center justify-center gap-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <button className="self-end text-2xl font-bold" onClick={() => setSelectedStory(null)}>×</button>
            <img src={selectedStory.image} alt="Modal" className="w-full rounded-md" />
            <p className="text-gray-800 text-center">{selectedStory.description}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Stories;

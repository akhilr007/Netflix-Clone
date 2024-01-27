import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="w-screen aspect-video bg-gradient-to-r from-black px-4 md:px-8 lg:px-16 pt-[20%] absolute">
      <h1 className="text-4xl font-bold lg:text-5xl mb-4 text-white">
        {title}
      </h1>
      <p className="text-lg line-clamp-3 w-1/3 text-white">{description}</p>
      <div className="flex space-x-4 pt-4">
        <button className="flex items-center px-8 py-2 text-base font-medium rounded-lg text-white bg-white focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            className="w-6   h-6 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-black font-semibold text-lg ml-2">Play</span>
        </button>
        <button className="flex bg-opacity-50 items-center px-8 py-2 text-base bg-gray-500 font-medium rounded-lg text-gray-900 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>

          <span className="text-white font-semibold text-lg ml-2">
            More Info
          </span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

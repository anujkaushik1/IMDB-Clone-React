import React from 'react';
import Image from "../banner.jpg";

function Movies() {
  return <>
    <div className='mb-8'>
        <div className='mt-8 mb-10 font-bold text-2xl text-center '>Trending Movies</div>
        <div className='flex flex-wrap justify-center '>
            <div className={`bg-[url(${Image})] h-[30vh] w-[200px] bg-cover bg-center rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300`}>
                <div className='w-full bg-gray-900 text-white py-2 text-center rounded-b-xl '>Title</div>

            </div>
            <div className={`bg-[url(${Image})] h-[30vh] w-[200px] bg-cover bg-center rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300`}>
                <div className='w-full bg-gray-900 text-white py-2 text-center rounded-b-xl '>Title</div>

            </div>
            <div className={`bg-[url(${Image})] h-[30vh] w-[200px] bg-cover bg-center rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300`}>
                <div className='w-full bg-gray-900 text-white py-2 text-center rounded-b-xl '>Title</div>

            </div>
            <div className={`bg-[url(${Image})] h-[30vh] w-[200px] bg-cover bg-center rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300`}>
                <div className='w-full bg-gray-900 text-white py-2 text-center rounded-b-xl '>Title</div>

            </div>
        </div>
    </div>
  </>;
}

export default Movies;

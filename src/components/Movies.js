import React, { useState } from 'react';
import Image from "../banner.jpg";
import axios from "axios";
import { Oval } from "react-loader-spinner";

function Movies() {
 
 const [movies, setMovies] = useState([]);

 axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=5984df98ddb29f07afe65af3db9ac90c").then((res)=> console.table(res.data.results));   

  return <>
    <div className='mb-8 z-1'>
        <div className='mt-8 mb-10 font-bold text-2xl text-center '>Trending Movies</div>
        {
            movies.length == 0 ? 
                <div className='flex justify-center'>
                    <Oval
                    heigth="100"
                    width="100"
                    color='grey'
                    secondaryColor="grey"
                    ariaLabel='loading'
                    />  
                </div>  
                                :   

                    <div className='flex flex-wrap justify-center '>
                        <div className={`bg-[url(${Image})] h-[25vh] w-[150px]  md:h-[30vh] md:w-[200px] bg-cover bg-center rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300`}>
                            <div className='w-full bg-gray-900 text-white py-2 text-center rounded-b-xl font-bold '>Title</div>

                        </div>
                        <div className={`bg-[url(${Image})] h-[25vh] w-[150px]  md:h-[30vh] md:w-[200px] bg-cover bg-center rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300`}>
                            <div className='w-full bg-gray-900 text-white py-2 text-center rounded-b-xl font-bold '>Title</div>

                        </div>
                        <div className={`bg-[url(${Image})] h-[25vh] w-[150px]  md:h-[30vh] md:w-[200px] bg-cover bg-center rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300`}>
                            <div className='w-full bg-gray-900 text-white py-2 text-center rounded-b-xl font-bold '>Title</div>

                        </div>
                        <div className={`bg-[url(${Image})] h-[25vh] w-[150px]  md:h-[30vh] md:w-[200px] bg-cover bg-center rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300`}>
                            <div className='w-full bg-gray-900 text-white py-2 text-center rounded-b-xl font-bold '>Title</div>

                        </div>
                    </div>

        }
    </div>
  </>;
}

export default Movies;

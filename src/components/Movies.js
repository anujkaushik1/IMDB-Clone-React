import React, { useState, useEffect } from 'react';
import Image from "../banner.jpg";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import Pagination from './Pagination';

function Movies() {
 
    const [movies, setMovies] = useState([]);
    const [pageNumber, setState] = useState(1);
    const [hover, setHover] = useState('');
    const [favourites, setFavourites] = useState([]);

    function increment(){
        setState(pageNumber + 1);
    }

    function decrement(){
        if(pageNumber > 1){
            setState(pageNumber - 1);
        }
    }


 useEffect(function(){
    axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=5984df98ddb29f07afe65af3db9ac90c&page=${pageNumber}`)
        .then((res)=>

           {  
               console.table(res.data.results)
                setMovies(res.data.results) 
           }
     
     );   

 }, [pageNumber])

 let add = (movie) => {
     let newArray = [...favourites, movie];
     setFavourites([...newArray]);
     console.log(newArray);
 }

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

                        {
                            movies.map((movie) => (
                                <div className={`bg-[url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})] h-[25vh] w-[150px]  md:h-[30vh] md:w-[200px] bg-cover bg-center rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300 relative cursor-pointer`}
                                
                                    onMouseEnter = {() => setHover(movie.id)}
                                    onMouseLeave = {() => setHover("")}
                                    >
                                    
                                    {
                                        hover == movie.id && <>{
                                            !favourites.find((m) => m.id == movie.id) ? <div className='absolute top-2 right-2 p-2 bg-gray-800 rounded-xl text-xl' onClick={()=> add(movie)}> 😎 </div>
                                                    :
                                                    <div className='absolute top-3 right-2 p-2 bg-gray-800 rounded-xl text-xl' onClick={()=> add(movie)}> ❌ </div>
                                        }
                                        
                                       

                                            </>
                                    }

                                    <div className='w-full bg-gray-900 text-white py-2 text-center rounded-b-xl font-bold '>{movie.title}</div>

                                </div>
                            ))
                        }
                       
                        
                        
                    </div>

        }   
    </div>

    <Pagination currentPage = {pageNumber} increment = {increment} decrement = {decrement}></Pagination >
  </>;
}

export default Movies;

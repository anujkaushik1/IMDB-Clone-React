import React from 'react';
import Logo from "../logo.png"
import {Link} from "react-router-dom";

function NavBar() {
  return <>
        <div className="border pl-8 flex space-x-8 items-center py-4">
            <img className='w-[42px] h-[42px] md:w-[60px]' src ={Logo}></img>
            <Link to="/" className='text-yellow-600 font-bold text-xl md:text-3xl'>Movies</Link>
            <Link to="/favourites" className='text-yellow-600 font-bold text-xl md:text-3xl'>Favourites</Link>
        </div>  
  </>
}

export default NavBar;

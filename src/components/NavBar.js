import React from 'react';
import Logo from "../logo.png"

function NavBar() {
  return <>
        <div className="border pl-8 flex space-x-8 items-center py-4">
            <img src={Logo} height="42" width="42"></img>
            <div className='text-yellow-600 font-bold text-3xl'>Movies</div>
            <div className='text-yellow-600 font-bold text-3xl'>Favourites</div>
        </div>  
  </>
}

export default NavBar;

import React from 'react';
import Image from '../banner.jpg';

function Banner() {
  return <>
          <div className={`bg-[url(${Image})] h-[40vh] md:h-[60vh] w-screen ml-200 bg-auto bg-center`}></div>
        </>;
}

export default Banner;

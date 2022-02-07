import React, {useState} from 'react';

function Pagination() {
    let [pageNumber, setState] = useState(1);

    function increment(){
      setState(pageNumber + 1);
    }

    function decrement(){
      if(pageNumber > 1){
          setState(pageNumber - 1);
      }
    }

  return <>
    <div className='w-full flex justify-center mb-8'>

        <button className='p-2 border-2 border-indigo-500 text-indigo-500 border-r-0 rounded-l-xl ' onClick={decrement}>Previous</button>
        <button className='p-2 border-2 border-indigo-500 text-indigo-500 border-r-0 bg-gray-100  '>{pageNumber}</button>
        <button className='p-2 border-2 border-indigo-500 text-indigo-500 rounded-r-xl  ' onClick={increment}>Next</button>

    </div>
  </>;
}

export default Pagination;

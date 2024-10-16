import React from "react";
import whiteCheck from "./images/whiteCheck.svg";

const End = () => {
  return (
    <div className='flex justify-center items-center bg-green-300 h-screen'>
      <div className='flex flex-col justify-center items-center rounded-xl h-52 w-52 bg-green-500'>
        <h1 className='text-4xl mt-4 text-white'>Klaar!</h1>
        <img src={whiteCheck} className='h-20 w-20 mt-3'></img>
      </div>
    </div>
  );
};

export default End;

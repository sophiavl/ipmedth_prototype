import React from "react";

const ProgressBar = ({ currentIndex, totalItems }) => {
  const percentage = (currentIndex / totalItems) * 100;

  console.log(percentage);
  return (
    <div
      id='progressbar'
      className='flex m-8 w-11/12 h-14 rounded-lg justify-between items-center'
      style={{
        backgroundColor: "rgba(242, 242, 242, 0.7)",
        boxShadow: "0px 3px 6px 0px rgba(28, 27, 27, 0.50)",
      }}
    >
      <h1 className='m-4 font-lato text-2xl font-semibold'>
        {currentIndex}/{totalItems}
      </h1>
      <div className='h-4 w-11/12 mr-8 rounded-lg bg-white'>
        <div
          className='h-4 bg-green-400 rounded-lg'
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;

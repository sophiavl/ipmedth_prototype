import React from "react";

const Card = ({ objects, currentIndex }) => {
  return (
    <div
      id='card'
      className='flex justify-center '
      style={{
        filter: "drop-shadow(0px 3px 6px rgba(28, 27, 27, 0.50))",
      }}
    >
      <div className='flex flex-col'>
        {/* card plaatje */}
        <div
          className='w-72 h-72 bg-card rounded-t-xl'
          style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
        >
          <img
            src={objects[currentIndex].img}
            alt='appel'
            className='w-full h-full p-4 object-contain'
          />
        </div>
        {/* card tekst */}
        <div
          className='flex h-16 rounded-b-lg justify-center items-center'
          style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
        >
          <h1 className='text-3xl font-lato'>{objects[currentIndex].name}</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;

import React from "react";

const ArrowLeft = () => {
  const handleLeftClick = () => {
    setCurrentIndex(currentIndex === 0 ? objects.length - 1 : currentIndex - 1);
  };

  return (
    <div
      className='flex justify-center items-center w-28 h-14 mr-12 rounded-lg cursor-pointer'
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        filter: "drop-shadow(0px 3px 6px rgba(28, 27, 27, 0.50))",
      }}
      onClick={handleLeftClick}
    >
      <img src={arrowLeft} alt='arrow' className='max-w-14'></img>
    </div>
  );
};

export default ArrowLeft;

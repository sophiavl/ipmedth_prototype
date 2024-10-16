import React from "react";

const ArrowRight = ({ currentIndex, objects, setCurrentIndex, arrowRight }) => {
  const handleRightClick = () => {
    setCurrentIndex(currentIndex === objects.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div
      className='flex justify-center items-center w-28 h-14 mr-12 rounded-lg cursor-pointer'
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        filter: "drop-shadow(0px 3px 6px rgba(28, 27, 27, 0.50))",
      }}
      onClick={handleRightClick}
    >
      <img src={arrowRight} alt='arrow' className='max-w-14'></img>
    </div>
  );
};

export default ArrowRight;

import React from "react";
import check from "../images/check.svg";

const TestCard = ({ image, isSelected, onClick }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div
        className='flex flex-col justify-center items-center rounded-t-lg h-48 w-48 m-8 mb-1'
        style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
      >
        <img src={image} alt='Test' />
      </div>
      <div
        className='flex justify-end items-center rounded-b-lg h-12 w-48'
        style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
      >
        <button
          className={`h-6 w-6 rounded-sm mr-2 ${
            isSelected ? "bg-green-400" : "border border-1"
          }`}
          style={{
            borderColor: isSelected ? "#F2F2F2" : "rgba(40, 37, 42, 0.5)",
          }}
          onClick={onClick}
        >
          {isSelected && (
            <span className='flex justify-center items-center'>
              <img className='object-fit h-4 w-4' src={check} alt='checkmark' />
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default TestCard;

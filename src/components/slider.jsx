import React, { useState } from 'react';
import Number from './number';

const Slider = () => {
  const [nums, setNums] = useState([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]);

  const getColor = (num) => {
    const specialNums = [3,9,12,18,21,30,36,5,14,23,32,1,7,16,19,25,30,32,34,36];
    if (num === 0) {
      return '#008000';
    } else if (specialNums.includes(num)) {
      return '#ff0000';
    } else {
      return '#000000';
    }
  };

  const slide = (direction) => {
    if (direction === 'next') {
      setNums([...nums.slice(1), nums[0]]);
    } else if (direction === 'prev') {
      setNums([nums[nums.length - 1], ...nums.slice(0, -1)]);
    }
  };

  return (
    <div className="flex items-center">
      <div onClick={() => slide('prev')} className="bg-blue-500 text-white py-2 px-4 rounded-l">
        P
      </div>
      <div className="slider-container w-200 overflow-hidden bg-gray-200">
        <div className="flex transition-transform duration-300">
          {nums.map((num) => (
            <div key={num} style={{border: "1px solid white"}}>
              <Number width={47} height={52} num={num} color={getColor(num)} />
            </div>
          ))}
        </div>
      </div>
      <div onClick={() => slide('next')} className="bg-blue-500 text-white py-2 px-4 rounded-r">
        n
      </div>
    </div>
  );
};

export default Slider;

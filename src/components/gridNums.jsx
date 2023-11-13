import React, { useEffect, useRef, useState } from "react";
import Number from "./number";
import "./try.css";

const GridNums = (props) => {

     
  const division = props.division;
  const right = props.right;
  console.log(right)


  const nums = Array.from({ length: 36 }, (_, index) => index + 1);
  const [hoveredNum, setHoveredNum] = useState(null);
  const [hoveredCircle, setHoveredCircle] = useState(null);

  const [circleMark, setCircleMark] = useState([])

  const exceptions = {
    top: [3,9,6,12,15,18,21,24,27,30,33,36],
    bottom: [1,4,7,10,13,16,19,22,25,28,31,34]
  }

  const containerRef = useRef(null);

  const handleHover = (num) => {
    setHoveredNum(num)
    const circles = containerRef.current.querySelector(`.containerRef${num}`).querySelectorAll(".circle");
    circles.forEach((circle) => {
      circle.style.display = "block";
    });
  };


  

  const handleLeave = (num) => {
    setHoveredNum()
    const circles = containerRef.current.querySelector(`.containerRef${num}`).querySelectorAll(".circle");
    circles.forEach((circle) => {
      circle.style.display = "none";
    });
  };

  const specialNums = [3, 9, 12, 18, 21, 30, 36, 5, 14, 23, 32, 1, 7, 16, 19, 25, 30, 32, 34, 36, 27];

  const getColor = (num) => {
    if (num === 0) {
      return "#008000";
    } else if (specialNums.includes(num)) {
      return "#ff0000";
    } else {
      return "#000000";
    }
  };

  const blackOrWhite = (num) => {
    if (specialNums.includes(num)) {
      return "#95602e"; 
    } else {
      return "#1b401b"; // 
    }
  };
  

  const containerStyle = {
    width: "840px",
    height: "160px",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column-reverse",
  };

  const circleStyle = {
    position: "absolute",
    width: "17px",
    height: "17px",
    borderRadius: "50%",
    display: "none",
  };

  const handleCircle = (s, num) => {
    setHoveredCircle(s);
  
    if (s === 1) {
      if (!exceptions.top.includes(num)) {
        setCircleMark(() => [
          num + 1,
          num - 3,
          num - 2
        ]);
      } else {
        setCircleMark(() => [
          num - 1,
          num - 2,
          num - 3,
          num - 4,
          num - 5
        ]);
      }
    } else if (s === 2) {
      if (!exceptions.top.includes(num)) {
        setCircleMark(() => [
          num + 1
        ]);
      } else {
        setCircleMark(() => [
          num - 1,
          num - 2
        ]);
      }
    } else if (s === 3) {
      if (!exceptions.top.includes(num)) {
        setCircleMark(() => [
          num + 1,
          num + 3,
          num + 4
        ]);
      } else {
        setCircleMark(() => [
          num - 1,
          num - 2,
          num + 1,
          num + 2,
          num + 3
        ]);
      }
    } else if (s === 4) {
      setCircleMark(() => [
        num - 3
      ]);
    } else if (s === 5) {
      setCircleMark(() => [
        num + 3
      ]);
    } else if (s === 6) {
      if (!exceptions.bottom.includes(num)) {
        setCircleMark(() => [
          num - 1,
          num - 3,
          num - 4
        ]);
      } else {
        setCircleMark(() => [
          num - 1,
          num - 2,
          num + 1,
          num + 2,
          num - 3
        ]);
      }
    } else if (s === 7) {
      if (!exceptions.bottom.includes(num)) {
        setCircleMark(() => [
          num - 1
        ]);
      } else {
        setCircleMark(() => [
          num + 1,
          num + 2
        ]);
      }
    } else if (s === 8) {
      if (!exceptions.bottom.includes(num)) {
        setCircleMark(() => [
          num - 1,
          num + 3,
          num + 2
        ]);
      } else {
        setCircleMark(() => [
          num + 5,
          num + 4,
          num + 1,
          num + 2,
          num + 3
        ]);
      }
    }
  };
  



  useEffect(() => {
    if (division === 1 ){
        setCircleMark(
            [1,2,3,4,5,6,7,8,9,10,11,12]
          );
    }
    else if (division === 2 ){
        setCircleMark([13,14,15,16,17,18,19,20,21,22,23,24]);
    }
    else if (division === 3 ){
        setCircleMark([25,26,27,28,29,30,31,32,33,34,35,36]);
    }
    else if (division === 0){
        setCircleMark([]);
    }
   
  }, [division])

  useEffect(() => {
    if (right === 1 ){
        setCircleMark(
            [3,6,9,12,15,18,21,24,27,30,33,36]
          );
    }
    else if (right === 2 ){
        setCircleMark([2,5,8,11,14,17,20,23,26,29,32,35]);
    }
    else if (right === 3 ){
        setCircleMark([1,4,7,10,13,16,19,22,25,28,31,34]);
    }
    else if (right === 0){
        setCircleMark([]);
    }
  }, [right])

  const handleLeaveCircle = (num) => {
    setHoveredCircle()
    setCircleMark([])
    };
  


  return (
    <div
      className="flex flex-wrap flex- cursor-pointer"
      style={containerStyle}
      ref={containerRef} // Set the main container ref here
    >
      {nums.map((num) => (
        <div
          onMouseEnter={() => handleHover(num)} // Pass the current number to handleHover
          onMouseLeave={() => handleLeave(num)} // Pass the current number to handleLeave
          key={num}
          className={`containerRef${num} relative ${circleMark.includes(num) ? "before:content-[''] before:absolute before:inset-0 before:z-10 before:bg-green-700/80" : ''} `} // Add a class to each number container
          style={{ border: "1px solid white", position: "relative" }}
        >
        <Number
            color={(num === hoveredNum) ? blackOrWhite(num) : getColor(num)}
            width={68}
            height={51}
            num={num}
        />

          <div onMouseEnter={() => handleCircle(1,num)} // Pass the current number to handleHover
          onMouseLeave={() => handleLeaveCircle(1)}  className="circle z-20 leftup" style={{ top: "-9px", left: "-9px",backgroundColor: hoveredCircle === 1 ? "#33b145" : "white", ...circleStyle }}></div>
          <div
          onMouseEnter={() => handleCircle(2,num)} // Pass the current number to handleHover
          onMouseLeave={() => handleLeaveCircle(2)} 
            className="circle z-20 topmid"
            style={{ top: "-9px", left: "50%", transform: "translateX(-50%)",backgroundColor: hoveredCircle === 2 ? "#33b145" : "white", ...circleStyle }}
          ></div>
          <div onMouseEnter={() => handleCircle(3,num)} // Pass the current number to handleHover
          onMouseLeave={() => handleLeaveCircle(3)}  className="circle z-20 rightup" style={{ top: "-9px", right: "-9px",backgroundColor: hoveredCircle === 3 ? "#33b145" : "white", ...circleStyle }}></div>
          <div
          onMouseEnter={() => handleCircle(4,num)} // Pass the current number to handleHover
          onMouseLeave={() => handleLeaveCircle(4)} 
            className="circle z-20 leftmid"
            style={{ top: "50%", left: "-9px", transform: "translateY(-50%)",backgroundColor: hoveredCircle === 4 ? "#33b145" : "white", ...circleStyle }}
          ></div>
          <div
          onMouseEnter={() => handleCircle(5,num)} // Pass the current number to handleHover
          onMouseLeave={() => handleLeaveCircle(5)} 
            className="circle z-20 rightmid"
            style={{ top: "50%", right: "-9px", transform: "translateY(-50%)",backgroundColor: hoveredCircle === 5 ? "#33b145" : "white", ...circleStyle }}
          ></div>
          <div
          onMouseEnter={() => handleCircle(6,num)} // Pass the current number to handleHover
          onMouseLeave={() => handleLeaveCircle(6)} 
            className="circle z-20 leftbottom"
            style={{ bottom: "-9px", left: "-9px",backgroundColor: hoveredCircle === 6 ? "#33b145" : "white", ...circleStyle }}
          ></div>
          <div
          onMouseEnter={() => handleCircle(7,num)} // Pass the current number to handleHover
          onMouseLeave={() => handleLeaveCircle(7)} 
            className="circle z-20 bottommid"
            style={{ bottom: "-9px", left: "50%", transform: "translateX(-50%)",backgroundColor: hoveredCircle === 7 ? "#33b145" : "white", ...circleStyle }}
          ></div>
          <div
          onMouseEnter={() => handleCircle(8,num)} // Pass the current number to handleHover
          onMouseLeave={() => handleLeaveCircle(8)} 
            className="circle z-20 rightbottom"
            style={{ bottom: "-9px", right: "-9px",backgroundColor: hoveredCircle === 8 ? "#33b145" : "white", ...circleStyle }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default GridNums;






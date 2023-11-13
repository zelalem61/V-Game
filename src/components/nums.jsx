import React from "react";

const NumberComponent = () => {
  const containerStyle = {
    width: "100px",
    height: "70px",
    position: "relative",
    backgroundColor: "#ccc"
  };

  const circleStyle = {
    position: "absolute",
    width: "13px",
    height: "13px",
    borderRadius: "50%",
    backgroundColor: "white",
    display: "none"
  };

  const handleHover = (e) => {
    const circles = e.target.querySelectorAll(".circle");
    circles.forEach(circle => {
      circle.style.display = "block";
    });
  };

  const handleLeave = (e) => {
    const circles = e.target.querySelectorAll(".circle");
    circles.forEach(circle => {
      circle.style.display = "none";
    });
  };

  return (
    <div
      className="w-20 h-20 flex justify-center items-center bg-gray-300 relative"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      style={containerStyle}
    >
      <div className="circle" style={{top: "-5px", left: "-5px", ...circleStyle}}></div>
      <div className="circle" style={{top: "-5px", left: "50%", transform: "translateX(-50%)", ...circleStyle}}></div>
      <div className="circle" style={{top: "-5px", right: "-5px", ...circleStyle}}></div>
      <div className="circle" style={{top: "50%", left: "-5px", transform: "translateY(-50%)", ...circleStyle}}></div>
      <div className="circle" style={{top: "50%", right: "-5px", transform: "translateY(-50%)", ...circleStyle}}></div>
      <div className="circle" style={{bottom: "-5px", left: "-5px", ...circleStyle}}></div>
      <div className="circle" style={{bottom: "-5px", left: "50%", transform: "translateX(-50%)", ...circleStyle}}></div>
      <div className="circle" style={{bottom: "-5px", right: "-5px", ...circleStyle}}></div>
      4
    </div>
  );
}

export default NumberComponent;

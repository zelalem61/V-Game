import React from "react";
import Number from "./number";
import "./try.css"; // Import the CSS file

const Try = () => {
  const numberWidth = 68;
  const numberHeight = 51;

  const containerStyle = {
    width: `${numberWidth}px`,
    height: `${numberHeight}px`,
    position: "relative",
    overflow: "hidden", // Add overflow to hide the circles initially
  };

  const circleStyle = {
    position: "absolute",
    width: "13px",
    height: "13px",
    borderRadius: "50%",
    backgroundColor: "white",
    display: "none",
  };

  const handleHover = () => {
    const circles = document.querySelectorAll(".circle");
    circles.forEach((circle, index) => {
      // Calculate positions for each circle
      const positions = [
        { top: "-5px", left: "-5px" },
        { top: "-5px", left: "50%", transform: "translateX(-50%)" },
        { top: "-5px", right: "-5px" },
        { top: "50%", left: "-5px", transform: "translateY(-50%)" },
        { top: "50%", right: "-5px", transform: "translateY(-50%)" },
        { bottom: "-5px", left: "-5px" },
        { bottom: "-5px", left: "50%", transform: "translateX(-50%)" },
        { bottom: "-5px", right: "-5px" },
      ];

      // Apply styles to each circle
      Object.assign(circle.style, positions[index], circleStyle);
      circle.style.display = "block";
    });
  };

  const handleLeave = () => {
    const circles = document.querySelectorAll(".circle");
    circles.forEach((circle) => {
      circle.style.display = "none";
    });
  };

  return (
    <div
      className="flex justify-center items-center bg-gray-300 relative"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      style={containerStyle}
    >
    <div className="circle leftup" style={{ top: "-5px", left: "-5px", ...circleStyle }}></div>
    <div className="circle topmid" style={{ top: "-5px", left: "50%", transform: "translateX(-50%)", ...circleStyle }}></div>
    <div className="circle rightup" style={{ top: "-5px", right: "-5px", ...circleStyle }}></div>
    <div className="circle leftmid" style={{ top: "50%", left: "-5px", transform: "translateY(-50%)", ...circleStyle }}></div>
    <div className="circle rightmid" style={{ top: "50%", right: "-5px", transform: "translateY(-50%)", ...circleStyle }}></div>
    <div className="circle leftbottom" style={{ bottom: "-5px", left: "-5px", ...circleStyle }}></div>
    <div className="circle bottommid" style={{ bottom: "-5px", left: "50%", transform: "translateX(-50%)", ...circleStyle }}></div>
    <div className="circle rightbottom" style={{ bottom: "-5px", right: "-5px", ...circleStyle }}></div>

      
      <div style={{ border: "1px solid white" }}>
        <Number color={"#ff0000"} width={numberWidth} height={numberHeight} num={6} />
      </div>
    </div>
  );
};

export default Try;

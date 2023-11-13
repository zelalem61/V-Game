import React from "react";
import Number from "./number";

const BlackRed = () => {
    return (
        <div className="flex">
            <div style={{width: "140px", border: "1px solid #496649"}} >
                <Number color="#1b401b" width={140} height={50} num = {"1 - 18"} />
            </div>
            <div style={{width: "140px", border: "1px solid #496649"}} >
                <Number color="#1b401b" width={140} height={50} num = {"Even"} />
            </div>
            <div style={{width: "140px", border: "1px solid #496649"}} >
                <Number color="#ff0000" width={140} height={50} num = {"Red"} />
            </div>  
            <div style={{width: "140px", border: "1px solid #496649"}} >
                <Number color="#000000" width={140} height={50} num = {"Black"} />
            </div>
            <div style={{width: "140px", border: "1px solid #496649"}} >
                <Number color="#1b401b" width={140} height={50} num = {"Odd"} />
            </div>
            <div style={{width: "140px", border: "1px solid #496649"}} >
                <Number color="#1b401b" width={130} height={50} num = {"19 - 36"} />
            </div>  
    </div>
    )
}


export default BlackRed
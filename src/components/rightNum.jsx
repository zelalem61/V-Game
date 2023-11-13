import React from "react";
import Number from "./number";

const RightNum = (props) => {


    function sendNum(num){
        props.rightFirst(num)
    }

    function removeNum(){
        props.rightFirst(0)
    }
    return (
        <div>
            <div onMouseEnter={() => sendNum(1)} 
            onMouseLeave={() => removeNum()}
             style={{width: "83px", border: "1px solid #496649"}} >
                <Number color="#1b401b" width={81} height={51} num = {"2 to 1"} />
            </div>
            <div onMouseEnter={() => sendNum(2)} 
            onMouseLeave={() => removeNum()}
            style={{width: "83px", border: "1px solid #496649"}} >
                <Number color="#1b401b" width={81} height={51} num = {"2 to 1"} />
            </div>
            <div onMouseEnter={() => sendNum(3)} 
            onMouseLeave={() => removeNum()}
            style={{width: "83px", border: "1px solid #496649"}} >
                <Number color="#1b401b" width={81} height={51} num = {"2 to 1"} />
            </div>
        </div>
    )
}


export default RightNum
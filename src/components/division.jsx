import React from "react";
import Number from "./number";

const Division = (props) => {


    function sendNum(num){
        props.firstChanger(num)
    }

    function removeNum(){
        props.firstChanger(0)
    }
    return (
        <div className="flex">
            <div onMouseEnter={() => sendNum(1)} 
            onMouseLeave={() => removeNum()}
            
            style={{width: "280px", border: "1px solid #496649"}} >
                <Number color="#1b401b" width={278} height={50} num = {"1st 12"} />
            </div>
            <div onMouseEnter={() => sendNum(2)} 
            onMouseLeave={() => removeNum()}
            style={{width: "280px", border: "1px solid #496649"}} >
                <Number color="#1b401b" width={278} height={50} num = {"2nd 12"} />
            </div>
            <div onMouseEnter={() => sendNum(3)} 
            onMouseLeave={() => removeNum()}
            style={{width: "280px", border: "1px solid #496649"}} >
                <Number color="#1b401b" width={278} height={50} num = {"3rd 12"} />
            </div>
        </div>
    )
}


export default Division;
import React, { useState } from "react";
import Zero from "./zero";
import RightNum from "./rightNum";
import GridNums from "./gridNums";
import Division from "./division";
import BlackRed from "./blackRed";
import Colors from "./colors";
import Slider from "./slider";

const Field = () => {

    const [firstOr, setFirstOr] = useState(null);
    const [right, setRight] = useState(null);
    function firstChanger(state){
        setFirstOr(state)
    }

    function rightSetter(number){
        setRight(number)
    }


    return (
        <div>
            <div style={{backgroundColor: "#1b401b", width: "1060px", height: "520px"}}>
                <div className="flex pt-6" style={{margin: "40px"}}>
                    <Zero/>
                    <GridNums division = {firstOr} right = {right}/>
                    <RightNum rightFirst = {rightSetter}/>
                </div>

                <div className="px-24 -mt-6">
                    <div>
                        <Division firstChanger = {firstChanger}/>
                    </div>
                    <div className="mt-4">
                        <BlackRed/>
                    </div>
                    <div className="mt-4">
                        <Colors/>
                    </div>
                </div>
                <div className="-mb-14 px-3 mt-8 text-white text-md"> 
                    NEIGHBORS
                </div>
                <div className="mt-16">
                        <Slider/>
                    </div>
                
            </div>
            
        </div>
    )
}


export default Field
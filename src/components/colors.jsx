import React from "react";

const Colors = () => {
    const Style = {
        width: "140px",
        height: "50px",
        // backgroundColor: `${props.color}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '12px',
        // color: 'white',
       
        // margin: '1px'
    };
    return (
        <div className="flex">
            <div style={{width: "140px", border: "1px solid #496649", backgroundColor: "#ff8f17", color: "white"}} >
                <div style={Style}>
                    32/15/19/4/21/2
                </div>
            </div>
            <div style={{width: "140px", border: "1px solid #496649", backgroundColor: "#163fff", color: "white"}} >
                <div style={Style}>
                    25/17/34/6/27/13
                </div>
            </div>
            <div style={{width: "140px", border: "1px solid #496649", backgroundColor: "#ff5aff", color: "white"}} >
                <div style={Style}>
                    36/11/30/8/23/10
                </div>
            </div>
            <div style={{width: "140px", border: "1px solid #496649", backgroundColor: "#00cf9e", color: "white"}} >
                <div style={Style}>
                    5/24/16/33/1/20
                </div>
            </div>
            <div style={{width: "140px", border: "1px solid #496649", backgroundColor: "#fff300", color: "#808c9c"}} >
                <div style={Style}>
                    14/31/9/22/18/9
                </div>
            </div>
            <div style={{width: "140px", border: "1px solid #496649", backgroundColor: "#ffffff", color: "#808c9c"}} >
                <div style={Style}>
                    7/28/12/35/3/26
                </div>
            </div>
    </div>
    )
}


export default Colors
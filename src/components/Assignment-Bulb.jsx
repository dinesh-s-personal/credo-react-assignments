import React from "react";

const AssignmentBulb = () => {

    const [bulbState, updateState] = React.useState(true);

    const toggleButton = () => {
        updateState(!bulbState);
    }
    
    return <div>
        <h1>Assignment SubTask 1 - Bulb on/off</h1>
        <div style={{background: bulbState?"blue":"yellow",height:"100px", width:"100px"}}>
        </div>
        <button onClick={() => toggleButton()}>Switch-On</button>
    </div>
}

export default AssignmentBulb;
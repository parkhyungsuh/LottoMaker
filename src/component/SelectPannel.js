import React, { useState } from 'react';
import '../css/SelectPannel.css'

const SelectPannel = () => {    
    return (
        <div className="number-container">        
        {[...Array(45)].map((n,index) => {
            return <Number num={index+1} key={index} />
        })}
        </div>)
}

const Number = (props) => {
    const [picked, setPicked] = useState(false);

    return <div className={`pannel-number${picked? ' picked':``}`} onClick={() => setPicked(!picked)}>{props.num}</div>
}

export default SelectPannel;
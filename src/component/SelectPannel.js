import React, { useState } from 'react';
import '../css/SelectPannel.css'

const SelectPannel = (props) => {    
    return (
        <div className="number-container">        
        {[...Array(45)].map((n,index) => {
            return <Number num={index+1} key={index} selecting={props.selecting} counter={props.counter}/>
        })}
        </div>)
}

const Number = (props) => {
    const [picked, setPicked] = useState(false);
    const picking = (num) => {
        if(props.counter < 6) {
            setPicked(!picked);
            console.log(typeof num);
            props.selecting(num);
        } else {
            alert('번호선택끝');
        }
    }

    return <div className={`pannel-number${picked? ' picked':``}`} onClick={() => picking(props.num)}>{props.num}</div>
}

export default SelectPannel;
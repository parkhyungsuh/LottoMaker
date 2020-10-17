import React from 'react';
import '../css/SelectPannel.css'

const SelectPannel = (props) => {    
    return (
        <div className="number-container">        
        {[...Array(45)].map((n,index) => {
            return (
                <Number  
                    num={index+1} 
                    key={index} 
                    selecting={props.selecting} 
                    counter={props.counter}
                    checking={props.numbers.indexOf(index+1) === -1 ? false : true}
                />
            )
        })}
        </div>)
}

const Number = (props) => {
    const picking = (num) => {
        if(props.counter < 6) {
            props.selecting(num);
        } else {
            alert('번호선택끝');
        }
    }

    return <div className={`pannel-number${props.checking ? ' picked':``}`} onClick={() => picking(props.num)}>{props.num}</div>
}

export default SelectPannel;
import React from 'react';
import '../css/SelectedNumber.css';

const SelectedNumber = (props) => {
    const numbers = props.numbers;
    return (
        <div className="selected-container">
            <Number num={numbers[0]} />
            <Number num={numbers[1]} />
            <Number num={numbers[2]} />
            <Number num={numbers[3]} />
            <Number num={numbers[4]} />
            <Number num={numbers[5]} />
        </div>
    )
}

const Number = (props) => {
    const selNum = props.num;
    if ( selNum < 11 ) {
        return <div className='selected-number num10'>{props.num}</div>
    } else if ( selNum > 10 && selNum < 21) {
        return <div className='selected-number num20'>{props.num}</div>
    } else if ( selNum > 20 && selNum < 31) {
        return <div className='selected-number num30'>{props.num}</div>
    } else if ( selNum > 30 && selNum < 41) {
        return <div className='selected-number num40'>{props.num}</div>
    } else if ( selNum > 40 && selNum < 46) {
        return <div className='selected-number num45'>{props.num}</div>
    } else {
        return <div className='selected-number num-none'>{props.num}</div>
    }
}

export default SelectedNumber;
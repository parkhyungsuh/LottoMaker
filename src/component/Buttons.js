import React from 'react';
import '../css/Buttons.css'

const Buttons = (props) => {
    return (
        <div className="button-container">
            <ResetButton reset={props.reset} />
            <AutoButton 
                leftNumber={props.leftNumber} 
                leftCounter={props.leftNumber.length} 
                selectCounter={props.counter}
                random={props.random}
            />
            <SaveButton />
        </div>
    )
}

const ResetButton = (props) => {
    return <button type='button' onClick={() => props.reset()}>리셋</button>
}
const AutoButton = (props) => {
    let leftNumber = props.leftNumber;
    let randomNumber = [];
    const getRandomNumber = (min,max) => {
        return Math.floor(Math.random()*(max-min))+min;
    };
    const makeNumberSet = () => {
        if ( props.selectCounter >= 6){
            alert('번호가 모두 선택되었습니다.')
        } else {
            for (let i=1; i <= 6-props.selectCounter; i++) {
                let random = getRandomNumber(0,props.leftCounter-1-i);
                randomNumber.push(leftNumber[random]);
                leftNumber.splice(random,1);
            }
            props.random(randomNumber,leftNumber);
        }
    }

    return <button type='button' onClick={() => makeNumberSet()}>자동</button>
}
const SaveButton = () => {
    return <button type='button'>저장</button>
}
export default Buttons;
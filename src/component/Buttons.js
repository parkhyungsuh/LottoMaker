import React from 'react';
import html2canvas from 'html2canvas';
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
    const saveImage = () => html2canvas(document.querySelector(".card")).then(function(canvas) {
        saveAs(canvas.toDataURL(), 'name.png');
    });

    function saveAs(uri, filename) {
        let link = document.createElement('a');
        if (typeof link.download === 'string') {
            link.href = uri;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            window.open(uri);
        }
    }

    return <button type='button' onClick={() => saveImage()}>저장</button>
}
export default Buttons;
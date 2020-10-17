import React from 'react';
import '../css/Buttons.css'

const Buttons = (props) => {
    return (
        <div className="button-container">
            <ResetButton reset={props.reset} />
            <AutoButton />
            <SaveButton />
        </div>
    )
}

const ResetButton = (props) => {
    return <button type='button' onClick={() => props.reset()}>리셋</button>
}
const AutoButton = () => {
    return <button type='button'>자동</button>
}
const SaveButton = () => {
    return <button type='button'>저장</button>
}
export default Buttons;
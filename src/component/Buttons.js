import React from 'react';
import '../css/Buttons.css'

const Buttons = () => {
    return (
        <div className="button-container">
            <ResetButton />
            <AutoButton />
            <SaveButton />
        </div>
    )
}

const ResetButton = () => {
    return <button type='button'>리셋</button>
}
const AutoButton = () => {
    return <button type='button'>자동</button>
}
const SaveButton = () => {
    return <button type='button'>저장</button>
}
export default Buttons;
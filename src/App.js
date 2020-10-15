import React from 'react';
import Buttons from './component/Buttons';
import SelectedNumber from './component/SelectedNumber';
import SelectPannel from './component/SelectPannel';
import './css/main.css';

const App = () => {
  return ( 
    <div className="card">
      <SelectedNumber />
      <SelectPannel />
      <Buttons />
    </div>
  )
}
export default App;

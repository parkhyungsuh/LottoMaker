import React, { useState } from 'react';
import Buttons from './component/Buttons';
import SelectedNumber from './component/SelectedNumber';
import SelectPannel from './component/SelectPannel';
import './css/main.css';

const App = () => {
  const [select, setSelect] = useState([]);
  const [left, setLeft] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45]);
  const selecting = ( number ) => {
    if(select.includes(number)){
      setSelect(select.filter( num => num !== number).sort(function(a,b){return a-b}));
      setLeft(left.concat(number).sort(function(a,b){return a-b}));
    } else {
      setSelect(select.concat(number).sort(function(a,b){return a-b}));
      setLeft(left.filter( num => num !== number).sort(function(a,b){return a-b}));  
    }
  }
  return ( 
    <div className="card">
      <SelectedNumber numbers={select} />
      <SelectPannel selecting={selecting} counter={select.length}/>
      <Buttons leftNumber={left} />
    </div>
  )
}
export default App;

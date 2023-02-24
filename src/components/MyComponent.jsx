import React, {useState, useEffect} from 'react'
import BtnGroup from './BtnGroup';

export default function MyComponent() {
  const [btns, setBtns] = useState([]);
  const [lastValue, setLastValue] = useState(0);

  const handleAdd = () => {
    setLastValue(prev => prev + 1)
    setBtns([lastValue + 1,...btns]);
  };

  const handleSubtract = () => {
    setLastValue(prev => prev - 1)
    setBtns([lastValue - 1, ...btns]);
  };

  const handleDelete = (index) => () => {
    const newLog = [...btns];
    newLog.splice(index, 1);
    setBtns(newLog);
  };

  return (
    <div>
    <div className="btn-group font-monospace" role="group">
    <button type="button" className="btn btn-outline-success" onClick={handleAdd}>+</button>
    <button type="button" className="btn btn-outline-danger" onClick={handleSubtract}>-</button>
  </div>
  <BtnGroup btns={btns} handleDelete={handleDelete}></BtnGroup>
    </div>
  )
}

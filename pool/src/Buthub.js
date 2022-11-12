import { useEffect, useState } from 'react';
import './App.css';
import Water from './Water';

const Buthub = ({count}) => {
  const [arr, setArr] = useState([]);

  useEffect(() =>{
    const new_arr = [];
    for(let i = 0; i <= count; i++){
      new_arr.push(i);
    }
    setArr(new_arr);
  }, [count])

  return (
    <div className="Buthub">
      {arr.map((index) =>(
        <Water key={index}/>
      ))}
    </div>
  );
}

export default Buthub;

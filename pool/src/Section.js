import React, {useState, useEffect} from 'react';
import Buthub from './Buthub';
import Buttons from './Buttons';

const Section = () =>{
    const [count, setCount] = useState(0);

    let startTime, interval;

    const addWater = () =>{
        startTime = new Date().getTime(); 
        interval = setInterval(() =>{
            setCount(prevCount => prevCount + 1);
            if(new Date().getTime() - startTime > 8000){
                clearInterval(interval);
            }
        }, 2000);
    }

    
    const deleteWater = () =>{
        startTime = new Date().getTime(); 
        interval = setInterval(() =>{
            setCount(prevCount => prevCount - 1);
            if(new Date().getTime() - startTime > 8000){
                clearInterval(interval);
            }
        }, 2000);
    }

    return(
        <div className="Section">{count}
            <Buttons addWater={addWater} deleteWater={deleteWater} />
            <Buthub count={count}/>
        </div>
    )
}

export default Section;
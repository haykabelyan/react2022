import { useState } from "react";

function Search({cb}){

    const handleOnChange = (e)=>{
        cb(e.target.value);
    } 

    return (
        <div className="Search">
            <input 
                type="text" 
                placeholder="Search Here..."
                onChange = {handleOnChange}
            />    
        </div>
    );
}


export default Search;
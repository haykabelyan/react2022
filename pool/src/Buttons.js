const Buttons = ({addWater, deleteWater}) =>{
    return(
        <div className="Buttons">
            <button className="btn" onClick={addWater}>add</button>
            <button className="btn" onClick={deleteWater}>delete</button>
        </div>
    )
}

export default Buttons;
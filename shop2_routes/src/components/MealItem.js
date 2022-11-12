import {Link} from 'react-router-dom';

const MealItem = (props)=>{
    const {idMeal, strMeal, strMealThumb} = props;

    return (
        <div className="MealItem">
            <h4>{idMeal}</h4>
            <p>{strMeal}</p>
            <img src={strMealThumb} />
            <Link to={"/recipe/" + idMeal}>Watch recipe</Link>
            <hr />
        </div>
    );
}

export default MealItem;
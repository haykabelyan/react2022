


import MealItem from '../components/MealItem';

const MealList = ({meals})=>{

   const elements = meals.map((meal, index)=>{
        return <MealItem key={meal.idMeal} {...meal} />
    })

    return (
        <>
                {elements}         
        </>
    );
}

export default MealList;
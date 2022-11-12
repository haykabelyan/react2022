import CategoryItem from "./CategoryItem";

function CategoryList({ catalog=[] }){


    return (
        <div className="CategoryList">
            {
                catalog.map((el)=>{
                    return <CategoryItem key={el.idCategory} item={el} />;
                })
            }
        </div>
    );
}



export default CategoryList;
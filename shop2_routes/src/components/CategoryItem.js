import './CategoryItem.css';
import {Link} from 'react-router-dom';

function CategoryItem({item}){
    return (
        <div className="CategoryItem">
            <h2>{item.idCategory}</h2>
            <h3>{item.strCategory}</h3>
            <p>{item.strCategoryDescription}</p>
            <img src={item.strCategoryThumb} />
            <Link className='btn' to={'/category/'+ item.strCategory+'/'}> Watch Category </Link>
        </div>
    );
}


export default CategoryItem;
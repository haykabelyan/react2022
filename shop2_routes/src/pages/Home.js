import {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {getAllCategories} from '../api';

import CategoryList from '../components/CategoryList';
import Search from '../components/Search';

function Home(){
  
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);
    const {pathname, search} = useLocation();
  

    useEffect(() => {
      getAllCategories().then((data)=>{
       setCatalog(data.categories);
       
      })
    }, []);


    const handleSearch = (str)=>{
        setFilteredCatalog(
            catalog.filter((item)=> item.strCategory.toLowerCase().includes(str.toLowerCase()))
        );
    };


    return (
        <>

            <h1>Home</h1> 
            <Search cb={handleSearch}/>
            <CategoryList catalog={filteredCatalog.length >0 ? filteredCatalog : catalog}  />
        </>
    );  
}

export default Home;
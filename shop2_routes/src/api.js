
import { API_URL } from "./config";

// BERUM E BOLOR CATEGORIANERY
const getAllCategories = async()=>{
        const response = await fetch(API_URL+'categories.php');
        return response.json();
};


// BOLOR CATEGORIANERIC BERUM E MIAYN MEK CATEGORIAN
const getFilteredCategory = async (catName)=>{
    const response = await fetch(API_URL+'filter.php?c='+catName);
    return response.json();
}

// MEK CATEGORIAYI MEJIC MENAK MEK APRANQY
const getMealById = async(id)=>{
    const response = await fetch(API_URL+'lookup.php?i='+id);
    return response.json();
}



export {getAllCategories, getFilteredCategory, getMealById};
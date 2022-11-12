import { Dispatch } from "@reduxjs/toolkit";
import  axios  from '../../axios';
import { productSlice } from "../slices/productSlice";


export const  fetchProducts =  (page=1, limit=5)=>{
    return async (dispatch: Dispatch) => {
        try{
          dispatch(productSlice.actions.fetching())
          const response = await axios.get('products',{
           params: {
            limit
           }
          });
          console.log(response);
          
          dispatch(productSlice.actions.fetchSuccess(
            response.data
          ))
        }catch(error){
          dispatch(productSlice.actions.fetchError(error as Error))
        }
    }
}
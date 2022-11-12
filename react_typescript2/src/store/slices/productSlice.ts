import { IProduct } from "../../models/models"
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface ProductState {
    loading: boolean,
    error: string,
    products: IProduct[]
}

const initialState: ProductState = {
    loading: false,
    error: '',
    products: []
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{
        fetching(state){
            state.loading = true;
        },
        fetchSuccess(state, action: PayloadAction<IProduct[]>){
            state.loading = false;
            state.products = action.payload   
            state.error = '' 
        },
        fetchError(state, action: PayloadAction<Error>){
            state.loading = false;
            state.error = action.payload.message
        }
    }
});

export default productSlice.reducer;
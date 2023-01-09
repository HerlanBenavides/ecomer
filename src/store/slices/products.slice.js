import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productSlice = createSlice({
    name: 'products',
    initialState: null,
    reducers: {
        setProductsGlobal: (state, action)=> action.payload 
    }
})

export const {setProductsGlobal} =  productSlice.actions

export default productSlice.reducer

export const getAllProducts =()=> (dispatch)=>{
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/products' 
    return axios.get(URL)
    .then( res => dispatch(setProductsGlobal(res.data.data.products)))
    .catch(err => console.log(err))
}
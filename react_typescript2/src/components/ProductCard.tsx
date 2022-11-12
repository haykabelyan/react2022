import React from 'react'
import { IProduct } from './../models/models';
import {useNavigate} from 'react-router-dom';

interface ProductCardProps{
  product: IProduct
}

export function ProductCard({product}: ProductCardProps) {

  const navigate = useNavigate();

  const clickHandler = ()=> navigate(`/product/${product.id}`)

  return (
    <div 
      className='border rounded-md py-4 px-6 mb-2 hover:shadow-md hover:transition-all cursor-pointer'
      onClick={clickHandler}  
    >
      <p className='text-lg font-bold'> {product?.title} </p>
      <p className='text-lg font-bold'> {product?.price} </p>
      <p className='text-lg font-bold'> {product?.description} </p>
      <p className='text-lg font-bold'> {product?.rating.rate} </p>
      <p className='text-lg font-bold'> {product?.rating?.count} </p>
      <img src={product?.image} alt={product?.title} />
    </div>
  )
}

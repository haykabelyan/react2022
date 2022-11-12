import React, { ChangeEvent, useState, useEffect } from 'react'
import { useInput } from './../hooks/input';
import { useDebounce } from './../hooks/debounce';
import axios from './../axios/index';
import { IProduct } from './../models/models';
import { useNavigate } from 'react-router-dom';

export function ProductSearch() {

  const input = useInput('');
  const debounced = useDebounce(input.value, 400);
  const [products, setProducts] = useState<IProduct[]>([]);
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);

  async function searchProduct(){
    const response = await axios.get<IProduct[]>('products', { params: {limit: 10}});          
    setProducts(response.data);
  }

    useEffect(()=>{
        if(debounced.length > 3){
          searchProduct().then(()=> setDropdown(true))        
        }else{
          setDropdown(false)
        }
    }, [debounced]);

  return (
    <div className="mb-4 relative">
    <input
      className="border px-4 py-2 w-full outline-0 h-[42px]"
      placeholder="Search for airport..."
      {...input}
    />

    

   {
    dropdown &&
    <ul className='list-none absolute left-0 right-0 h-[200px] top-[42px] shadow-md bg-white overflow-y-scroll'>
    {
     products.map(product => <li 
           className='py-2 mb-2 hover: bg-gray-500 hover: transition-colors cursor-pointer hover: text-white' key={product.id} onClick={()=> navigate('/product/'+ product.id)}>
             {product.title}
           </li>)
    }
   </ul>
   }

  </div>
  )
}

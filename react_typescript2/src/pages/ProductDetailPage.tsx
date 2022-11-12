import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import  axios  from '../axios';
import { IProductDetail } from "../models/models";


export  function ProductDetailPage() {

    const params = useParams<'id'>();
    const [product, setProduct] = useState<IProductDetail | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
      fetchDetailProduct()
    },[]);

    async function fetchDetailProduct(){
      const response = await axios.get<IProductDetail>('/products/' + params.id);
      console.log(response);
      setProduct(response.data);
      setLoading(false);
    }


    if(loading) return <p className="text-center">Loading...</p>

  return (
    <div className=" container mx-auto pt-5 max-w-[760px]">
        <h1 className=" text-center text-2xl">ProductDetailPage {product?.title}</h1>
    </div>
  )
}

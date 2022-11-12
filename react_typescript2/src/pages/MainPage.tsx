import React, {useEffect, useRef} from 'react';
import { fetchProducts } from '../store/actions/productActions';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import { ProductCard } from './../components/ProductCard';
import { ProductSearch } from '../components/ProductSearch';
import ReactPaginate from 'react-paginate';


// hasel em 1:10:33 ropeyin

const ITEM_PER_PAGE = 10

function MainPage() {

  const dispatch = useAppDispatch();
  const {error, loading, products} = useAppSelector(state => state.product);
  const page = useRef(1);


  useEffect(()=>{
    dispatch(fetchProducts(page.current, ITEM_PER_PAGE))
  }, [dispatch, page]);


  const pageCount = 10;
  const pageChangeHandler = ({selected}: {selected: number})=>{
    page.current = selected+1;
    dispatch(fetchProducts(page.current, ITEM_PER_PAGE))
  }

  return (
    <div className=' container mx-auto max-w-[760px] pt-5'>

    {loading && <p className='text-center text-lg'>Loading...</p>}
    {error && <p className='text-center text-lg text-red-600'>{error}</p>}

    <ProductSearch />


    {
      products.map(product=> <ProductCard key={product.id} product={product} />)
    }
     

     <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={pageChangeHandler}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        forcePage={page.current-1}
        previousLabel="< previous"
        containerClassName='flex'
        pageClassName='py-1 px-2 border mr-3'
        previousClassName='py-1 px-2 border mr-2'
        nextClassName='py-1 px-2 border'
        activeClassName='bg-gray-500 text-white'
      />


    </div>
  )
}

export default MainPage
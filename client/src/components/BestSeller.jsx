import React, { useContext, useEffect , useState }from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItems from './ProductItems';

const BestSeller = () => {

    const { products } = useContext(ShopContext);
    const [bestseller,setBestSeller] = useState([]);

    useEffect(()=>{
        const bestProducts = products.filter((item)=>(item.bestSeller === true));
        setBestSeller(bestProducts.slice(0,5));
    },[products])

  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLERS'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem Ispum is simply dummy text of the prinnting and typesetting industry. Lorem Ipsum has been the.
            </p>
        </div>
        {/* Render Best Seller Products */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-col-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                   bestseller.map((item,index)=>(
                    <ProductItems key={item._id} _id={item._id} images={item.images} name={item.name} price={item.price} />
                   )) 
                }
            </div>
             
            
    </div>
  )
}

export default BestSeller
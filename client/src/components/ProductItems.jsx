import React, { useContext} from 'react'
import { ShopContext } from '../context/shopContext';
import { Link } from 'react-router-dom';
import { assets } from '../assets/frontend_assets/assets';



const ProductItems = ({id , image , name , price}) => {

    const {currency} = useContext(ShopContext);

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        
        <div className='flex items-center'>
        <p className='text-sm font-medium '>{currency}{price}</p>
            <span className='text-sm pl-20'>Best Seller</span>
            <img className='w-4 h-4 ml-2 hover:scale-110 transition ease-in-out' src={assets.heart_icon} alt="heart icon" />
        </div>
    </Link>
  )
}

export default ProductItems
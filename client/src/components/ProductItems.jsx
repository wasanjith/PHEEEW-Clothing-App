import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItems = ({ _id, images, name, price }) => {
  const { currency } = useContext(ShopContext);

  // Check if images is defined and is an array
  const imageUrl = Array.isArray(images) && images.length > 0 ? images[0] : '';

  if (!imageUrl || !_id) {
    return null; // Return null if imageUrl or _id is not available
  }

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${_id}`}>
      <div className='overflow-hidden'>
        <img className='hover:scale-110 transition ease-in-out' src={imageUrl} alt={name} />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  );
};

export default ProductItems;
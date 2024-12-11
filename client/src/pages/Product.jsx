import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import RelatedPoducts from '../components/RelatedPoduct';

const Product = () => {

  const {productId} = useParams();
  const {products, currency} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    products.map(item => {
      if(item._id === productId){
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    })
  }

  useEffect(() => { 
    fetchProductData();
  },[productId, products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* ---------------- Product Data -------------------- */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/*----------------- Product Images -------------------*/}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
              {
                productData.image.map((item, index) => (
                  <img onClick={()=>setImage(item)} key={index} src={item} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'  alt="" /> 
              ))}
          </div>
            <div className='w-full sm:w-[80%]'>
              <img className='w-full h-auto' src={image} alt="" />
              
            </div>
        </div>

          
          {/*-------------------- Product Details ---------------------*/}
          <div className='flex-1'>
            <h1 className='font-medium text-4xl mt-2'>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-5 mb-5'>
               <img src={assets.star_icon} alt="" className="w-3 5" />
               <img src={assets.star_icon} alt="" className="w-3 5" />
               <img src={assets.star_icon} alt="" className="w-3 5" />
               <img src={assets.star_icon} alt="" className="w-3 5" />
               <img src={assets.star_dull_icon} alt="" className="w-3 5" />
              <p className='pl-2'>(122)</p>
            </div>
            <p className='mt-5 text-4xl font-medium'>{currency}{productData.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5 mb-10'>{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2 mt-5 mb-5'>
             {productData.sizes.map((item,index)=>(
               <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500': ''}`} key={index}>{item}</button>
             ))}
            </div>
          </div>
            <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 mb-5'>ADD TO CART</button>
             <hr className='mt-8 sm:w-4/5' />
             <div className='text-sm text-gray-500 mt-10 flex flex-col gap-1'>
                <p>100% Original product.</p>
                <p>Cash on delivary is availabale on this product.</p>
                <p>Easy return and exchange policy within 7 days.</p>
             </div>
          </div>
      </div>
      {/* ------------- Description and review section----------------- */}
    <div className='mt-20'>
      <div className='flex'>
            <b className='border px-5 py-3 text-sm'>Description</b>
            <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
      </div>
       <div className='flex flex-col gap-4 border px-6 py-6  text-sm text-gray-500'>
        <p>Our Classic Crewneck T-Shirt is a wardrobe essential for every occasion. Crafted from premium, breathable cotton, this t-shirt offers unmatched comfort and durability. Its versatile design makes it perfect for layering or wearing on its own. Available in a variety of colors to suit your unique style.

              Material: 100% organic cotton
              Fit: Regular fit for all-day comfort
              Care Instructions: Machine wash cold, tumble dry low
              Sizes Available: XS, S, M, L, XL, XXL</p>
        <p>
        Elevate your everyday look with our Stylish High-Rise Skinny Jeans. Designed to hug your curves and provide a flattering silhouette, these jeans are your go-to for casual outings or dressed-up evenings. Made with a stretchable denim blend, they ensure comfort without compromising on style.

              Material: Premium stretch denim (80% cotton, 18% polyester, 2% spandex)
              Fit: High-rise waist, skinny through the leg
              Features: Functional pockets, button closure, and belt loops
              Care Instructions: Wash inside out, cold wash recommended
        </p>
      </div>
    </div>

    {/* ---------------- Display related product--------------- */}

    <RelatedPoducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
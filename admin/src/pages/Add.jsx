import React, { useState } from 'react'
import {assets} from '../assets/admin_assets/assets';
import axios from 'axios';
import { backendUrl } from '../App';

const Add = ({token}) => {

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [price, setPrice] = useState("");
  const [sizes, setSizes] = useState([]);
  const [bestSeller, setBestSeller] = useState(false);

  const onSubmitHandler =  async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
     
      formData.append('name', name);
      formData.append('description', description);
      formData.append('category', category);
      formData.append('subCategory', subCategory);
      formData.append('price', price);
      formData.append('sizes', JSON.stringify(sizes));
      formData.append('bestSeller', bestSeller);
      image1 && formData.append('image1', image1);
      image2 && formData.append('image2', image2);
      image3 && formData.append('image3', image3);
      image4 && formData.append('image4', image4);

      const response = await axios.post(backendUrl + "/api/product/add",formData,{headers:{token}});
      console.log(response.data);
      console.log("JWT Token:", token);

    } catch (error) {
      console.log(error);

    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-4'>
        <div>
          <p className='mb-2'>Upload Image</p>
          <div className='flex gap-2'>
            <label htmlFor="image1">
              <img className='w-20 cursor-pointer' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt=""/>
              <input onChange={(e)=> setImage1(e.target.files[0])} type="file" id="image1"hidden/>
            </label>
            <label htmlFor="image2">
              <img className='w-20 cursor-pointer' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt=""/>
              <input onChange={(e)=> setImage2(e.target.files[0])} type="file" id="image2"hidden/>
            </label>
            <label htmlFor="image3">
              <img className='w-20 cursor-pointer' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt=""/>
              <input onChange={(e) => setImage3(e.target.files[0])} type="file" id="image3"hidden/>
            </label>
            <label htmlFor="image4">
              <img className='w-20 cursor-pointer' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt=""/>
              <input onChange={(e)=> setImage4(e.target.files[0])} type="file" id="image4"hidden/>
            </label>
          </div>
        </div>
        <div className='w-full'>
          <p className='mb-2'>Product name</p>
          <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' />
        </div>
        <div className='w-full'>
          <p className='mb-2'>Product description</p>
          <textarea onChange={(e)=> setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Write content here' />
        </div>
        <div className='flex flex-col sm:flex-row gap-8 w-full sm:gap-8'>
          <div >
            <p className='mb-2'>Product Category</p>
            <select onChange={(e)=> setCategory(e.target.value)} className='w-full max-w-[500px] px-3 py-2 cursor-pointer'>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>
          <div>
            <p className='mb-2'>Sub Cetegory</p>
            <select onChange={(e)=>setSubCategory(e.target.value)} className='w-full max-w-[500px] px-3 py-2 cursor-pointer'>
              <option value="Topwear">Topwear</option>
              <option value="Bottomwear">Bottomwear</option>
              <option value="Winterwear">Winterwear</option>
            </select>
          </div>
          <div>
            <p className='mb-2'>Product Price</p>
            <input onChange={(e)=>setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="number" placeholder='25' />
          </div>
        </div>
        <div>
          <p className='mb-2'>Product Sizes</p>
          <div className='flex gap-3'>
            <div onClick={()=> setSizes(prev => prev.includes("S") ? prev.filter( item => item !== "S") : [...prev, "S"])}>
              <p className={`${sizes.includes("S") ? "bg-purple-300 " : "bg-slate-200 "} px-3 py-1 cursor-pointer`}>S</p>
            </div>
            <div onClick={()=> setSizes(prev => prev.includes("M") ? prev.filter( item => item !== "M") : [...prev, "M"])}>
              <p className={`${sizes.includes("M") ? "bg-purple-300 " : "bg-slate-200 "} px-3 py-1 cursor-pointer`}>M</p>
            </div>
            <div onClick={()=> setSizes(prev => prev.includes("L") ? prev.filter( item => item !== "L") : [...prev, "L"])}>
              <p className={`${sizes.includes("L") ? "bg-purple-300 " : "bg-slate-200 "} px-3 py-1 cursor-pointer`}>L</p>
            </div>
            <div onClick={()=> setSizes(prev => prev.includes("XL") ? prev.filter( item => item !== "XL") : [...prev, "XL"])}>
              <p className={`${sizes.includes("XL") ? "bg-purple-300 " : "bg-slate-200 "} px-3 py-1 cursor-pointer`}>XL</p>
            </div>
            <div onClick={()=> setSizes(prev => prev.includes("XXL") ? prev.filter( item => item !== "XXL") : [...prev, "XXL"])}>
              <p className={`${sizes.includes("XXL") ? "bg-purple-300 " : "bg-slate-200 "} px-3 py-1 cursor-pointer`}>XXL</p>
            </div>
          </div>
        </div>
        <div className='flex gap-2 mt-2'>
        <label htmlFor="bestseller" className="flex gap-2 items-center cursor-pointer">
          <input onChange={() => setBestSeller((prev) => !prev)} checked={bestSeller} type="checkbox" id="bestseller"/>Add to bestseller</label>
        </div>
        <button type='submit' className='w-28 py-3 mt-4 bg-black text-white'>ADD</button>
    </form>
  )
}

export default Add
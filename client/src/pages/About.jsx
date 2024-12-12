
import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/frontend_assets/assets'
import NewLatestBox from '../components/NewLatestBox'


const About = () => {
  return (
    <div>
      <div className='text-4xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-[40%] md:mx-w-[45px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              
                <p className='text-justify'>
                PHEEEW is inspired by the fashion statement of clothing that makes you happy when you wear them. They are stitched flawlessly from the finest, comfiest light weight fabrics with its pleasing colors and mesmerizing patterns to lift your spirit up! Our styles, cut, and fit on is unique and designed to fit the Sri Lankan body stricture and shape. Our fabric and prints are selected carefully to make sure it delivers on our promise of comfort and style. We can guarantee that you will not find a 100% replication of #HappinesWear anywhere else in the world.

                So, whenever you feel like going easy and feeling cozy, choose your #HappinessWear from JoeY.

                “Break the rules of fashion, Follow your heart to happiness!”
                </p>
                <p className=''>
                  Elevate your everyday look with our Stylish High-Rise Skinny Jeans. Designed to hug your curves and provide a flattering silhouette, these jeans are your go-to for casual outings or dressed-up evenings. Made with a stretchable denim blend, they ensure comfort without compromising on style.
                   
                   <p className='text-justify'> ⦾ Material: Premium stretch denim (80% cotton, 18% polyester, 2% spandex)</p> 
                   <p> ⦾ Fit: High-rise waist, skinny through the leg</p> 
                   <p> ⦾ Features : Functional pockets, button closure, and belt loops</p>  
                   <p> ⦾ Care Instructions: Wash inside out, cold wash recommended</p> 
                    </p>
                     <p>
                  Our Classic Crewneck T-Shirt is a wardrobe essential for every occasion. Crafted from premium, breathable cotton, this t-shirt offers unmatched comfort and durability. Its versatile design makes it perfect for layering or wearing on its own. Available in a variety of colors to suit your unique style.
                 
                 <p> ✔ Material: 100% organic cotton</p> 
                 <p> ✔ Fit: Regular fit for all-day comfort</p>
                 <p> ✔ Care Instructions: Machine wash cold, tumble dry low</p>
                 <p> ✔ Sizes Available: XS, S, M, L, XL, XXL</p> 
                    </p>
        </div>
      </div>
          
      <div className='text-2xl py-8 mt-20'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
          <div className='flex flex-col md:flex-row text-sm mb-20 '>
              <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                  <b className='text-xl text-gray-500' >Quality Assurance :</b>
                  <p className='text-gray-600'>We meticulosly select and vet each product to ensure it meets our stringment quality standards.</p>
              </div>
              <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                  <b className='text-xl text-gray-500 '>Convenience :</b>
                  <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
              </div>
              <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                  <b className='text-xl text-gray-500'>Exceptional Customer Service :</b>
                  <p className='text-gray-600'>Our team of dedicated professionals iis here to assist you the way, ensuring  your satisfaction is our top prioroty. </p>
              </div>
          </div>
      </div>
      <div className='flex flex-row justify-between py-8 gap-16'>
                        <div className=''>
                          <div className='text-2xl'><Title  text1={'OUR'} text2={'MISION'}/></div>
                        
                              <hr />
                              <p className='text-gray-600 py-4 text-justify'>At PHEEEW, our mission is to inspire confidence and self-expression through fashion. We are dedicated to crafting high-quality, sustainable clothing that combines style, comfort, and affordability. Our goal is to empower individuals to embrace their unique identity and feel confident in every aspect of their lives.</p>
                        </div>
              <div>
                    <div className='text-2xl'><Title text1={'OUR'} text2={'VISION'}/></div>
                    <hr />
                      <p className='text-gray-600 py-4 text-justify'>Our vision is to become a global leader in the fashion industry by setting new standards for innovation, sustainability, and inclusivity. We envision a world where everyone has access to clothing that not only reflects their personal style but also contributes to a more sustainable and equitable future.</p>
               </div>
                       
          </div>
          <div className='py-8 mb-8'>

          </div>
          <hr className='py-8' />
          <NewLatestBox />
          <div className='py-8'></div>
    </div>
  )
}

export default About

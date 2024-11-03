import React from 'react'

const NewLatestBox = () => {

    const onSubmitHndler = (event) => {
        event.preventDefault();
    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <form onSubmit={onSubmitHndler} className='w-full sm:w-1/2 flex item-center gap-3 mx-auto my-6 border pl-3' >
            <input className='w-full sm:flex-1 outline-none'  type="email" placeholder='Enter your email' required/>
            <button type='submit'className='bg-zinc-950 text-white text-xs px-10 py-4 rounded hover:bg-zinc-700' >SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewLatestBox
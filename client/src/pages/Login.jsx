import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

  const [currentState, setCurrentState] = useState('login');
  const { token ,setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHndler = async (event) => {
    event.preventDefault();
    try {
      if(currentState === 'Sign Up'){
        const response = await axios.post(backendUrl + '/api/user/register', {name, email, password});
        console.log(response.data);
        if(response.data.success){
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          console.log('User registered');
          setCurrentState('login');
        }else{
          toast.error(response.data.message);
        }
      }else{
        const response = await axios.post(backendUrl + '/api/user/login', {email, password});
        console.log(response.data);
        if(response.data.success){
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          console.log('User logged in');
        }else{
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log('Error', error);
      toast.error(error.message);
    }
  }

  useEffect(() => {
    if(token){
      navigate('/');
    }
  },[token])

  return (
    <form onSubmit={onSubmitHndler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gay-800' action="">
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
          <p className='prata-regular text-3xl '>{currentState === 'login' ? 'Login' : 'Sign Up'}</p>
          <hr className='border-none h-[1.5px w-8 bg-gray-800' />
      </div>
    {currentState === 'login' ? '' : <input onChange={(e)=> setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required /> }
      <input onChange={(e)=> setEmail(e.target.value)} value={email} type= "email" className='w-full px-3 py-2 border border-gray-800' placeholder='email' required/>
      <input onChange={(e)=> setPassword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='password'required />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot your password?</p>
        {
          currentState === 'login'
          ? <p onClick={()=> setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p>
          : <p onClick={()=> setCurrentState('login')} className='cursor-pointer'>Login Here</p>
        }
      </div>
      <button type="submit" className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login
import React, { useState } from 'react'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import { Route , Routes } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'  
import Login from './components/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {

  const [token, setToken] = useState('');

  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer />
      { token === "" 
      ? <Login setToken={setToken}/> 
      : 
          <>
          <NavBar /> 
          <hr />
          <div className='flex w-full'>
          <SideBar />
          <div className='w-[70-%] mx-auto ml-[max(5vw,25px) my-8 text-gray-600 text-base]'>
              <Routes>
                  <Route path='/add' element={<Add />} />
                  <Route path='/list' element={<List />} />
                  <Route path='/orders' element={<Orders />} />
              </Routes>
          </div>
          </div>
          </>
      }
      
    </div>
  )
}

export default App
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { captain, setCaptain } = React.useContext(CaptainDataContext)
    const navigate = useNavigate()
    

    const submitHandler = async (e) => {
        e.preventDefault();
        const captain = {
          email: email,
          password : password
        }
    
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)
    
        if (response.status === 200) {
          const data = response.data
    
          setCaptain(data.captain)
          localStorage.setItem('token', data.token)
          navigate('/captain-home')
    
        }
    
        setEmail('')
        setPassword('')
      }


   return (
       <div className='p-7 flex  flex-col justify-between h-screen'>
          <div>
          <img className='w-16 ml-1 mb-4'  src="https://heytaxi.pl/img/hejtaxi.png" alt="logo" />
           <form onSubmit={(e)=>{
               submitHandler(e)
           }} >
               <h3 className='text-lg mb-2'>what's your email</h3>
               <input required
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'  
               type="email" 
               placeholder="Enter email"  />

               <h3 className='text-lg mb-2'>Enter your password</h3>

               <input required
               value={password}
               onChange={(e) => setPassword(e.target.value)}
                className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                type="password" 
               placeholder="Enter password"  />

               <button 
               className='bg-[#111] text-white mb-2 font-semibold rounded px-4 py-2  w-full text-lg placeholder:text-base'
               >Login</button>

           </form >
            <p className='text-center'>Want to join? <Link to='/Captain-Signup' className='text-blue-600'>Register as a Captain</Link></p>
          </div>
          <div>
               <Link to ='/User-Login'
               className='bg-[#FC6B6B] flex item-center justify-center text-white mb-7 font-semibold rounded px-4 py-2  w-full text-lg placeholder:text-base'
               >Sign in as User</Link>
          </div>
       </div>

   );
};
export default CaptainLogin;
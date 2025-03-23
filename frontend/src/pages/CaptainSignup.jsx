import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CaptainSignup = () => {
       const [ email, setEmail ] = useState('')
        const [ password, setPassword ] = useState('')
        const [ firstName, setFirstName ] = useState('')
        const [ lastName, setLastName ] = useState('')
        const [ userData, setUserData ] = useState({})
      
        
        const submitHandler = (e) => {
            e.preventDefault();
            // Handle form submission logic here
            setUserData({
                fullname :{
                    firstname: firstName,
                    lastname: lastName
                },
                email: email,
                password: password,
            });
    
    
            setEmail('');
            setPassword('');
            setFirstName('');
            setLastName('');
        }

       return (
            <div className='p-7 flex  flex-col justify-between h-screen'>
               <div>
               <img className='w-16 ml-1 mb-4'  src="https://heytaxi.pl/img/hejtaxi.png" alt="logo" />
                <form onSubmit={(e)=>{
                    submitHandler(e)
                }} >
                    <h3 className='text-base font-medium mb-2'>What' our Captain's name</h3>
                    <div className='flex gap-2 mb-5'>
                        <input required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className='bg-[#eeeeee]  w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm'
                        type="text"
                        placeholder="Enter First name" />
                        <input required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className='bg-[#eeeeee]  w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm'
                        type="text"
                        placeholder="Enter Last name" />
                        
                        
                    </div>
                 
                    <h3 className='text-base font-medium mb-2'>what's our Captain's email</h3>
                    <input required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm'  
                    type="email" 
                    placeholder="Enter email"  />
    
                    <h3 className='text-base font-medium mb-2'>Enter your password</h3>
    
                    <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                     className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
                     type="password" 
                    placeholder="Enter password"  />
    
                    <button 
                    className='bg-[#111] text-white mb-2 font-semibold rounded px-4 py-2  w-full text-lg placeholder:text-base'
                    >Create Account</button>
    
                </form >
                 <p className='text-center'>Already a Captain? <Link to='/Captain-Login' className='text-blue-600'>Login Here</Link></p>
               </div>
               <div>
               <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
               Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
               </div>
            </div>
    
        );
};

export default CaptainSignup;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserSignup = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className='p-7 flex  flex-col justify-between h-screen'>
           <div>
           <img className='w-16 ml-1 mb-4'  src="https://heytaxi.pl/img/hejtaxi.png" alt="logo" />
            <form onSubmit={(e)=>{
                submitHandler(e)
            }} >
                <h3 className='text-lg mb-2'>What's your name</h3>
                <div className='flex gap-2 '>
                    <input required
                    className='bg-[#eeeeee] mb-7 w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
                    type="text"
                    placeholder="Enter First name" />
                    <input required
                    className='bg-[#eeeeee] mb-7 w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base'
                    type="text"
                    placeholder="Enter Last name" />
                    
                    
                </div>
             
                <h3 className='text-lg mb-2'>what's your email</h3>
                <input required
                className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'  
                type="email" 
                placeholder="Enter email"  />

                <h3 className='text-lg mb-2'>Enter your password</h3>

                <input required
                
                 className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                 type="password" 
                placeholder="Enter password"  />

                <button 
                className='bg-[#111] text-white mb-2 font-semibold rounded px-4 py-2  w-full text-lg placeholder:text-base'
                >Login</button>

            </form >
             <p className='text-center'>new here? <Link to='/User-Signup' className='text-blue-600'>Create new Account</Link></p>
           </div>
           <div>
                <Link to ='/Captain-login'
                className='bg-[#FC6B6B] flex item-center justify-center text-white mb-7 font-semibold rounded px-4 py-2  w-full text-lg placeholder:text-base'
                >Sign in as Captain</Link>
           </div>
        </div>

    );
};

export default UserSignup;
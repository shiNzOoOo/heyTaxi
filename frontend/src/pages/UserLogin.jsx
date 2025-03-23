import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserLogin = () => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [userData , setUserData] = useState({});

        const submitHandler = (e) => { 
            e.preventDefault();
            // TODO: add API call to login user
            setUserData({
                email: email,
                password: password
            });
            console.log('login', {email, password});
            // clear form fields
            setEmail('');
            setPassword('');

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

export default UserLogin;
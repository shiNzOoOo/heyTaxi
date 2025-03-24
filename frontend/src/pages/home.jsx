import React from 'react';
import { useState } from 'react';

const Home = () => {
    const [pickup , setPickup] = useState('')
    const [destination , setDestination] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('submitted')
    }

    return (
        <div className='h-screen  relative'>
            <img className='w-16 ml-4 mt-4  absolute '  src="https://heytaxi.pl/img/hejtaxi.png" alt="logo" />
            <div className='h-screen w-screen'>
                {/* for temperory */}
                <img className='h-full w-full object-cover' src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif" alt="map" />
            </div>
            <div className='flex flex-col justify-end h-screen absolute w-full top-0 '>
                <div className='h-[30%] p-5 bg-white relative'>
                <h4 className='text-2xl font-semibold'>Find a Trip</h4>
                <form onSubmit={(e) => {
                    submitHandler(e)
                    }}>
                    <div className="line absolute h-16 w-1 top-[43%] left-10 bg-gray-800 rounded-full"></div>  
                    <input
                    value={pickup} 
                    onChange={(e) => setPickup(e.target.value)}
                    className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' type="text" placeholder="Enter Pickup Location" />
                    <input 
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3' type="text" placeholder="Enter Drop Location" />
                    
                </form>
                </div>
                <div className='h-[70%] bg-red-500 h-0'>

                </div>
            </div>

        </div>
    );
};

export default Home;
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useEffect , useContext} from 'react';
import { SocketContext } from '../context/SocketContext';
import { useNavigate } from 'react-router-dom';

const Riding = () => {

    
    const location = useLocation();
    const { ride } = location.state || {} // Retrieve ride data
    const { socket } = useContext(SocketContext)
    const navigate = useNavigate()

    socket.on("ride-ended", () => {
        navigate('/home')
    })

        
    return (
        <div className='h-screen'>
            <Link to='/home' className='fixed h-10 w-10 top-2 right-2 bg-white flex items-center justify-center rounded-full'>
            <i className="text-lg ri-home-smile-line"></i>
            </Link>
            <div className='h-1/2'>
                <img className='h-full w-full object-cover' src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif" alt="map" />
            </div>
            <div className='h-1/2 p-4 '>
                <div className='flex items-center justify-between'>
                    <img className='h-20' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="car" />
                    <div className='text-right'>
                        <h2 className='text-lg font-medium capitalize'>{ride?.captain.fullname.firstname}</h2>
                        <h4 className='text-xl font-semibold -mt-1 -mb-1'>{ride?.captain.vehicle.plate}</h4>
                        <p className='text-sm text-gray-600'>vehicle Model</p>
                    </div>
                </div>

                <div className='flex gap-2 justify-between flex-col items-center'>
                    <div className='w-full'>
                        <div className='flex items-center gap-5 p-3 border-b-2'>
                            <i className=" text-lg ri-map-pin-range-fill"></i>
                            <div>
                                <h3 className='text-lg font-medium'>DESTINATION</h3>
                                <p className='text-sm -mt-1 text-gray-600'>{ride?.destination}</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-5 p-3'>
                            <i className=" text-lg ri-money-rupee-circle-line"></i>
                            <div>
                                <h3 className='text-lg font-medium'>₹{ride?.fare}</h3>
                                <p className='text-sm -mt-1 text-gray-600'>calculated fare</p>
                            </div>

                        </div>

                    </div>



                </div>
                <button className='w-full bg-green-600 text-white font-semibold p-2 mt-7 rounded-lg'>Make a Payment</button>
            </div>
        </div>
    )
}

export default Riding
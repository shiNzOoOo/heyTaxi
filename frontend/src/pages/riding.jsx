import React from 'react'
import {Link} from 'react-router-dom'

const Riding = () => {
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
                        <h2 className='text-lg font-medium capitalize'>Name</h2>
                        <h4 className='text-xl font-semibold -mt-1 -mb-1'>up 70 IH 3456</h4>
                        <p className='text-sm text-gray-600'>vehicle Model</p>
                    </div>
                </div>

                <div className='flex gap-2 justify-between flex-col items-center'>
                    <div className='w-full'>
                        <div className='flex items-center gap-5 p-3 border-b-2'>
                            <i className=" text-lg ri-map-pin-range-fill"></i>
                            <div>
                                <h3 className='text-lg font-medium'>34 HIG-C</h3>
                                <p className='text-sm -mt-1 text-gray-600'>mundera Bazar , prayagraj</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-5 p-3'>
                            <i className=" text-lg ri-money-rupee-circle-line"></i>
                            <div>
                                <h3 className='text-lg font-medium'>167.69</h3>
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
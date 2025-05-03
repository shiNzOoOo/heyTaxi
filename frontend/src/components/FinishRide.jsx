import React from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';





const FinishRide = (props) => {
    const navigate = useNavigate()

    async function endRide() {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/end-ride`, {

            rideId: props.ride._id


        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (response.status === 200) {
            navigate('/captain-home')
        }

    }

    return (
        <div>
        <h5
            onClick={() => {
                props.setFinishRidePanel(false)
            }}
            className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Finish this Ride</h3>
        <div className='flex items-center justify-between p-4 border-2 border-gray-400 bg-orange-400 rounded-lg mt-4'>
            <div className='flex items-center gap-3 '>
                <img className='h-10 w-10 rounded-full object-cover' src="https://img.republicworld.com/all_images/booywood-meets-ghibli-style-1743073529492-16_9.webp?w=1200&h=675&q=75&format=webp" alt="" />
                <h2 className='text-lg  font-medium'>{props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname}</h2>
            </div>
            <h5 className='text-lg font-semibold'>2.3 KM</h5>

        </div>

        <div className='flex gap-2 justify-between flex-col items-center'>


            <div className='w-full'>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className=" text-lg ri-map-pin-range-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>PICK-UP</h3>
                        <p className='text-sm -mt-1 text-gray-600'>{props.ride?.pickup}</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className="text-lg ri-map-pin-user-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>DESTINATION</h3>
                        <p className='text-sm -mt-1 text-gray-600'>{props.ride?.destination}</p>
                    </div>

                </div>
                <div className='flex items-center gap-5 p-3'>
                    <i className=" text-lg ri-money-rupee-circle-line"></i>
                    <div>
                        <h3 className='text-lg font-medium'>₹{props.ride?.fare}</h3>
                        <p className='text-sm -mt-1 text-gray-600'>calculated fare</p>
                    </div>

                </div>

            </div>

            <div className='mt-32 w-full'>
              
                    <button
                    onClick={endRide}

                      className='w-full mt-5 bg-green-600 flex justify-center text-white font-semibold p-3 rounded-lg'>Finish Ride</button>
                 
                
            </div>

        </div>
    </div>
    );
};

export default FinishRide;
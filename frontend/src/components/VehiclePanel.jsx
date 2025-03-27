import React from 'react';

const VehiclePanel = (props) => {
    return (
        <div>
            <h5 
                onClick={()=>props.setVehiclePanel(false)}
                className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
                <h3 className='text-2xl font-semibold mb-5'>Choose a vehicle</h3>
                <div 
                onClick={()=>props.setConfirmedRidePanel(true)
                }
                className='flex w-full p-3 item-center justify-between border-2 active:border-black rounded-xl mb-2'>
                    <img className='h-14' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="car" />
                    <div className='ml-2 w-1/2'>
                        <h4 className='font-medium text-base'>gocar <span><i className="ri-user-3-fill"></i>4</span></h4>
                        <h5 className='font-medium text-sm'>2 mins away</h5>
                        <p className='font-medium text-xs text-gray-600'>affordable , compacts ride </p>
                    </div>
                    <h2 className='text-lg font-semibold'>₹199</h2>
                </div>
                <div 
                onClick={()=>props.setConfirmedRidePanel(true)
                }
                className='flex w-full p-3 item-center justify-between border-2 active:border-black rounded-xl mb-2'>
                    <img className='h-14' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="car" />
                    <div className='ml-2 w-1/2'>
                        <h4 className='font-medium text-base'>Bike <span><i className="ri-user-3-fill"></i>1</span></h4>
                        <h5 className='font-medium text-sm'>2 mins away</h5>
                        <p className='font-medium text-xs text-gray-600'>affordable , Motorcycle ride </p>
                    </div>
                    <h2 className='text-lg font-semibold'>₹59</h2>
                </div>
                <div 
                onClick={ ()=> props.setConfirmedRidePanel(true)
                }
                className='flex w-full p-3 item-center justify-between border-2 active:border-black rounded-xl mb-2'>
                    <img className='h-14' src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png" alt="car" />
                    <div className='ml-2 w-1/2'>
                        <h4 className='font-medium text-base'>Auto <span><i className="ri-user-3-fill"></i>3</span></h4>
                        <h5 className='font-medium text-sm'>2 mins away</h5>
                        <p className='font-medium text-xs text-gray-600'>affordable , Auto ride </p>
                    </div>
                    <h2 className='text-lg font-semibold'>₹99</h2>
                </div>

        </div>
    );
};

export default VehiclePanel;
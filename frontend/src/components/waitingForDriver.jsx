import React from 'react';

const WaitingForDriver = (props) => {
    return (
        <div>
            <h5
                onClick={() => {
                    props.setWaitingForDriver(false)
                }}
                className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>

            <div className='flex items-center justify-between'>
                <img className='h-10' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="car" />
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
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-user-fill"></i>
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
        </div>
    );
};

export default WaitingForDriver;
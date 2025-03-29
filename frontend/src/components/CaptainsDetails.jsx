import React from 'react';

const CaptainsDetails = () => {
    return (
       <div>
            <div className='flex items-center justify-between'>
                    <div className='flex items-center justify-start gap-3'>
                        <img className='h-10 w-10 rounded-full object-cover' src="https://static.generated.photos/vue-static/face-generator/landing/wall/20.jpg" alt="captain" />
                        <h4 className='text-lg font-medium'>rishab sing</h4>

                    </div>
                    <div>
                        <h4 className='text-xl font-semibold'>₹1244</h4>
                        <p className='text-sm bg text-gray-600'>Earned</p>
                    </div>
                </div>
                <div className='p-3 mt-6 bg-gray-100 rounded-xl flex items-start justify-center  gap-5'>
                    <div className='text-center'>
                    <i className="text-3xl font-thin ri-time-line"></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='texr-sm text-gray-600'>Hours online</p>
                    </div>
                    <div className='text-center'>
                    <i className="text-3xl font-thin ri-speed-up-line"></i>
                    <h5 className='text-lg font-medium'>50 km</h5>
                    <p className='texr-sm text-gray-600'>Distance travelled</p>

                    </div>
                    <div className='text-center'>
                    <i className="text-3xl font-thin ri-booklet-line"></i>
                    <h5 className='text-lg font-medium'>10</h5>
                    <p className='texr-sm text-gray-600'>today's Rides</p>

                    </div>
                </div>
       </div>
    );
};

export default CaptainsDetails;
import React from 'react'

const LookingForDriver = (props) => {
    return (
        <div>
        <h5
            onClick={() => {
                props.setVehicleFound(false)
            }}
            className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Looking for the Driver</h3>
        <div className='flex gap-2 justify-between flex-col items-center'>
            <img className='h-20' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="car" />

            <div className='w-full'>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className=" text-lg ri-map-pin-range-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>PICK-UP</h3>
                        <p className='text-sm -mt-1 text-gray-600'>{props.pickup}</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                <i className="text-lg ri-map-pin-user-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>DESTINATION</h3>
                        <p className='text-sm -mt-1 text-gray-600'>{props.destination}</p>
                    </div>

                </div>
                <div className='flex items-center gap-5 p-3'>
                <i className=" text-lg ri-money-rupee-circle-line"></i>
                    <div>
                        <h3 className='text-lg font-medium'>₹{props.fare[props.vehicleType]}</h3>
                        <p className='text-sm -mt-1 text-gray-600'>calculated fare</p>
                    </div>

                </div>

            </div>

           

        </div>
    </div>
    )
}

export default LookingForDriver
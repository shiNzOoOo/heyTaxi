import React, { useRef } from 'react';
import { useState } from 'react';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {
    const [pickup, setPickup] = useState('')
    const [destination, setDestination] = useState('')
    const [panelOpen, setPanelOpen] = useState(false)
    const vehiclePanelRef = useRef(null)
    const panelRef = useRef(null)
    const panelCloseRef = useRef(null)
    const [vehiclePanel, setVehiclePanel] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('submitted')
    }

    useGSAP(function () {
        if (panelOpen) {
            gsap.to(panelRef.current, {
                height: '70%',
                padding: 25
            })
            gsap.to(panelCloseRef.current, {
                opacity: 1,

            })
        }
        else {
            gsap.to(panelRef.current, {
                height: '0%'

            })
            gsap.to(panelCloseRef.current, {
                opacity: 0,

            })
        }
    }, [panelOpen])

    useGSAP(function () {
        if (vehiclePanel) {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(0)'
            })
        }
        else {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(100%)'
            })

        }
    }, [vehiclePanel])

    return (
        <div className='h-screen  relative overflow-hidden'>
            <img className='w-16 ml-4 mt-4  absolute ' src="https://heytaxi.pl/img/hejtaxi.png" alt="logo" />
            <div className='h-screen w-screen'>
                {/* for temperory */}
                <img className='h-full w-full object-cover' src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif" alt="map" />
            </div>
            <div className='flex flex-col justify-end h-screen absolute w-full top-0 '>
                <div className='h-[30%] p-6 bg-white relative'>
                    <h5
                        ref={panelCloseRef}
                        onClick={() => setPanelOpen(false)}
                        className='absolute opacity-0 top-6 right-6 text-2xl'>
                        <i className="ri-arrow-down-wide-line"></i>
                    </h5>
                    <h4 className='text-2xl font-semibold'>Find a Trip</h4>
                    <form onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                        <div className="line absolute h-16 w-1 top-[43%] left-10 bg-gray-800 rounded-full"></div>
                        <input
                            onClick={() => setPanelOpen(true)}
                            value={pickup}
                            onChange={(e) => setPickup(e.target.value)}
                            className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' type="text" placeholder="Enter Pickup Location" />
                        <input
                            onClick={() => setPanelOpen(true)}
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3' type="text" placeholder="Enter Drop Location" />

                    </form>
                </div>
                <div ref={panelRef} className='  bg-white h-0'>
                    <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />

                </div>
            </div>
            <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 px-3 py-10 pt-14 bg-white translate-y-full'>
                <h5 
                onClick={()=>setVehiclePanel(false)}
                className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
                <h3 className='text-2xl font-semibold mb-5'>Choose a vehicle</h3>
                <div className='flex w-full p-3 item-center justify-between border-2 active:border-black rounded-xl mb-2'>
                    <img className='h-14' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="car" />
                    <div className='ml-2 w-1/2'>
                        <h4 className='font-medium text-base'>gocar <span><i className="ri-user-3-fill"></i>4</span></h4>
                        <h5 className='font-medium text-sm'>2 mins away</h5>
                        <p className='font-medium text-xs text-gray-600'>affordable , compacts ride </p>
                    </div>
                    <h2 className='text-lg font-semibold'>₹199</h2>
                </div>
                <div className='flex w-full p-3 item-center justify-between border-2 active:border-black rounded-xl mb-2'>
                    <img className='h-14' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="car" />
                    <div className='ml-2 w-1/2'>
                        <h4 className='font-medium text-base'>Bike <span><i className="ri-user-3-fill"></i>1</span></h4>
                        <h5 className='font-medium text-sm'>2 mins away</h5>
                        <p className='font-medium text-xs text-gray-600'>affordable , Motorcycle ride </p>
                    </div>
                    <h2 className='text-lg font-semibold'>₹59</h2>
                </div>
                <div className='flex w-full p-3 item-center justify-between border-2 active:border-black rounded-xl mb-2'>
                    <img className='h-14' src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png" alt="car" />
                    <div className='ml-2 w-1/2'>
                        <h4 className='font-medium text-base'>Auto <span><i className="ri-user-3-fill"></i>3</span></h4>
                        <h5 className='font-medium text-sm'>2 mins away</h5>
                        <p className='font-medium text-xs text-gray-600'>affordable , Auto ride </p>
                    </div>
                    <h2 className='text-lg font-semibold'>₹99</h2>
                </div>


            </div>
        </div>
    );
};

export default Home;
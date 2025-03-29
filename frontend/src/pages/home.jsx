import React, { useRef } from 'react';
import { useState } from 'react';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmedRide from '../components/ConfirmedRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/waitingForDriver';
import { Link } from 'react-router-dom';

const Home = () => {
    const [pickup, setPickup] = useState('')
    const [destination, setDestination] = useState('')
    const [panelOpen, setPanelOpen] = useState(false)
    const vehiclePanelRef = useRef(null)
    const panelRef = useRef(null)
    const confirmedRidePanelRef = useRef(null)
    const vehicleFoundRef = useRef(null)
    const panelCloseRef = useRef(null)
    const waitingForDriverRef = useRef(null)
    const [vehiclePanel, setVehiclePanel] = useState(false)
    const [confirmedRidePanel , setConfirmedRidePanel] = useState(false)
    const [ vehicleFound, setVehicleFound ] = useState(false)
    const [ waitingForDriver, setWaitingForDriver ] = useState(false)

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


    useGSAP(function () {
        if (confirmedRidePanel) {
            gsap.to(confirmedRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        }
        else {
            gsap.to(confirmedRidePanelRef.current, {
                transform: 'translateY(100%)'
            })

        }
    }, [confirmedRidePanel])


    useGSAP(function () {
        if (vehicleFound) {
            gsap.to(vehicleFoundRef.current, {
                transform: 'translateY(0)'
            })
        }
        else {
            gsap.to(vehicleFoundRef.current, {
                transform: 'translateY(100%)'
            })

        }
    }, [vehicleFound])

    useGSAP(function () {
        if (waitingForDriver) {
            gsap.to(waitingForDriverRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(waitingForDriverRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ waitingForDriver ])




    return (
        <div className='h-screen  relative overflow-hidden'>
            <div className='fixed p-6 top-0 flex  items-center justify-between w-screen'>
                <img className='w-16' src="https://heytaxi.pl/img/hejtaxi.png" alt="logo" />
                <Link to='/user/logout' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                <i className="ri-logout-box-r-line"></i>
                </Link>
            </div>
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
            <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 px-3 py-10 pt-12 bg-white translate-y-full'>
                    <VehiclePanel setConfirmedRidePanel={setConfirmedRidePanel} setVehiclePanel={setVehiclePanel} />
            </div>
            <div ref={confirmedRidePanelRef} className='fixed w-full z-10 bottom-0 px-3 py-6 pt-12 bg-white translate-y-full'>
                    <ConfirmedRide setConfirmedRidePanel={setConfirmedRidePanel} setVehicleFound={setVehicleFound} />
            </div>
            <div ref={vehicleFoundRef}  className='fixed w-full z-10 bottom-0 px-3 py-6 pt-12 bg-white translate-y-full'>
                    <LookingForDriver setVehicleFound={setVehicleFound}  />
            </div>
            <div  ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0 px-3 py-6 pt-12 bg-white  '>
                    <WaitingForDriver setWaitingForDriver={setWaitingForDriver} waitingForDriver={waitingForDriver} />
            </div>
        </div>
    );
};

export default Home;
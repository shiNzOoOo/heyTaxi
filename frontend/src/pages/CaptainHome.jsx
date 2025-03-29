import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import CaptainsDetails from '../components/CaptainsDetails';
import RidePopUp from '../components/RidePopUp';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';


const CaptainHome = () => {
    const RidePopUpPanelRef = useRef(null)
    const ConfirmRidePopUpPanelRef = useRef(null)
    const [ RidePopUpPanel , setRidePopUpPanel] = useState(true)
    const [ ConfirmRidePopUpPanel , setConfirmRidePopUpPanel] = useState(false)



    useGSAP(function () {
        if (RidePopUpPanel) {
            gsap.to(RidePopUpPanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(RidePopUpPanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ RidePopUpPanel ])
    
    useGSAP(function () {
        if (ConfirmRidePopUpPanel) {
            gsap.to(ConfirmRidePopUpPanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(ConfirmRidePopUpPanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ ConfirmRidePopUpPanel ])

    return (
        <div className='h-screen'>
            <div className='fixed p-6 top-0 flex  items-center justify-between w-screen'>
                <img className='w-16' src="https://heytaxi.pl/img/hejtaxi.png" alt="logo" />
                <Link to='/captains/logout' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                <i className="ri-logout-box-r-line"></i>
                </Link>
            </div>



            <div className='h-3/5'>
                <img className='h-full w-full object-cover' src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif" alt="map" />
            </div>
            <div className='h-2/5 p-6 '>
                <CaptainsDetails />

            </div>

            <div ref={RidePopUpPanelRef}  className='fixed w-full z-10 bottom-0 px-3 py-10 pt-12 bg-white translate-y-full '>
                <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} />
                    
            </div>

            <div ref={ConfirmRidePopUpPanelRef}  className='fixed w-full h-screen z-10 bottom-0 px-3 py-10 pt-12 bg-white  translate-y-full'>
                <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setRidePopUpPanel={setRidePopUpPanel} />
                
                    
            </div>
        </div>
    );
};

export default CaptainHome;
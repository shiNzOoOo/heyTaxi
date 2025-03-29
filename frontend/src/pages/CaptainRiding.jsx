import React ,{ useRef, useState } from 'react';
import {Link} from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import FinishRide from '../components/FinishRide';


const CaptainRiding = () => {

    const FinishRidePanelRef = useRef(null)
    const [FinishRidePanel, setFinishRidePanel] = useState(false)
    

    useGSAP(function () {
        if (FinishRidePanel) {
            gsap.to(FinishRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(FinishRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ FinishRidePanel ])

    return (
        <div className='h-screen '>
           
        <div className='fixed p-6 top-0 flex  items-center justify-between w-screen'>
            <img className='w-16' src="https://heytaxi.pl/img/hejtaxi.png" alt="logo" />
            <Link to='/Captain-home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-xl ri-home-smile-line"></i>
            </Link>
        </div>



        <div className='h-4/5'>
            <img className='h-full w-full object-cover' src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif" alt="map" />
        </div>
        <div className='h-1/5 p-6 bg-yellow-400  flex items-center justify-between relative ' 
        onClick={()=>{
            setFinishRidePanel(true)
        }}
        >
        <h5
                onClick={() => {
                    
                }}
                className='p-1 text-center w-[90%] absolute top-0'><i className="text-3xl text-gray-500 ri-arrow-up-wide-line"></i></h5>
            <h4 className='text-xl font-semibold'>4km away</h4>
            <button className=' bg-green-600 text-white font-semibold p-3 rounded-lg'>Finish Ride</button>
           
        </div>

        <div ref={FinishRidePanelRef}  className='fixed w-full h-screen z-10 bottom-0 px-3 py-10 pt-12 bg-white  translate-y-full'>
                <FinishRide setFinishRidePanel={setFinishRidePanel}  />
                
                    
            </div>

    </div>
    );
};

export default CaptainRiding;
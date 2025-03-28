import React from 'react';
import { Link } from 'react-router-dom'

const CaptainHome = () => {
    return (
        <div className='h-screen'>
            <div className='fixed p-3 top-0 flex  items-center justify-between w-screen'>
                <img className='w-16' src="https://heytaxi.pl/img/hejtaxi.png" alt="logo" />
                <Link to='/captains/logout' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                <i className="ri-logout-box-r-line"></i>
                </Link>
            </div>



            <div className='h-1/2'>
                <img className='h-full w-full object-cover' src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif" alt="map" />
            </div>
            <div className='h-1/2 p-4 '>
                

            </div>
        </div>
    );
};

export default CaptainHome;
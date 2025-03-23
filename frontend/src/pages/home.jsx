import React from 'react';

const Home = () => {
    return (
        <div>
            <div className='h-screen pt-8 flex justify-between flex-col w-full bg-blue-500'>
                <img className='w-10'  src="https://taxi-salzburg.at/wp-content/uploads/elementor/thumbs/heytaxi-p6itr3od93fep6b1ac97yhcwyycp7ed66033bjm9qo.png" alt="logo" />
                <div className='bg-red-100'>
                    <h2>Get Started with HeyTaxi</h2>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
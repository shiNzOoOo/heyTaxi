import React from 'react';








const LocationSearchPanel = ( props) => {

       

    // array of location 
    const locations = [
            "this ia a random location name",
            "this ia a random location name",
            "this ia a random location name",
            "this ia a random location name",

    ]
    return (
        <div className="location-search-panel">
            {
                locations.map(function(location , idx){
                    return <div key={idx} onClick={()=>{props.setVehiclePanel(true); props.setPanelOpen(false)
                    }}
                     className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
                    <h2 className='bg-[#eee] h-6 w-7 flex item-center justify-center rounded-full'><i className="ri-map-pin-fill"></i></h2>
                    <h4 className='font-medium'>{location}</h4>
                </div>
                })
  
            }


        </div>
    );
};

export default LocationSearchPanel;
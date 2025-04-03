import React from 'react';



//this is commented due to api is not working right know  to display further the uncommented code is used

const LocationSearchPanel = ( {suggestions, setVehiclePanel, setPanelOpen, setPickup, setDestination, activeField}) => {

       

    // array of location 
    const handleSuggestionClick = (suggestion) => {
        if (activeField === 'pickup') {
            setPickup(suggestion)
        } else if (activeField === 'destination') {
            setDestination(suggestion)
        }
        // setVehiclePanel(true)
        // setPanelOpen(false)
    }
    return (
        <div>
        {/* Display fetched suggestions */}
        {
            suggestions.description((elem, idx) => (
                <div key={idx} onClick={() => handleSuggestionClick(elem)} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
                    <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                    <h4 className='font-medium'>{elem}</h4>
                </div>
            ))
        }
    </div>
    );
};


// const LocationSearchPanel = ( props) => {

       

//     // array of location 
//     const locations = [
//             "this ia a random location name",
//             "this ia a random location name",
//             "this ia a random location name",
//             "this ia a random location name",

//     ]
//     return (
//         <div className="location-search-panel">
//             {
//                 locations.map(function(location , idx){
//                     return <div key={idx} onClick={()=>{props.setVehiclePanel(true); props.setPanelOpen(false)
//                     }}
//                      className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
//                     <h2 className='bg-[#eee] h-8 w-8 flex items-center justify-center rounded-full'><i className="ri-map-pin-fill"></i></h2>
//                     <h4 className='font-medium'>{location}</h4>
//                 </div>
//                 })
  
//             }


//         </div>
//     );
// };

export default LocationSearchPanel;
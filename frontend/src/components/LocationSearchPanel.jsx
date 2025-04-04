import React from 'react';

const LocationSearchPanel = ({ suggestions, setVehiclePanel, setPanelOpen, setPickup, setDestination, activeField}) => {
    const handleSuggestionClick = (suggestion) => {
        const locationText = suggestion.structured_formatting?.main_text || suggestion.description;
        
        if (activeField === 'pickup') {
            setPickup(locationText);
        } else if (activeField === 'destination') {
            setDestination(locationText);
        }
        
        setPanelOpen(false);
        
        // Only show vehicle panel if both pickup and destination are selected
        if (activeField === 'destination') {
            // setVehiclePanel(true);
        }
    }

    return (
        <div>
            {suggestions?.suggestions?.length > 0 && 
                suggestions.suggestions.map((suggestion, idx) => (
                    <div 
                        key={suggestion.place_id || idx} 
                        onClick={() => handleSuggestionClick(suggestion)} 
                        className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start cursor-pointer hover:border-gray-300'
                    >
                        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'>
                            <i className="ri-map-pin-fill"></i>
                        </h2>
                        <div className='font-medium'>
                            <h4>{suggestion.structured_formatting?.main_text || suggestion.description}</h4>
                            {suggestion.structured_formatting?.secondary_text && (
                                <p className='text-sm text-gray-500'>{suggestion.structured_formatting.secondary_text}</p>
                            )}
                        </div>
                    </div>
                ))
            }
            {(!suggestions?.suggestions || suggestions.suggestions.length === 0) && (
                <div className="p-4 text-gray-500">No suggestions available</div>
            )}
        </div>
    );
};

export default LocationSearchPanel;
const axios = require('axios');
const captainModel = require('../models/captain.model');
const { json } = require('express');

module.exports.getAddressCoordinate = async (address) => {
    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://api.olamaps.io/places/v1/geocode?address=${encodeURIComponent(address)}&api_key=${apiKey}`;
    
    
    try {
        const response = await axios.get(url);
        
        
        if (response.data.status === 'ok') {
            const location = response.data.geocodingResults[0].geometry.location;
            return {
                ltd: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        
        throw error;
    }
}

module.exports.getDistanceAndTime = async (origin , destination ) => {
    
    if(!origin || !destination){
        throw new Error('Origin and destination coordinates are required');
    }
    const apiKey = process.env.GOOGLE_MAPS_API;

    const urlo = `https://api.olamaps.io/places/v1/geocode?address=${encodeURIComponent(origin)}&api_key=${apiKey}`;
    const responseO = await axios.get(urlo);
    const locationo = responseO.data.geocodingResults[0].geometry.location;
    const oltd= locationo.lat
    const olng= locationo.lng

    const urld = `https://api.olamaps.io/places/v1/geocode?address=${encodeURIComponent(destination)}&api_key=${apiKey}`;
    const responsed = await axios.get(urld);
    const locationd = responsed.data.geocodingResults[0].geometry.location;
    const dltd= locationd.lat
    const dlng= locationd.lng




    // const url = `https://api.olamaps.io/routing/v1/distanceMatrix?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&api_key=${apiKey}`;
    const url = `https://api.olamaps.io/routing/v1/distanceMatrix?origins=${oltd}%20%2C${olng}&destinations=${dltd}%2C${dlng}&api_key=${apiKey}`;
    
    try {
        
        const response = await axios.get(url);
        if (response.data.status === 'SUCCESS') {
            
            if(response.data.rows[0].elements[0].status === 'ZERO_RESULTS'){
                throw new Error('No route found between the origin and destination');
            }
            
            return response.data.rows[ 0 ].elements[ 0 ];
    
        } else {
            
            throw new Error('Unable to fetch distance and time');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
    
}


module.exports.getAutoCompleteSuggestions = async (input) => {

    if (!input) {
        throw new Error('address is required');
    }
    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://api.olamaps.io/places/v1/autocomplete?input=${encodeURIComponent(input)}&api_key=${apiKey}`;
    
    try {
        const response = await axios.get(url);
        
        if (response.data.status === 'ok') {
            return response.data.predictions;
        } else {
            throw new Error('Unable to fetch suggestions');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports.getCaptainInTheRadius = async (ltd , lng , radius) => {

    

    if (!ltd || !lng || !radius) {
        throw new Error('ltd , lng and radius are required');
    }
  
    try {
        const captains = await captainModel.find({
            location: {
                $geoWithin: {
                    $centerSphere: [ [  ltd, lng ], radius / 6371  ] // radius in km
                }
            }
        });

        
        
        return captains;
    } catch (error) {
       
        throw error;
    }



}


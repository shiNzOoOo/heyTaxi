const mapService = require('../services/maps.service')
const {validationResult} = require('express-validator')

module.exports.getCoordinates = async(req , res , next) =>
{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors : errors.array() });
    }
    try{
        const { address } = req.query;
        
        const coordinates = await mapService.getAddressCoordinate(address);
        res.status(200).json({ coordinates });
    } catch(error){
        res.status(404).json({ Message : error.message });
    }
}

module.exports.getDistanceAndTime = async(req , res , next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors : errors.array() });
    }

    try
    {
        const { origin, destination } = req.query;
        
        const distanceAndTime = await mapService.getDistanceAndTime(origin, destination);
        res.status(200).json({ distanceAndTime });
    }
    catch(error){
        res.status(404).json({ Message : error.message });
    }

}

module.exports.getSuggestions = async(req , res , next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors : errors.array() });
    }
    try{
        const { input } = req.query;
        
        const suggestions = await mapService.getAutoCompleteSuggestions(input);
        res.status(200).json({ suggestions });
    }
    catch(error){
        res.status(404).json({ Message : error.message });
    }
}
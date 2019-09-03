// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (str, idx, arry) => {
    if(presets[idx]) {
        if  (str != 'GET' || str != 'POST') return [400]
        
        return [200]
    } else {
        return [404]
    }


    return // an array with 1 or 2 elements 
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;

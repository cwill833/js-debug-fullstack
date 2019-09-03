// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (str, idx, arry) => {
    if(idx >= 0 && idx <= 15) {
        switch(str){
            case 'GET':
                return [200, presets[idx]]
            case 'PUT':
                presets[idx] = arry
                return [200, arry]
            default:
                break
        }     
    } 
    else if(idx > 15 || idx < 0) {
       return [404]
   }
    else{
        return [400]
    }


     // an array with 1 or 2 elements 
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;

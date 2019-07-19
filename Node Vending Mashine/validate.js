"use strict"
const Parameters = require('./parameters.js');
const parameters = new Parameters();
module.exports = class Validate {
    validate(enter) {
        let list = parameters.coinList.concat(parameters.slotList);
        if (list.includes(enter)) {
            return true;
        }
        return false;
    }
    // Check if the parameter is a dollar or a cent
    isCoin(enter){
        if  (enter.charAt(0) === parameters.dollar || enter.substring(enter.length - 1, enter.length ) === parameters.cent){
            return true;
        }
        return false;
    }
}
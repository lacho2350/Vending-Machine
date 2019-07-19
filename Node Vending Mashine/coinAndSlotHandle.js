"use strict"
const Parameters = require('./parameters.js');
const parameters = new Parameters();
module.exports = class CoinHandle {
    coin(enter) {
        if (enter && enter.charAt(0) == parameters.dollar) {
            enter = enter.replace(parameters.dollar, parameters.empty);
            Number(enter);
            enter = enter*100;
            return enter;
        } else {
            enter = enter.substring(0, enter.length - 1);
            Number(enter);
            return enter;
        }
    }
    slot(enter) {
        let beverages = parameters.beverages;
        let beverage = Number(enter.replace(parameters.slot, parameters.empty));
        return [beverages[beverage], beverage];
    }
    updateSlot(number) {
        let beverages = parameters.beverages;
        beverages[number][2] = beverages[number][2] - 1;
        return beverages;
    }
}
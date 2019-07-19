"use strict"
const Parameters = require('./parameters.js');
const parameters = new Parameters();
const Messages = require('./messages.js');
const messages = new Messages();
const CoinOperations = require('./coinOperations.js');
const coinOperations = new CoinOperations();
module.exports = class Payment {
    payment(treat, coins, money) {
        // Checks if there is a treat in the slot
        if (treat[2] == 0) {
            return messages.emptySlot();
        } else if (treat[1] > money) {
            return messages.insufficientSum();
        } else {
           return this.change(treat, coins, money);
        }
    }
    change(treat, coins, money) {
        let coinsInMachine = parameters.coins;
        coinsInMachine = coinOperations.addAllCoinsToAvailable(coins, coinsInMachine);
        let change = coinOperations.generateChange(coinsInMachine, money - treat[1]);
        if (!change) {
            return messages.noChange();
        }
        parameters.money = money - treat[1];
        let result = coinOperations.formatResult(change, coinsInMachine);
        return result;

    }
}
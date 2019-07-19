"use strict"
const Parameters = require('./parameters.js');
const parameters = new Parameters();
module.exports = class Messages {
    welcome() {
        let start = '';
        let list = [];
        let lineList = [];
        list.push(parameters.welcomeFirst + "\n");
        list.push(parameters.welcomeSecond + "\n");
        for(let key in parameters.beverages) {
            if (key !==  '0') {
                list.push('Slot ' + key +' - ' + parameters.beverages[key][2] + ' x ' + parameters.beverages[key][0] + ' = ' + (parameters.beverages[key][1]/100).toFixed(2));
            }
        }
        list.push("");
        list.push(parameters.coinText + "\n");
        for(let key in parameters.coinList) {
            lineList.push(parameters.coinList[key] +' ');
        }
        lineList.join();
        list.push(lineList);
        list.push(parameters.instructionFirst + "\n");
        list.push(parameters.instructionSecond + "\n");
        start = list.join("\n");
        console.log(start);
    }
    invalidCoin() {
        console.log("invalid coin/slot");
    }
    money(money) {
        console.log("Tendered = " + (money/100).toFixed(2));
    }
    coins(coins, treat) {
        if (coins === this.emptySlot() || coins === this.insufficientSum() || coins == this.noChange()) {
            console.log(coins);
        } else {
            console.log();
            console.log("Enjoy");
            console.log();
            console.log("Item = " + treat[0]);
            console.log("Change = " + coins[0]);
        }
    }
    emptySlot() {
        return "This slot is empty";
    }
    insufficientSum() {
        return "Please insert more coins";
    }
    noChange() {
        return "We cannot return change, your money are returned. Please insert coins and select a slot";
    }
}
"use strict"
let rl = require("readline");  
let prompts = rl.createInterface(process.stdin, process.stdout); 
const Messages = require('./messages.js');
const messages = new Messages();
const CoinAndSlotHandle = require('./coinAndSlotHandle.js');
const coinAndSlotHandle = new CoinAndSlotHandle();
const Validate = require('./validate.js');
const validate = new Validate();
const Payment = require('./payment.js');
const payment = new Payment();
const Parameters = require('./parameters.js');
const parameters = new Parameters();
class Start {
    constructor() {
        messages.welcome();
    }
    input() {
        prompts.question("Enter=" , function(enter) {
            enter = enter.toLowerCase();
            if ( !validate.validate(enter)) {
                start.validate();
            } else if (validate.isCoin(enter)) {
                start.coinInut(enter);
            } else {
                start.slotInput(enter);
            }
        });
    }
    validate() {
        messages.invalidCoin();
        start.input();
    }
    coinInut(enter) {
        let result = coinAndSlotHandle.coin(enter);
        parameters.coinsCurrent = result;
        result = Number(result);
        parameters.money += result;
        messages.money(parameters.money);
        start.input();
    }
    slotInput(enter) {
        let treat = coinAndSlotHandle.slot(enter);
        let response = payment.payment(treat[0], parameters.coinsCurrent, parameters.money);
        parameters.coins = response[1];
        parameters.money = 0;
        parameters.coinsCurrent = 0;
        let beverages = coinAndSlotHandle.updateSlot(treat[1]);
        parameters.beverages = beverages;
        messages.coins(response, treat[0]);
        start.input();
    }
}

let start = new Start();
start.input();
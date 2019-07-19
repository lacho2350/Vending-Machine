"use strict"
module.exports = class Parameters {
    constructor() {
        this._welcomeFirst = "Welcome to the Vending Machine simulator!";
        this._welcomeSecond = "The vending machine contains the following products";
        this._coinText = "The vending machine accepts the following coins";
        this._instructionFirst = "Please insert coins one at a time and pressing enter after each, e.g. $2 or 5c";
        this._instructionSecond = "To vend from a slot type slot command, e.g. slot 1";
        this._coinList = ["$2", "$1", "50c", "20c", "10c", "5c"];
        this._slotList = ["slot 1", "slot 2", "slot 3", "slot 4", "slot 5", "slot 6", "slot 7", "slot 8", "slot 9", "slot 10", "slot 11", "slot 12", "slot 13", "slot 14", "slot 15", "slot 16", "slot 17"];
        this._beverages  = [[], ["Snickers" , 105, 3], ["Bounty" , 100, 0], ["Mars" , 125, 1], ["Twix" , 200, 2], ["Wispa" , 180, 2], ["Twirl " , 75, 2], ["Yorkie" , 180, 3], ["Aero" , 180, 0], ["Double Decker" , 75, 3], ["Galaxy" , 180, 2], ["Crunchie" , 180, 3], ["Picnic" , 125, 2], ["Kit Kat" , 200, 2], ["Lion Bar" , 180, 3], ["Oreo" , 200, 2], ["Toffee Crisp" , 200, 1], ["Boost" , 150, 1]];
        this._coins = {'200':2, '100':4, '50':2, '20':3, '10':4, '5':1};
        this._money = 0;
        this._coinsCurrent = {};
        this._dollar = "$";
        this._cent = "c";
        this._slot = "slot ";
        this._empty = "";
    }
    get welcomeFirst() {
        return this._welcomeFirst;
    }
    get welcomeSecond() {
        return this._welcomeSecond;
    }
    get coinText() {
        return this._coinText;
    }
    get instructionFirst() {
        return this._instructionFirst;
    }
    get instructionSecond() {
        return this._instructionSecond;
    }
    get coinList() {
        return this._coinList;
    }
    get slotList() {
        return this._slotList;
    }
    get beverages() {
        return this._beverages;
    }
    set beverages(beverages) {
        this._beverages = beverages;
    }
    get coins() {
        return this._coins;
    }
    set coins(coins) {
        this._coins = coins;
    }
    get money() {
        return this._money;
    }
    set money(money) {
        return this._money = money;
    }
    get coinsCurrent() {
        return this._coinsCurrent;
    }
    set coinsCurrent(result) {
        if (result == 0) {
            this._coinsCurrent = {};
        } else if ( this._coinsCurrent[result] ) {
            this._coinsCurrent[result] += 1;
        } else {
            this._coinsCurrent[result] = 1;
        }
    }
    get dollar() {
        return this._dollar;
    }
    get cent() {
        return this._cent;
    }
    get slot() {
        return this._slot;
    }
    get empty() {
        return this._empty;
    }
}

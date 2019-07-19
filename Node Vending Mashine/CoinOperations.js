"use strict"
const Parameters = require('./parameters.js');
const parameters = new Parameters();
module.exports = class CoinOperations {
    addAllCoinsToAvailable(credit, coins) {
        for(let key in credit) {
            coins[key] = coins[key] + credit[key];
        }
        return coins;
    }
    generateChange(coins, coinsToReturnValue) {
        var change = {}; 
        var coinFound = true;
        // Do while the value of the coins in change is the same as in the parameter "coinsToReturnValue"
        // The second stop condition is if no coins that are added during un iteration
        while(coinsToReturnValue > 0 && coinFound) {
            coinFound = false;
            var nextCoin = 0;
            // We get the biggest coin that can be returned as part of the change
            for(var key in coins) {
                key = Number(key);
                if (nextCoin <= key && coins[key] > 0 && key <= coinsToReturnValue) {
                    nextCoin = key;
                    coinFound = true;
                }
            }
            if (nextCoin !== 0) {
                change = this.addCoinToChange(coins, nextCoin, change );
                coinsToReturnValue -= nextCoin;
            }
        }
        if (coinFound) {
            return change;
        }
        return false;
    }
    addCoinToChange(coins, nextCoin, change ) {
        coins[nextCoin]--;
        if ( change[nextCoin] ) {
            change[nextCoin] += 1;
        } else {
            change[nextCoin] = 1;
        }
        return change;
    }

    formatResult(change, coins) {
        let result = parameters.empty;
        for(let key in change) {
            if (key>100) {
                result = parameters.dollar + key + ', ' + result;
            }
            else {
                result = key + parameters.cent +', ' + result;
            }
        }
        return [result.substring(0, result.length - 2), coins];
    }
}
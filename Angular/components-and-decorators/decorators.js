/* tslint:disable */
//noispection JSUnusedLocalSymbols
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @ts-ignore
function Log(target, key, descriptor) {
    var old = target[key];
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("function " + key + " called with args " + args);
        var result = old.apply(this, args);
        console.log("result of function " + key + " is " + result);
    };
}
function youBankrupt(target, key, descriptor) {
    var old = target[key];
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("You don't have enough money!");
        return;
    };
}
function buyProduct(target, key, descriptor) {
    var old = target[key];
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var result = old.apply(this, args);
        // wallet - money
        console.log('Check your product delivery time in inventory!');
        return result;
    };
}
function checkMoneyAmountOnWallet(moneyOnWallet) {
    switch (moneyOnWallet) {
        case 0: {
            return youBankrupt;
        }
        case moneyOnWallet > 0: {
            return buyProduct;
        }
    }
}
var Example = /** @class */ (function () {
    function Example() {
    }
    Example.prototype.method = function () {
        return 1;
    };
    Example.prototype.buyBitcoins = function () {
        // send api
    };
    Example.prototype.buyDoggyCoin = function () {
        // send api
    };
    __decorate([
        Log
    ], Example.prototype, "method", null);
    __decorate([
        checkMoneyAmountOnWallet(300)
    ], Example.prototype, "buyBitcoins", null);
    __decorate([
        checkMoneyAmountOnWallet(0)
    ], Example.prototype, "buyDoggyCoin", null);
    return Example;
}());
// new Example().method()
new Example().buyBitcoins();
new Example().buyDoggyCoin();

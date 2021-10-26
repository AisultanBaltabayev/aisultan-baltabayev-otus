/* tslint:disable */
//noispection JSUnusedLocalSymbols

// @ts-ignore
function Log(target, key, descriptor) {
    const old = target[key];
    descriptor.value = function (...args) {
        console.log(`function ${key} called with args ${args}`)
        const result = old.apply(this, args)
        console.log(`result of function ${key} is ${result}`)
    }
}

function youBankrupt(target, key, descriptor) {
    const old = target[key];
    descriptor.value = function (...args) {
        console.log("You don't have enough money!")
        return
    }
}

function buyProduct(target, key, descriptor) {
    const old = target[key];
    descriptor.value = function (...args) {
        const result = old.apply(this, args)
        // wallet - money
        console.log('Check your product delivery time in inventory!')
        return result
    }
}

function checkMoneyAmountOnWallet (moneyOnWallet) {
    switch (moneyOnWallet) {
        case 0: {
            return youBankrupt
        }
        case moneyOnWallet > 0: {
            return buyProduct
        }
    }
}

class Example {
    @Log
    method() {
        return 1
    }
    @checkMoneyAmountOnWallet(300)
    buyBitcoins() {
        // send api
    }
    @checkMoneyAmountOnWallet(0)
    buyDoggyCoin() {
        // send api
    }
}

// new Example().method()
new Example().buyBitcoins()
new Example().buyDoggyCoin()
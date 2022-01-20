const fn1 = () => {
    console.log('fn1')
    return Promise.resolve(1)
}

const fn2 = () => new Promise(resolve => {
    console.log('fn2')
    setTimeout(() => resolve(2), 1000)
})

async function promiseReduce(asyncFunctions, reduce, initialValue) {
    let result = initialValue;

    for (let i = 0; i < asyncFunctions.length; i++) {
        let asyncFuncRes = await asyncFunctions[i]();
        result = reduce(result, asyncFuncRes);
    }

    return result;
}

promiseReduce(
    [fn1, fn2],
    function (memo, value) {
        console.log("reduce");
        return memo * value;
    },
    1
)?.then((response) => console.log(response));
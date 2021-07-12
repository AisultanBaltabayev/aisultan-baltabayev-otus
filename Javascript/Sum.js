const Sum = (num) => {
    const isNumber = (arg) => (arg && typeof arg === "number") || arg === 0;

    const addRecursiveOrResult = (num2) => {
        if (isNumber(num2)) {
            return Sum(num + num2);
        } else {
            return num;
        }
    };

    if (isNumber(num)) {
        return addRecursiveOrResult;
    }
};
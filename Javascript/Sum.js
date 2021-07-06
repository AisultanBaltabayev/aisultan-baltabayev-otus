let result = 0;
export const Sum = (num) => {
    if (!num) {
        return result
    }
    // добавил проверку на число, так как в задаче
    // было описано именно про сумму и так как
    // должен возвращать результат только при undefined,
    // но не говорится, что делать с другими кейсами
    if (typeof num === 'number') {
        result += num
    }
    return Sum
}
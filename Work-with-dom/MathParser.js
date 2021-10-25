let expression = '2+2*-5'
const validTokens = ['1','2','3','4','5','6','7','8','9','0','+','-', '(', ')']

// TODO: возможно превращение строки в массив требует производительности (узнать это)
//  и из-за этого возможно стоит сразу проходится по строке через цикл
const arrayOfExpressionEl = expression.split('')
const list = []
const brackets = []

arrayOfExpressionEl.forEach(el => {
    const isValid = validTokens.includes(el)
    if (isValid) {
        if (el === '(') {
            brackets.push(el)
        }
        if (el === ')') {
            brackets.pop()
        }
        list.push(el)
    }
})

console.log('list: ', brackets.length === 0 ? list : 'error: your expression has extra brackets - ', JSON.stringify(brackets))
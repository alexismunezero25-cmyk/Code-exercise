function calculate(val1,val2, operator) {
    const num1 = Number(val1);
    const num2 = Number(val2);
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if(num2 === 0){
                return "cannot divide by zero";
            }
            return num1 / num2;
        default:
            return "Invalid operator";
    }
}

console.log(calculate("21", "3", "+"));
console.log(calculate("21", "3", "-"));
console.log(calculate("21", "3", "*"));
console.log(calculate("21", "3", "/"));
console.log(calculate("21", "0", "/"));
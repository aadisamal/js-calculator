// input: num1 & num2
let number1 = "pizza"
let number2 = "donut"
let operator = '+'

if ( Number.isInteger(number1) && Number.isInteger(number2)) {
// process calculation
    switch(operator){
        case '+' :
            result = number1 + number2    
            break;
        case '-' :
            result = number1 - number2
            break;
        case '*' :
            result = number1 * number2
            break;
        case '%' :
            result = number1 % number2
            break;
        default:
            result = "invalid operator"
        
    }
    console.log(result)
}
else {
    console.log("not a number")
}



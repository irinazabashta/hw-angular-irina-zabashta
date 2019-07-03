var typeNumber = 37;
var typeString = 'lorem';
var typeBoolean = true;
var typeNull = null;
var typeUndefined = undefined;
// factorial
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
var factorialResult = factorial(5);
console.log("factorial -> " + factorialResult);
// fibonacci
function fibonacci(n) {
    var i;
    var fibonacciArray = new Array(n);
    switch (n) {
        case 1:
            fibonacciArray = [1];
            break;
        case 2:
            fibonacciArray = [1, 1];
            break;
        default:
            fibonacciArray[0] = fibonacciArray[1] = 1;
            for (i = 2; i < n; i++) {
                fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
            }
            break;
    }
    return fibonacciArray;
}
var fibonacciResult = fibonacci(7);
console.log("fibonacci -> " + fibonacciResult);

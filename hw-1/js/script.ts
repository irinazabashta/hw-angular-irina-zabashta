let typeNumber: number = 37;
let typeString: string = 'lorem';
let typeBoolean: boolean = true;
let typeNull: null = null;
let typeUndefined: undefined = undefined;

// factorial

function factorial(n:number):number {
    if(n <= 0) {
        console.log('Wrong number');
        return 0;
    }

    return (n != 1) ? n * factorial(n - 1) : 1;
}
const factorialResult = factorial(5);
console.log(`factorial -> ${factorialResult}`);

// fibonacci

function fibonacci (n:number):Array<number> {
    if(n <= 0) {
        console.log('Wrong number');
        return [];
    }

    let fibonacciArray: number[] = new Array(n);

    switch (n) {
        case 1:
            fibonacciArray = [1];
            break;
        case 2:
            fibonacciArray = [1, 1];
            break;
        default:
            fibonacciArray[0] = fibonacciArray[1] = 1;
            for (let i:number = 2; i < n; i++) {
                fibonacciArray[i] = fibonacciArray[i-1] + fibonacciArray[i-2];
            }
            break;
    }

    return fibonacciArray;
}
const fibonacciResult = fibonacci(7);
console.log(`fibonacci -> ${fibonacciResult}`);
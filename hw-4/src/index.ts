// Домашнее задание:

import {Observable} from "rxjs";
const { Observable: { create }, of, interval } = require('rxjs');
const { reduce, bufferCount, bufferTime } = require('rxjs/operators');

// 1. Имплементировать функцилнал range используя функцию create.
const start: number = 1, count:number = 10;
const publisherRange = create((observable: any) => {
    for(let i:number = start; i<=count; i++) {
        observable.next(i);
    }
});
const subscriber1 = publisherRange.subscribe(
    (val:number) => {
        console.log(`First task -> ${val}`);
    }
);

// 2. Имплементировать функционал interval используя функцию create.
const period:number = 1000;
const publisherInterval = create((observable: any) => {
    let i:number = 0;
    const timeInterval = setInterval(() => {
        observable.next(i);
        i++;
    }, period);
    return () => clearInterval(timeInterval);
});
const subscriber2 = publisherInterval.subscribe(
    (val:number) => {
        console.log(`Second task -> ${val}`);
    }
);
setTimeout(() => {
    subscriber2.unsubscribe();
}, period*10);

// 3. Используя тольк reduce иммплементировать функционал filter.
const sourceFilter = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
const publisherFilter = sourceFilter.pipe(reduce((acc: number, val: number) => {
    if(val%2 === 0){
        console.log(`Third task -> ${val}`);
    }
    return acc += val;
}, 0));
const subscribe3 = publisherFilter.subscribe(
    (val: number) => {
        console.log(`Sum in third task: ${val}`);
    }
);

// 4. Дан обзервабле interval - 1 tick in 50 msec -> выдавать данные либо 1 раз в 333 сек или же когда накапливается 7 элементов.
//emit value in sequence every 1 second
const sourceBuffer = interval(500);
const bufferOutput = sourceBuffer
    .pipe(bufferCount(7))
    .pipe(bufferTime(3000));
const subscribe4 = bufferOutput.subscribe(
    (val: number) => {
        console.log(`Fourth task -> ${val}`);
    }
);
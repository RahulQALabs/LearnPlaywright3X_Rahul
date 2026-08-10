function makeCounter(start = 0) {
    let count = start;

    return {
        increment() { count++; },
        decrement() { count--; },
        get() { count; }
    };
}

let counter = makeCounter(0);
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.get());
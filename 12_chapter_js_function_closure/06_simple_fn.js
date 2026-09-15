function makeLimiter(limit) {

    let call = 0;
    function check() {
        call++;
        return call <= limit;
    }
    return check;
}

let limiter=makeLimiter(3);
console.log(limiter());
console.log(limiter());
console.log(limiter());
console.log(limiter());
console.log(limiter());
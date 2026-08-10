function maxRetryTracker(max){
     let attempts=0;
     function tryAgain(testCaseName){
        attempts++;
        if(attempts>max){
            return `${testCaseName} exceeded max retries (${max})`; 
        }
        return `Attempt ${attempts}/${max} for ${testCaseName}`;
     };
     return tryAgain;
}

let runTCRetry=maxRetryTracker(3);
console.log(runTCRetry("Login"));
console.log(runTCRetry("Login"));
console.log(runTCRetry("Login"));
console.log(runTCRetry("Login"));
console.log(runTCRetry("Login"));
console.log(runTCRetry("Login"));

//Way 1 - Normal Function
function validateStatusCode(status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
}


//Way 2 -Function as expression
const validateStatusCode_Exp = function (status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
}

//Way 3 - Arrow Function
const validateStatusCode_Exp1 = (status) => {
    if (status >= 200 && status <= 300)
        console.log("Request is fine!");
}




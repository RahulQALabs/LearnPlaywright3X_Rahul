// 2. Question

let environment = "Staging";
let baseUrl = environment === "prod"
    ? "https://api.example.com" : "https://staging.com";

console.log("Url is : " + baseUrl);
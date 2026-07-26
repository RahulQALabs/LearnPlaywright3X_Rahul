// 4. Question
let responseTime = 850;
let sla = 1000;
let slaStatus = responseTime <= sla ? "Within SLA" : "SLA Breached";
console.log(`Response: ${responseTime}-${slaStatus}`);  

// Template Literal
console.log(`What is the SLA Time -----${sla}`);
//Use double quote
let a = { status: "pass" };
console.log(a.status);
console.log(a["status"]);


//Use single char
let a1 = { status: 'pass' };
console.log(a1.status);
console.log(a['status']);

//Keys are case sensitive
let a2 = { status: "pass", Status: "fail" };
console.log(a2["status"]);
console.log(a2["Status"]);

console.log(a["Status"]);     //undefined because for a object doesn't declare 'Status'


let b = a;           // b copies the reference, not the object
b.status = "fail";
console.log(a.status);
console.log(b.status);


let c = { status: "pass" };
let d = { status: "pass" };
console.log(c === d);

const t_json = {
    "name": "Rahul",                      //this is json as key in ""
    "age": 30
}
console.log(t_json);

const t_obj = {
    name: "Rahul",                      //this is json as key is not in ""
    age: 30
}
console.log(t_obj);
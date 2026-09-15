const user = {
    name: "rahul",
    age: 30,
    email: "rg@gmail.com"
};

console.log(user);

//Accessing properties
console.log(user.name);
console.log(user["age"]);

//Adding/Modifying properties
user.city = "NYC";
user.age = 30;

console.log(user);
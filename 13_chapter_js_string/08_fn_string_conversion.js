
//String Conversion

//To String
(200).toString();       //"200"
true.toString();        //true

Number("42");    //42

parseInt("42px");          //42
parseFloat("3.14rem");   //3.14


let str="hello";   // THis is immutable in nature
console.log(str);
str[0]="H";
console.log(str);

let upper=str.toUpperCase();
console.log(str);
console.log(upper);
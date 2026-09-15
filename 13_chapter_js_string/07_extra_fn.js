let url = "https://app.vwo.con?app=pramod";
console.log(url.replace(/app/g, "qa"))


//Refer site for regex = regex101.com

//Splitting & Joining
"pass,fail,skip".split(",");    //["Pass","Fail","Skip"]
"hello".split("");              //["h","e","l","l","0"]


//Template literal (joining with format)
let parts=["2024","03","07"];
let date=parts.join("-");
console.log(date);

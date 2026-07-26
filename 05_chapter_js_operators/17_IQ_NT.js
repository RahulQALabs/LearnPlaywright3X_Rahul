
//>=40 -- Very HOT, >=30 ---HOT, >=20 --- Warm, >=10 --- Cool else Cold

let temprature = 25;
let condition = temprature >= 40 ? "Very Hot" :
    temprature >= 30 ? "Hot" :
        temprature >= 20 ? "Warm" :
            temprature >= 10 ? "Cool" : "Cold";

console.log(`Temprature is --> ${temprature} which is lying in = ${condition}`);
console.log("Teperature :", temprature, "| Feel:", condition);
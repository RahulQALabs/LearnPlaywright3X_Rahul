// map,filter,reduce

//every,some
[80, 90, 95].every(s => s > 70);    //true
[80, 60, 95].every(s => s > 70);    //false

//some - AT least must pass
[80, 60, 95].every(s => s < 70);   //true
[80, 90, 95].every(s => s < 70);   //false
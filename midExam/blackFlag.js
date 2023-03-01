function blackFlag(arr){
    let days = Number(arr.shift());
    let dailyPlunder = Number(arr.shift());
    let expectedPlunder = Number(arr.shift());
    let plunderGained = 0;
    for (let i = 1 ; i <= days; i ++){
        plunderGained += dailyPlunder;
        if (i % 3 == 0){
            plunderGained += dailyPlunder * 0.5
        }
        if (i % 5 == 0){
            plunderGained = plunderGained * 0.7
        }
    }

    if (plunderGained >= expectedPlunder){
        console.log(`Ahoy! ${(plunderGained).toFixed(2)} plunder gained.`)

    }
    else{
        console.log(`Collected only ${((plunderGained  / expectedPlunder) * 100).toFixed(2)}% of the plunder.`)
    }

}

blackFlag(["10",
"20",
"380"])


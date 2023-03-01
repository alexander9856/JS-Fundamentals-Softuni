function guineaPig(arr) {
    let foodQuantityIng = Number(arr.shift() * 1000);
    let hayQuantityIng = Number(arr.shift() * 1000);
    let coverQuantityIng = Number(arr.shift() * 1000);
    let kgWeightIng = Number(arr.shift() * 1000);

    for (let i = 1; i <= 30; i++) {
        foodQuantityIng -= 300;
        if (i % 2 == 0) {
            hayQuantityIng -= foodQuantityIng * 0.05
        }
        if (i % 3 == 0) {
            coverQuantityIng -= kgWeightIng * 1 / 3
        }
    }
    if (foodQuantityIng >= 0 && hayQuantityIng >= 0 && coverQuantityIng >= 0) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(foodQuantityIng / 1000).toFixed(2)}, Hay: ${(hayQuantityIng / 1000).toFixed(2)}, Cover: ${(coverQuantityIng / 1000).toFixed(2)}.`)
        
    }
    else{
        console.log('Merry must go to the pet store!')
    }


}

guineaPig(["1", 
"1.5", 
"3", 
"1.5"
])

function numbers(str) {
    arrNums = str.split(' ').map(Number);
    let sum = 0;

    for(let i of arrNums){
        sum += i
    }
    
    let average = sum / arrNums.length;
    let newArr = [];

    for (let j of arrNums){
        if (j > average){
            newArr.push(j)
        }    
    }
    newArr.sort((a,b) => b - a)
    newArr.splice(5, newArr.length)

    if (newArr.length !== 0){
        console.log(newArr.join(' '))
    }
    
    else{
        console.log('No')
    }

}

numbers('-1 -2 -3 -4 -5 -6')
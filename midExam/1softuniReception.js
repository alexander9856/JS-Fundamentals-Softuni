function softuniReception(arr){
    let numArr = arr.map(Number)
    let numbersOfStudents = numArr.pop()
    let employeeEfficiency = numArr.reduce((a,b)=> a+b,0);
    let hours = 0
    
    while(numbersOfStudents > 0){
        hours++
        if (hours % 4 == 0){
            continue
        }
        numbersOfStudents -= employeeEfficiency
        
        
    }
    console.log(`Time needed: ${hours}h.`)

}

softuniReception(['1','1','1','9'])
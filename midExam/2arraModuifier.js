function arrModifier(arr) {
    let valuesArr = arr.shift().split(' ').map(Number);

    while (arr[0] !== 'end') {
        let command = arr.shift().split(' ')
        if (command[0] == 'swap') {

            firstIndex = Number(command[1]);
            secondIndex = Number(command[2]);
            // valuesArr[firstIndex] = valuesArr.splice(secondIndex, 1, valuesArr[firstIndex])[0];
            [valuesArr[firstIndex], valuesArr[secondIndex]] = [valuesArr[secondIndex], valuesArr[firstIndex]];
        }

        else if (command[0] == 'multiply') {
            firstIndex = Number(command[1]);
            secondIndex = Number(command[2]);
            valuesArr[firstIndex] = valuesArr[firstIndex] * valuesArr[secondIndex];

        }

        else if (command[0] == 'decrease') {
            for (let i in valuesArr){
                valuesArr[i] -= 1
            }
        }

    }
    console.log(valuesArr.join(', '))
}

arrModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]
  
  
)
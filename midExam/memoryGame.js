function solve(input) {
    let sequence = input.shift().split(' ');
    let counter = 0
    while (sequence.length > 1 && input[0] !== 'end') {
        // if(input[0] == 'end'){
        //     break
        // }

        let targets = input[0].split(' ')

        let target1Index = Number(targets[0]);
        let target2Index = Number(targets[1]);

        input.splice(0, 1)

        let target1Value = sequence[target1Index];
        let target2Value = sequence[target2Index]


        counter++

        if (target1Index < 0 || target1Index >= sequence.length ||
            target2Index < 0 || target2Index >= sequence.length ||
            target1Index == target2Index) {

            console.log('Invalid input! Adding additional elements to the board');
            let symbol = `-${counter}a`

            sequence.splice(Math.trunc(sequence.length / 2), 0, symbol, symbol)
        }

        else if (target1Value === target2Value) {
            sequence.splice(target1Index, 1)
            target2Index = sequence.indexOf(target2Value)
            sequence.splice(target2Index, 1)
            console.log(`Congrats! You have found matching elements - ${target1Value}!`)

            if (sequence.length == 0 || sequence.length == 1) {
                console.log(`You have won in ${counter} turns!`)
                break
            }

        }

        else if (target1Value !== target2Value) {
            console.log('Try again!')
        }

    }

    if (sequence.length >= 2) {
        console.log("Sorry you lose :(")
        console.log(sequence.join(' '))
    }



}
solve([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
]



)
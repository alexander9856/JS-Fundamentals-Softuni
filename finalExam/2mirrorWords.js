function mirrorWords(arr) {

    let str = arr.toString()
    let pattern = /([@|#])(?<first>[A-Za-z]{3,})\1\1(?<second>[A-Za-z]{3,})/gm

    let regex = pattern.exec(str)
    let array = []
    let countPairs = 0
    while (regex) {
        countPairs++
        let { first, second } = regex.groups
        if (first == second.split('').reverse().join('')) {
            array.push(`${first} <=> ${second}`)
            
        }
        regex = pattern.exec(str)
    }

    if (countPairs == 0){
        console.log('No word pairs found!')
    }
    else{
    console.log(`${countPairs} word pairs found!`)
    }
    if (array.length == 0) {
        console.log('No mirror words!')
    }
    else{
        console.log('The mirror words are:')
        console.log(array.join(', '))
    }

}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]
)
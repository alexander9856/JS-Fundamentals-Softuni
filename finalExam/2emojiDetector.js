function emojiDetector(arr) {
    let str = arr.toString()
    let pattern = /(\:{2}|\*{2})(?<name>[A-Z][a-z]{2,})\1/g
    let digitsPattern = /[\d]/gm

    let digitMatches = str.match(digitsPattern);
    let coolSum = digitMatches.map(Number).reduce((a, b) => a * b);
    console.log(`Cool threshold: ${coolSum}`)

    let counterEmojis = 0
    let regex = pattern.exec(str);
    let coolOnes = [];
    while (regex) {
        counterEmojis++
        let emoji = regex.groups['name']
        let sumAscii = 0

        for (let i of emoji) {
            sumAscii += i.charCodeAt(0)
        }

        if (sumAscii >= coolSum){
            coolOnes.push(regex[0])
        }

        regex = pattern.exec(str)

    }
    console.log(`${counterEmojis} emojis found in the text. The cool ones are:`)
    if (coolOnes.length > 0){
        for(let i of coolOnes){
            console.log(i)
        }
    }




}

emojiDetector((["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]))
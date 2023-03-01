function thePianist(arr) {
    let numberOfItems = Number(arr.shift())

    let array = []

    for (let i = 1; i <= numberOfItems; i++) {
        let chedeuver = arr.shift().split('|')
        let object = { piece: chedeuver[0], composer: chedeuver[1], key: chedeuver[2] }

        array.push(object)
    }

    for (let i of arr) {
        if (i == 'Stop') {
            break
        }
        let tokens = i.split('|');
        let command = tokens[0];
        let piece = tokens[1];
        let obj = {}

        if (command == 'Add') {
            let findPiece = array.find((o) => o.piece == piece)
            if (!findPiece) {
                obj.piece = piece
                obj.composer = tokens[2]
                obj.key = tokens[3]
                array.push(obj)
                console.log(`${piece} by ${tokens[2]} in ${tokens[3]} added to the collection!`)
            }
            else {
                console.log(`${piece} is already in the collection!`)
            }
        }
        else if (command == 'Remove') {
            let findPiece = array.find((o) => o.piece == piece)
            let index = array.indexOf(findPiece)
            if (findPiece) {
                array.splice(index, 1)
                console.log(`Successfully removed ${piece}!`)
            }
            else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        }
        else if (command == 'ChangeKey') {
            let newKey = tokens[2]
            let findPiece = array.find((o) => o.piece == piece)
            if (findPiece) {
                findPiece.key = newKey
                console.log(`Changed the key of ${piece} to ${newKey}!`)
            }
            else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        }
    }


    array.forEach(element => 
    console.log(`${element.piece} -> Composer: ${element.composer}, Key: ${element.key}`))


}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]
)
function theImitationGame(arr) {
    let encryptedMessage = arr.shift().split('')


    for (let i of arr) {
        let command = i.split('|');
        let currentCommand = command[0]
        if (i == 'Decode') {
            break
        }

        if (currentCommand == "ChangeAll") {
            let tokens = i.split('|')
            let letterToReplace = tokens[1];
            let replacingLetter = tokens[2];
            for (let b of encryptedMessage) {
                if (b == letterToReplace) {
                    if (b == letterToReplace) {
                        let index = encryptedMessage.indexOf(b)
                        encryptedMessage.splice(index, 1, replacingLetter)
                    }
                }
            }
        }

        if (currentCommand == 'Insert') {
            let tokens = i.split('|')
            let index = tokens[1];
            let letterToPlace = tokens[2];

            encryptedMessage.splice(index, 0, letterToPlace)


        }

        if (currentCommand == 'Move') {
            let tokens = i.split('|')
            let letters = tokens[1];

            let message = encryptedMessage.join('');
            let firstPart = message.substring(0, letters);
            let secondPart = message.substring(letters);

            message = secondPart + firstPart;
            encryptedMessage = message.split('')
        }
    }

    let strMessage = encryptedMessage.join('')
    console.log(`The decrypted message is: ${strMessage}`)


}
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]

)


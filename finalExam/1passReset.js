function passReset(arr) {
    arr.pop();
    let encryptedMsg = arr.shift();
    let newMsg = ''
    for (let i of arr) {
        let tokens = i.split(' ');
        let command = tokens[0];
        if (command == 'TakeOdd') {
            for (let i in encryptedMsg) {
                if (i % 2 !== 0) {
                    newMsg += encryptedMsg[i]
                }
            }
            encryptedMsg = newMsg
            console.log(encryptedMsg)
        }
        else if (command == 'Cut') {
            let index = Number(tokens[1]);
            let length = Number(tokens[2]);
            let firstPart = encryptedMsg.substring(0, index)
            let secondPart = encryptedMsg.substring(index + length, encryptedMsg.length)
            encryptedMsg = firstPart + secondPart
            console.log(encryptedMsg)

        }
        else if (command == 'Substitute') {
            let substr = tokens[1];
            let strToReplace = tokens[2];
            if (encryptedMsg.includes(substr)) {
                while(encryptedMsg.includes(substr)){
                    encryptedMsg = encryptedMsg.replace(substr, strToReplace)
                }
                console.log(encryptedMsg)
            }
            else {
                console.log('Nothing to replace!')
            }
        }
    }
    console.log(`Your password is: ${encryptedMsg}`)


}

passReset((["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])


)
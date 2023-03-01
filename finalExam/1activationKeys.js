function activationKeys(arr) {
    let encryptedMsg = arr.shift();
    arr.pop();
    for (let i of arr) {
        let tokens = i.split('>>>');
        let command = tokens[0];
        if (command == 'Contains') {
            let substring = tokens[1];
            if (encryptedMsg.includes(substring)) {
                console.log(`${encryptedMsg} contains ${substring}`)
            }
            else {
                console.log("Substring not found!")
            }
        }
        else if (command == 'Flip') {
            let type = tokens[1];
            let startIndex = tokens[2];
            let endIndex = tokens[3];

            let firstPart = encryptedMsg.substring(0, startIndex);
            let changed = encryptedMsg.substring(startIndex, endIndex);
            let lastPart = encryptedMsg.substring(endIndex, encryptedMsg.length);
            if (type == 'Upper') {
                for (let i of changed) {
                    changed = changed.replace(i, i.toUpperCase())
                }
                encryptedMsg = firstPart + changed + lastPart
                console.log(encryptedMsg)
            }
            else if (type == 'Lower') {
                for (let i of changed) {
                    changed = changed.replace(i, i.toLowerCase())
                }
                encryptedMsg = firstPart + changed + lastPart
                console.log(encryptedMsg)
            }

        }
        else if (command == 'Slice'){
            let startIndex = tokens[1];
            let endIndex = tokens[2];
            let first = encryptedMsg.substring(0,startIndex);
            let second = encryptedMsg.substring(endIndex, encryptedMsg.length);
            encryptedMsg = first + second
            console.log(encryptedMsg)
        }

    }
    console.log(`Your activation key is: ${encryptedMsg}`)


}
activationKeys(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])

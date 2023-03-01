function secretChat(arr) {
    let message = arr.shift()
    arr.pop()

    for (let i of arr) {
        let tokens = i.split(':|:');
        let command = tokens[0];

        if (command == 'InsertSpace') {
            message = message.substring(0, tokens[1]) + ' ' + message.substring(tokens[1], message.length)
            console.log(message)
        }
        else if (command == 'Reverse'){
            if (message.includes(tokens[1])){
                let index = message.indexOf(tokens[1])
                let firstPart = message.substring(0,index)  
                let secIndex = firstPart.length + tokens[1].length
                let secondPart = message.substring(secIndex, message.length)
                message = firstPart + secondPart + tokens[1].split('').reverse().join('')
                console.log(message)
            
            }
            else{
                console.log('error')
            }
        }
        else if (command == 'ChangeAll'){
            if (message.includes(tokens[1])){
                while(message.includes(tokens[1])){
                    message = message.replace(tokens[1], tokens[2])
                    
                    
                }
            }
            console.log(message)
        }

    }

    console.log(`You have a new text message: ${message}`)



}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]
)
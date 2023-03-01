function shoppingListProblem(arr) {
    let shoppingList = arr.shift().split('!');
    let command = arr.shift()
    while (command != 'Go Shopping!') {
        let commandList = command.split(' ')
        if (commandList[0] == 'Urgent') {
            if (!shoppingList.includes(commandList[1])) {
                shoppingList.unshift(commandList[1])
            }
        }
        else if (commandList[0] == 'Unnecessary') {
            if (shoppingList.includes(commandList[1])) {
                let index = shoppingList.indexOf(commandList[1]);
                shoppingList.splice(index, 1)
            }
        }

        else if (commandList[0] == 'Correct') {
            if (shoppingList.includes(commandList[1])) {
                let indexOld = shoppingList.indexOf(commandList[1])
                shoppingList.splice(indexOld, 1, commandList[2])
            }
        }
        else if (commandList[0] == 'Rearrange'){
            if (shoppingList.includes(commandList[1])){
                let indexRearr = shoppingList.indexOf(commandList[1])
                shoppingList.push(shoppingList.splice(indexRearr, 1))
            }
        }
        command = arr.shift()

    }

    console.log(shoppingList.join(', '))
}

shoppingListProblem(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])


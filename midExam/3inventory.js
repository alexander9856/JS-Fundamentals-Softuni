function inventoryProblem(arr) {
    let inventory = arr.shift().split(', ');

    for (let i in arr) {
        let command = arr[i].split(' - ');

        if (command[0] == 'Collect') {
            if (!inventory.includes(command[1])) {
                inventory.push(command[1]);
            }
        }

        else if (command[0] == 'Drop') {
            if (inventory.includes(command[1])) {
                let index = inventory.indexOf(command[1]);
                inventory.splice(index, 1)
            }
        }

        else if (command[0] == 'Combine Items') {
            let oldAndNew = command[1].split(':');
            if (inventory.includes(oldAndNew[0])){
                let indexOfOld = inventory.indexOf(oldAndNew[0]);
                inventory.splice(indexOfOld + 1, 0, oldAndNew[1])
            }
        }

        else if(command[0] == 'Renew'){
            if (inventory.includes(command[1])){
                let indexOfRenew = inventory.indexOf(command[1]);
                let renewed = inventory.splice(indexOfRenew, 1);
                inventory.push(renewed.join(' '))
            }
        }
        else{
            console.log(inventory.join(', '))
        }
    }
}

inventoryProblem([
    'Iron, Wood, Sword', 
    'Collect - Gold', 
    'Drop - Wood', 
    'Craft!'
  ]
  


)
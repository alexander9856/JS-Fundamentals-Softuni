function treasureHunt(arr) {
    let loot = arr.shift().split('|');

    let commands = arr.shift();
    while (commands != 'Yohoho!') {
        let orders = commands.split(' ')

        if (orders[0] == 'Loot') {
            for (let i = 1; i < orders.length ; i++) {
                if (!loot.includes(orders[i])) {
                    loot.unshift(orders[i])
                }
            }
        }
        else if (orders[0] == 'Drop') {
            if (Number(orders[1]) >= 0 && Number(orders[1]) < loot.length) {
                let index = Number(orders[1]);
                loot.push(loot.splice(index, 1).join(' '));
            }
        }


        else if (orders[0] == 'Steal') {
            let stolen = []
            let stealNumber = Number(orders[1]);
         if (stealNumber > loot.length){
            for (let j = loot.length - 1; j >= 0 ; j --){
                stolen.push(loot.pop())
            }
         }
         else{
            for (let k = 1; k <= stealNumber; k ++){
                stolen.push(loot.pop())
            }
         }
         stolen.reverse()
         console.log(stolen.join(', '))


        }
        commands = arr.shift();
    }

    let sumLength = 0
    for (let i of loot) {
        sumLength += i.length
    }


    if (loot.length) {
        console.log(`Average treasure gain: ${(sumLength / loot.length).toFixed(2)} pirate credits.`)
    }
    else {
        console.log("Failed treasure hunt.")
    }
}

treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 9",
"Yohoho!"])




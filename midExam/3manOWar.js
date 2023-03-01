function manOWar(arr) {
    let statusOfPirateShip = arr.shift().split('>').map(Number);
    let statusOfWarship = arr.shift().split('>').map(Number);
    let sectionCapacity = Number(arr.shift());

    let commands = arr.shift();
    let staleMate = false

    while (commands != 'Retire') {
        let commandLine = commands.split(' ')
        if (commandLine[0] == 'Fire') {
            let index = Number(commandLine[1]);
            let damage = Number(commandLine[2]);
            if (index >= 0 && index < statusOfWarship.length) {
                statusOfWarship[index] -= damage;
                if (statusOfWarship[index] <= 0) {
                    console.log("You won! The enemy ship has sunken.")
                    staleMate = false
                    break
                }
                else {
                    staleMate = true
                }
            }
        }
        else if (commandLine[0] == 'Defend') {
            let startIndex = Number(commandLine[1]);
            let endIndex = Number(commandLine[2]);
            let damage = Number(commandLine[3]);

            if (startIndex >= 0 && startIndex < statusOfPirateShip.length
                && endIndex > 0 && endIndex < statusOfPirateShip.length) {

                for (let i = startIndex; i <= endIndex; i++) {
                    statusOfPirateShip[i] -= damage;
                    if (statusOfPirateShip[i] <= 0) {
                        console.log("You lost! The pirate ship has sunken.")
                        staleMate = false
                        break
                    }
                    else {
                        staleMate = true
                    }
                }
                if (staleMate == false) {
                    break
                }
            }
        }
        else if (commandLine[0] == 'Repair') {
            let index = Number(commandLine[1]);
            let health = Number(commandLine[2]);
            if (index >= 0 && index < statusOfPirateShip.length) {
                statusOfPirateShip[index] += health
                if (statusOfPirateShip[index] > sectionCapacity) {
                    statusOfPirateShip[index] = sectionCapacity
                }
            }
        }
        else if (commandLine == "Status") {
            let count = 0
            for (let i = 0; i < statusOfPirateShip.length; i++) {
                if (statusOfPirateShip[i] < sectionCapacity * 0.2) {
                    count++
                }
            }
            console.log(`${count} sections need repair.`)
        }
        commands = arr.shift()
    }
    let pirateSum = statusOfPirateShip.reduce((a, b) => a + b, 0)
    let warshipSum = statusOfWarship.reduce((a, b) => a + b, 0)
    if (staleMate == true) {
        console.log(`Pirate ship status: ${pirateSum}`)
        console.log(`Warship status: ${warshipSum}`)
    }



}

manOWar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"])




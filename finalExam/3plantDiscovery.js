function plantDiscovery(arr) {
    let plantCount = Number(arr.shift());

    let array = []
    for (let i = 0; i < plantCount; i++) {

        let tokens = arr[i].split('<->');

        let flower = tokens[0];
        let rare = tokens[1];
        let obj = { plant: flower, Rarity: rare, Rating: [] }
        let findPlant = array.find((o) => o.plant == flower)
        if (!findPlant) {
            array.push(obj)
        }
        else {
            findPlant.Rarity = rare
        }

    }
    arr.splice(0, plantCount)

    for (let i of arr) {
        if (i == 'Exhibition') {
            break
        }
        let commands = i.split(': ');
        let command = commands.shift();
        let values = commands.toString().split(' - ')


        if (command == 'Rate') {
            let plant = values[0]
            let rating = Number(values[1]);
            let findPlant = array.find((o) => o.plant == plant);
            if (findPlant) {
                findPlant.Rating.push(rating)

            }

            else {
                console.log('error')
            }

        }
        else if (command == 'Update') {
            let plant = values[0]
            let newRarity = values[1];
            let findPlant = array.find((o) => o.plant == plant);
            if (findPlant) {
                findPlant.Rarity = newRarity
            }
            else {
                console.log('error')
            }
        }

        else if (command == 'Reset') {
            let plant = values[0]
            let findPlant = array.find((o) => o.plant == plant);
            if (findPlant) {
                
                 findPlant.Rating.splice(0, (findPlant.Rating.length))

            }
            else {
                console.log('error')
            }
        }

    }
    console.log('Plants for the exhibition:')
    for (let i of array) {
        console.log(`- ${i.plant}; Rarity: ${i.Rarity}; Rating: ${average(i.Rating).toFixed(2)}`)
    }

    function average(arr) {
        if (!arr.length) {
            return 0;
        }
        else {
            return arr.reduce((a, b) => a + b, 0) / arr.length;
        }
    }
}






plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])

function pirates(arr) {
    arr.pop()
    let cities = {}
    for (let i of arr) {
        if (i == 'Sail') {
            break
        }
        else {
            let tokens = i.split('||')
            let city = tokens[0];
            let population = Number(tokens[1]);
            let gold = Number(tokens[2]);

            if (!cities.hasOwnProperty(city)) {
                cities[city] = { population: population, gold: gold }
            }
            else {
                cities[city].population += population;
                cities[city].gold += gold
            }
        }
    }
    let indexOfSail = arr.indexOf('Sail')
    arr.splice(0, indexOfSail + 1)

    for (let i of arr) {
        let tokens = i.split('=>')
        let command = tokens[0];
        let town = tokens[1];

        if (command == 'Plunder') {
            let people = Number(tokens[2]);
            let gold = Number(tokens[3]);
            cities[town].population -= people;
            cities[town].gold -= gold;
            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`)
            if (cities[town].population <= 0 || cities[town].gold <= 0) {
                console.log(`${town} has been wiped off the map!`)
                delete cities[town]
            }
        }
        else if (command == 'Prosper') {
            let goldToAdd = Number(tokens[2]);
            if (goldToAdd < 0) {
                console.log('Gold added cannot be a negative number!')
            }
            else {
                cities[town].gold += goldToAdd;
                console.log(`${goldToAdd} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`)
            }
        }
    }

    let entries = Object.entries(cities)
    if (entries.length > 0) {
        console.log(`Ahoy, Captain! There are ${entries.length} wealthy settlements to go to:`)
        for (let i of entries) {
            console.log(`${i[0]} -> Population: ${i[1].population} citizens, Gold: ${i[1].gold} kg`)
        }
    }
    else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!")
    }



}

pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])

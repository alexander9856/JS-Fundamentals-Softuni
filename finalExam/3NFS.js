function needForSpeed(arr) {
    let carsNum = arr.shift();
    arr.pop()
    let carsArr = [];

    for (let i = 1; i <= carsNum; i++) {
        let car = arr.shift().split("|")
        let obj = {}
        obj.car = car[0]
        obj.mileage = Number(car[1])
        obj.fuel = Number(car[2])
        carsArr.push(obj)
    }

    for (let i of arr) {
        let tokens = i.split(' : ')
        let command = tokens[0]
        let currCar = tokens[1]
        if (command == 'Drive') {
            let distance = Number(tokens[2])
            let fuelNeeded = Number(tokens[3])
            let findCar = carsArr.find((o) => o.car === currCar)

            if (findCar) {
                if (findCar.fuel < fuelNeeded) {
                    console.log('Not enough fuel to make that ride')
                }
                else {
                    findCar.mileage += distance
                    findCar.fuel -= fuelNeeded
                    console.log(`${currCar} driven for ${distance} kilometers. ${fuelNeeded} liters of fuel consumed.`)

                    if (findCar.mileage >= 100000) {
                        let indexFindCar = carsArr.indexOf(findCar)
                        carsArr.splice(indexFindCar, 1)
                        console.log(`Time to sell the ${currCar}!`)

                    }
                }
            }
        }
        else if (command == 'Refuel') {
            let fuelToAdd = Number(tokens[2])
            let findCar = carsArr.find((o) => o.car == currCar)
            if (findCar) {
                if (findCar.fuel + fuelToAdd > 75) {
                    console.log(`${currCar} refueled with ${75 - findCar.fuel} liters`)
                    findCar.fuel = 75
                }
                else if (findCar.fuel + fuelToAdd <= 75) {
                    findCar.fuel += fuelToAdd
                    console.log(`${currCar} refueled with ${fuelToAdd} liters`)
                }
            }

        }
        else if (command == 'Revert') {
            let kmToDecrease = Number(tokens[2])
            let findCar = carsArr.find((o) => o.car == currCar)
            if (findCar) {
                findCar.mileage -= kmToDecrease
                if (findCar.mileage < 10000) {
                    findCar.mileage = 10000
                }
                else {
                    console.log(`${currCar} mileage decreased by ${kmToDecrease} kilometers`)

                }
            }
        }
    }

    // carsArr.sort(function(a, b){return b-a} || function(a, b){return a.localeCompare(b)})
    //     .forEach((el) => console.log(`${el.car} -> Mileage: ${el.mileage} kms, Fuel in the tank: ${el.fuel} lt.`))

    carsArr.sort((a, b) => sortByMileage(a, b) || sortAlphabetically(a, b))
        .forEach((el) => console.log(`${el.car} -> Mileage: ${el.mileage} kms, Fuel in the tank: ${el.fuel} lt.`))


    function sortByMileage(a, b) {
        let finddd = carsArr.find((o) => o.car)
        a = finddd.mileage
        b = finddd.mileage;

        let comp = 0;
        if (b > a) {
            comp = 1;
        } else if (b < a) {
            comp = -1;
        }

        return comp;
    }

    function sortAlphabetically(a, b) {
        let finddd = carsArr.find((o) => o.car)

        a = finddd.car;
        b = finddd.car;

        return a.localeCompare(b);
    }

}
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]
)
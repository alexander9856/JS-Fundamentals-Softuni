function worldTour(arr) {
    let initialStops = arr.shift();
    arr.pop();
    for (let i of arr) {
        let tokens = i.split(':')
        let command = tokens[0];
        if (command == 'Add Stop') {
            let index = Number(tokens[1]);
            let string = tokens[2];
            if (index >= 0 && index < initialStops.length) {
                let firstPart = initialStops.substring(0, index);
                let secondPart = initialStops.substring(index);
                initialStops = firstPart + string + secondPart;
                console.log(initialStops)
            }
            else{
                console.log(initialStops)
            }
        }
        else if (command == 'Remove Stop') {
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);

            if (startIndex >= 0 && startIndex < initialStops.length
                && endIndex >= 0 && endIndex < initialStops.length) {
                let firstPart = initialStops.substring(0, startIndex)
                let secondPart = initialStops.substring(endIndex + 1, initialStops.length)
                initialStops = firstPart + secondPart
                console.log(initialStops)

            }
            else{
                console.log(initialStops)
            }
        }
        else if (command == 'Switch') {
            let oldString = tokens[1];
            let newString = tokens[2];

            if (initialStops.includes(oldString)) {
                initialStops = initialStops.replace(oldString, newString)
                console.log(initialStops)
            }
            else{
                console.log(initialStops)

            }
        }
    }
    console.log(`Ready for world tour! Planned stops: ${initialStops}`)




}

worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania:Azarbaycan",
    "Travel"])

function heartDelivery(arr) {
    let neighbourhood = arr.shift().split('@');
    let cupidonAt = 0
    let isSuccessful = false
    let failedPlacesCount = 0
    let successHouses = 0
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i]
        if (command == 'Love!') {
            break
        }
        else {
            command = arr[i].split(' ');
            let jumpLength = Number(command[1]);
            cupidonAt += jumpLength

            if (cupidonAt >= neighbourhood.length) {
                cupidonAt = 0;
            }
            if (neighbourhood[cupidonAt] === 0) {
                console.log(`Place ${cupidonAt} already had Valentine's day.`)
            }
            else {
                neighbourhood[cupidonAt] -= 2
                if (neighbourhood[cupidonAt] == 0) {
                    console.log(`Place ${cupidonAt} has Valentine's day.`)
                }
            }
        }
    }

    for (let i in neighbourhood) {
        if (neighbourhood[i] > 0) {
            failedPlacesCount++
        }
        else if (neighbourhood[i] == 0) {
            successHouses++
        }
    }

    if (successHouses == neighbourhood.length) {
        console.log(`Cupid's last position was ${cupidonAt}.`);
        console.log('Mission was successful.')
    }
    else {
        console.log(`Cupid's last position was ${cupidonAt}.`);
        console.log(`Cupid has failed ${failedPlacesCount} places.`)
    }

}

heartDelivery(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"])








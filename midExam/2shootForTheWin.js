function shootForTheWin(arr) {
    let targets = arr.shift().split(' ').map(Number);

    let counterStrike = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'End') {
            break
        }
        else {
            indexOfTarget = Number(arr[i]);
            if (indexOfTarget >= targets.length || indexOfTarget < 0) {
                continue
            }
            else {
                if (targets[indexOfTarget] !== -1) {
                    let shot = targets[indexOfTarget]
                    for (let i in targets) {
                        if (targets[i] > shot && targets[i] != -1) {
                            targets[i] -= shot
                        }
                        else if (targets[i] <= shot && targets[i] != -1) {
                            targets[i] += shot
                        }
                    }
                    targets[indexOfTarget] = -1
                    counterStrike++
                }
                else {
                    continue
                }

            }
        }
    }

    console.log(`Shot targets: ${counterStrike} -> ${targets.join(' ')}`)

}

shootForTheWin(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"])

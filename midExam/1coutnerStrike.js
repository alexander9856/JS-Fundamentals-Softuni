function counterStrike(arr) {
    let totalEnergy = Number(arr.shift())

    let countWonBattles = 0

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == 'End of battle') {
            console.log(`Won battles: ${countWonBattles}. Energy left: ${totalEnergy}`)
            break
        }

        let neededEnergy = Number(arr[i]);
       
        if (totalEnergy - neededEnergy >= 0) {
            totalEnergy -= neededEnergy
            countWonBattles++;
            if (countWonBattles % 3 === 0) {
                totalEnergy += countWonBattles
            }
        }
        else {
            console.log(`Not enough energy! Game ends with ${countWonBattles} won battles and ${totalEnergy} energy`)
            break
        }


    }


}


counterStrike(["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"])

function muOnline(str) {
    let arr = str.split('|');
    let health = 100;
    let bitcoins = 0;
    let roomsCount = 0;
    let isMadeit = true
    for (let i in arr) {
        let room = arr[i].split(' ');
        if (room[0] == 'potion') {
            roomsCount++
            if (health + Number(room[1]) > 100) {
                let hpHealed = 100 - health;
                health = 100;

                console.log(`You healed for ${hpHealed} hp.`)
                console.log(`Current health: ${health} hp.`)
            }
            else {
                health += Number(room[1]);
                console.log(`You healed for ${Number(room[1])} hp.`)
                console.log(`Current health: ${health} hp.`)
            }
        }
        else if (room[0] == 'chest') {
            bitcoins += Number(room[1]);
            roomsCount++
            console.log(`You found ${room[1]} bitcoins.`)
        }
        else {
            let monster = room[0];
            let damage = Number(room[1]);
            roomsCount++

            if (health - damage > 0) {
                health -= damage;
                console.log(`You slayed ${monster}.`)
            }
            else {
                console.log(`You died! Killed by ${monster}.`)
                console.log(`Best room: ${roomsCount}`)
                isMadeit = false
                break
            }
        }

    }
    if (isMadeit == true){
        console.log("You've made it!")
        console.log(`Bitcoins: ${bitcoins}`)
        console.log(`Health: ${health}`)
    }
}

muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")
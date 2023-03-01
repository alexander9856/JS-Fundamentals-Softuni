function movingTarget(arr) {
    let targetsToShoot = arr.shift().split(' ').map(Number);

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];
        if (command == 'End') {
            break
        }
        else {
            command = arr[i].split(' ');
            let activity = command.shift();
            let index = Number(command.shift());
            let value = Number(command.shift())

            if (activity == 'Shoot') {
                if (index < 0 || index >= targetsToShoot.length) {
                    continue
                }
                else {
                    targetsToShoot[index] -= value
                    if (targetsToShoot[index] <= 0) {
                        targetsToShoot.splice(index, 1)
                    }
                }
            }

            else if (activity == 'Add') {
                if (index < 0 || index >= targetsToShoot.length) {
                    console.log('Invalid placement!')
                    continue
                }

                else {
                    targetsToShoot.splice(index, 0, value)
                }
            }

            else if (activity == 'Strike') {
                if (index + value >= targetsToShoot.length || index - value < 0) {
                    console.log("Strike missed!")
                    continue
                }
                else {
                    targetsToShoot.splice(index - value, value * 2 + 1)
                }
            }
        }



    }

console.log(targetsToShoot.join('|'))
}
movingTarget(["1 2 3 4 5",
    "Strike 0 1",
    "End"])



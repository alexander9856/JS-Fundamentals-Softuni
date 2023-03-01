function heroesOfCode(arr) {
    let heroesCount = Number(arr.shift());
    arr.pop()
    let obj = {};
    for (let i = 1; i <= heroesCount; i++) {
        let tokens = arr.shift().split(' ');
        let hero = tokens[0];
        let hitPoints = Number(tokens[1]);
        let manaPoints = Number(tokens[2]);
        obj[hero] = { hp: hitPoints, mp: manaPoints }
    }

    for (let i of arr) {
        let tokens = i.split(' - ');
        let command = tokens[0];
        let currentHero = tokens[1];

        if (command == 'CastSpell') {
            let mpNeeded = Number(tokens[2]);
            let spellName = tokens[3];
            if (obj[currentHero].mp >= mpNeeded) {
                obj[currentHero].mp -= mpNeeded
                console.log(`${currentHero} has successfully cast ${spellName} and now has ${obj[currentHero].mp} MP!`)
            }
            else {
                console.log(`${currentHero} does not have enough MP to cast ${spellName}!`)
            }
        }
        else if (command == 'TakeDamage') {
            let dmg = Number(tokens[2]);
            let attacker = tokens[3];
            obj[currentHero].hp -= dmg
            if (obj[currentHero].hp > 0) {
                console.log(`${currentHero} was hit for ${dmg} HP by ${attacker} and now has ${obj[currentHero].hp} HP left!`)
            }
            else {
                delete obj[currentHero]
                console.log(`${currentHero} has been killed by ${attacker}!`)
            }
        }
        else if (command == 'Recharge') {
            let recharge = Number(tokens[2])
            if (obj[currentHero].mp + recharge > 200) {
                console.log(`${currentHero} recharged for ${200 - obj[currentHero].mp} MP!`)
                obj[currentHero].mp = 200;
            }
            else {
                obj[currentHero].mp += recharge;
                console.log(`${currentHero} recharged for ${recharge} MP!`)
            }
        }
        else if (command == 'Heal') {
            let healing = Number(tokens[2]);
            if (obj[currentHero].hp + healing > 100) {
                console.log(`${currentHero} healed for ${100 - obj[currentHero].hp} HP!`)
                obj[currentHero].hp = 100;
            }
            else {
                obj[currentHero].hp += healing;
                console.log(`${currentHero} healed for ${healing} HP!`)
            }
        }
    }
    
    Object.entries(obj)
    .forEach((el) => console.log(`${el[0]}\n  HP: ${el[1].hp}\n  MP: ${el[1].mp}`))
}

heroesOfCode([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'

]
)
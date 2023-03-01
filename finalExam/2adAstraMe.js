function adAstra(arr) {
    let string = arr.toString()
    let pattern = /([\|#])(?<name>[A-Za-z ]+)\1(?<date>[\d]{2}\/[\d]{2}\/[\d]{2})\1(?<calories>[\d]+)\1/g
    let array = [];
    let regex = pattern.exec(string)
    let totalCal = 0

    while (regex) {
        let { name, date, calories } = regex.groups
        let obj = { item: name, date: date, calories: calories }
        totalCal += +calories
        array.push(obj)
        regex = pattern.exec(string)
    }

    console.log(`You have food to last you for: ${Math.floor(totalCal/2000)} days!`)

    for (let i of array){
        console.log(`Item: ${i.item}, Best before: ${i.date}, Nutrition: ${i.calories}`)
    }


}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]
)
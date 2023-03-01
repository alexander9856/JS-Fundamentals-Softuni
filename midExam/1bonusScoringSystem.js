function bonusScoringSystem(arr) {
    let studentsCount = Number(arr.shift());
    let lecturesCount = Number(arr.shift());
    let addBonus = Number(arr.shift());
    let totalBonus = 0
    let lecturesCountBest = 0
    for (let i = 0; i < studentsCount; i++) {
        let attendace = Number(arr[i]);
        totalBonusEachStudent = (attendace / lecturesCount) * (5 + addBonus)
        if (totalBonusEachStudent > totalBonus) {
            totalBonus = totalBonusEachStudent
            lecturesCountBest = attendace
        }

    }
    console.log(`Max Bonus: ${Math.ceil(totalBonus)}.`)
    console.log(`The student has attended ${lecturesCountBest} lectures.`)
}

bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]
  
)
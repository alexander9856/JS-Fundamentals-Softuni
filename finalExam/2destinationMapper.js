function destinationMapper(str) {
    let pattern = /([=\/])(?<place>[A-Z]{1}[A-Za-z]{2,})\1/g
    let regex = pattern.exec(str)
    let lengthCount = 0
    let arr = []
    while (regex) {
        let destination = regex.groups['place']

        lengthCount += destination.length;
        arr.push(destination)
        regex = pattern.exec(str)
    }

    console.log(`Destinations: ${arr.join(', ')}`)
    console.log(`Travel Points: ${lengthCount}`)

}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")
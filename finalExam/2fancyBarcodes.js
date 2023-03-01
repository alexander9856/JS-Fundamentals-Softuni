function fancyBarcodes(arr) {
    let barcodesCount = Number(arr.shift())
    let pattern = /(@#+)(?<barcode>([A-Z]{1}[A-Za-z\d]{4,}[A-Z]))(@#+)/g

    for (let i = 1; i <= barcodesCount; i++) {
        let str = arr.shift().toString()
        let regex = pattern.exec(str)
        if (regex == null) {
            console.log('Invalid barcode')
            continue
        }
        else {
            let barcodeName = regex.groups['barcode'].split('')
            let productGroup = ''
            for (let i of barcodeName) {
                if (i >= 0 && i <= 9) {
                    productGroup += i
                }
            }
            if (productGroup.length == 0) {
                console.log(`Product group: 00`)
            }
            else {
                console.log(`Product group: ${productGroup}`)
            }
            regex = pattern.exec(str)
        }
    }
}

fancyBarcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])

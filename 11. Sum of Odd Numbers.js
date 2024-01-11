function sumOfOddNumbers(number) {

    let sum = 0
    let curentValue = 0
    let countNum = 0

    while (countNum !== number) {
        if (curentValue % 2 !== 0) {
            console.log(curentValue)
            countNum++
            sum += curentValue
        }
        curentValue++
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5)
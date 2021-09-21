console.log('JavaScript is working!')

countdown();

// Countdown
function countdown() {
    let highestNumber = 400;
    let lowestNumber = 100;
    for (let i = highestNumber; i > lowestNumber; i--) {
        if (i % 3 === 0) {
            console.log(i)
        }
    }
}

calculateArray()
// get sum of array
function calculateArray() {
    let niceNumber = [2, 4, 8, 9, 12, 13];
    const sum = niceNumber.reduce(function (a, b) {
        return a + b;
    }, 0);
    console.log(sum);
}
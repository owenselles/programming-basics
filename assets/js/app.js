happyNewYear(2021);
// Countdown
async function happyNewYear(year) {
    const timer = ms => new Promise(res => setTimeout(res, ms))
    for (let i = 10; i > 0; i--) {
        console.log(i)
        await timer(1000)
    }
    console.log(`Happy new ${year}!!!`)
}

factorial(5)
// get sum of array
function factorial(num) {
    let finalNumber = 1;
    for (i = 1; i <= num; i++) {
        finalNumber = finalNumber * i;
    }
    console.log(finalNumber);
}

checkForACharacterInSentence("Test sentence", "t")

// Check for character in the sentence
function checkForACharacterInSentence(sentence, character) {
    const count = sentence.split(new RegExp(character, "gi")).length - 1
    console.log(`Sentence contains "${character}" ${count} times!`)
}
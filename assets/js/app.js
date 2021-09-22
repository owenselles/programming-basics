randomReturn();

// Return random element from array
async function randomReturn() {
    const lapRounds = [2.99, 3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];
    const number = Math.floor(Math.random() * lapRounds.length);
    console.log(lapRounds[number])
}

printRecords()

// print all records from array
function printRecords() {
    const allMyRecords = [
        [
            "The Who - Pinball Wizard",
            "Rolling Stones - Exile on main street",
            "Police - Message in a bottle"
        ],
        [
            "De Dijk - Alle 40 Goed",
            "Het Goede Doel - Belgie",
            "Doe Maar - skunk"
        ]
    ];
    for (let i = 0; i < allMyRecords.length; i++) {
        for (let k = 0; k < allMyRecords[i].length; k++) {
            console.log(allMyRecords[i][k])
        }
    }
}

filteredLapRoundsWithForLoop()
// Filter all numbers from array that are smaller than 4
function filteredLapRoundsWithForLoop() {
    const lapRounds = [2.99, 3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];
    const lessThanFour = lapRounds.filter(function (number) {
        return number < 4;
    });
    console.log(lessThanFour);
}
formatObject()

// format object into an array
function formatObject() {

    const drivers = [{
        driver: 'Max',
        team: 'Redbull',
        lapRounds: [55.99, 63.00, 63.01, 54.01, 62.79, 52.88, 53.10, 54.12]
    },
        {
            driver: 'Lewis',
            team: 'Mercedes',
            lapRounds: [55.90, 63.10, 63.1, 53.01, 64.79, 52.80, 52.09, 54.11]
        }]
    console.log(drivers[0].driver)
}

myProfession()

// print teachers
function myProfession() {
    const teachers = [{
        name: "Loek",
        profession: "Teacher",
        brand: "Linux"
    },
        {
            name: "Daan",
            profession: "Teacher",
            brand: "Arduino"
        },
        {
            name: "Rimmert",
            profession: "Teacher",
            brand: "Apple"
        }
    ]
    for (let i = 0; i < teachers.length; i++) {
        console.log(`${teachers[i].name} has a profession as a ${teachers[i].profession} and he likes to work on a ${teachers[i].brand} computer`)
    }
}
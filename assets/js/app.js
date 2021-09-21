console.log('JavaScript is working!')

// prompt for name
getName()

function getName() {
    var name = prompt("What is your name?", "");
    if (name === "Alice" || "Bob") {
        console.log()
        document.getElementById("greeting").innerHTML =
            "Hey " + name + "!";
    }
    console.log(name);
}

// if else statement
checkForTeacher();

function checkForTeacher() {
    purchasedBook = true;
    job = 'teacher';
    inTrain = true;
    if (purchasedBook && inTrain === true && job === "teacher") {
        console.log("Finally I can enjoy my book!")
    } else {
        console.log("Condition not met!")
    }
}

// if else for grades
checkGrade();

function checkGrade() {
    const grade = 11;
    if (grade <= 6) {
        console.log("insufficient");
    } else if (grade > 6 && grade <= 7) {
        console.log("sufficient");
    } else if (grade > 7 && grade <= 9) {
        console.log("good");
    } else if (grade > 9 && grade <= 10) {
        console.log("excellent");
    } else {
        console.error("No correct data")
    }
}

// log days in a month
datesInMonth();

function datesInMonth() {
    const year = parseInt(prompt("Enter a year please"));
    const month = parseInt(prompt("Enter a month please"));
    const date = new Date(year, month, 0).getDate();
    console.log(date)
}
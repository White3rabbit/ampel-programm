
// Notendurschnitt berechnen mit einem Array


//Array
var students = [
    {
        "Name": "Max",
        "Matrikelnummer": 11,
        "NC": 4
    },
    {
        "Name": "Peter",
        "Matrikelnummer": 22,
        "NC": 5
    },
    {
        "Name": "Stefan",
        "Matrikelnummer": 33,
        "NC": 5.5
    },
    {
        "Name": "Thomas",
        "Matrikelnummer": 44,
        "NC": 4.5
    },
    {
        "Name": "Lukas",
        "Matrikelnummer": 55,
        "NC": 6
    },
]

//Funktion Main
function main() {
    calcAverageNC();
}

//Funktion Kalkulieren
function calcAverageNC() {


    //Variable innerhalb der Funktion
    var totalNC = 0;

    for (let i = 0; i < students.length; i++) {

        //variable innerhalb der Schleife
        var student = students[i];

        //Ausgabe
        console.log(student["Name"] + " hat einen NC von: " + student["NC"] + " und seine Martrikelnummer ist: " + student["Matrikelnummer"]);

        //zusammenrechnen der Note
        totalNC += student.NC
    }

    //durchschnittliche Note berechnen
    var averageNC = totalNC / students.length;

    //Ausgabe
    console.log("Die durchschnittliche Note ist: " + averageNC);
}




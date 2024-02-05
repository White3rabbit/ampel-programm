// IF Statement

//var age = prompt("Trage dein Alter ein: ");

//if (age >= 18)// wird als false angegeben
//{
//Wird ausgeführt wenn Bediengung true ist
//  console.log("Eintritt gewährt")
//} else {
//Wird in jedem anderen Fall ausgeführt
//  console.log("Eintritt verweigert")
//}

function main() {
    var input = document.getElementById("inputColor");
    
    var color = input.value;

    var lowerColorName = color.toLowerCase();
    

    //Wenn grün -> fahren
    if (lowerColorName == "grün") {
        alert("Du darfst fahren");
    } else if (lowerColorName == "orange") {
        alert("Du darfst anfahren oder musst bremsen");
    } else if (lowerColorName == "rot") {
        alert("Du musst anhalten");
    } else {
        alert("Keine gültige Farbe eingetragen");
    }

}


//Wenn gelb -> anfahren/bremsen

//Wenn rot -> halten

//Fehlermeldung zurückgeben bei falscher Farbe
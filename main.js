function main() {
    var input = document.getElementById("age");
    var age = input.value;

    // < 6 jahre oder > 60 jahre -> sonderpreis 4 franken
if(age <0 || age > 110) //  || = oder operator
   alert("Bitte trage eine gültiges Alter ein");
else if(age <=6 ||age >= 60) {
    alert("Sonderpreis 4 franken");
} else{
alert("normalpreis 6.50 franken");
}
}
 // für alle anderen Altersgruppen -> 6.50

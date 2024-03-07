/*var divEle = document.createElement("div")
divEle.innerText = "Hello World";
document.body.appendChild(divEle)

var link = document.createElement("a")
link.innerText = "Click here";
link.href = "https://google.com";
document.body.appendChild(link);*/

var table = document.getElementById("table");
var row = table.insertRow(1);
row.insertCell(0).innerText = "Seppli";
row.insertCell(1).innerText = "Brunner";

row.addEventListener("click", function () {
    var row = table.insertRow(1);
    row.insertCell(0).innerText = "Johannes";
    row.insertCell(1).innerText = "Schulze";
    })
var row = table.insertRow(2);
row.insertCell(0).innerText = "Markus";
row.insertCell(1).innerText = "Hoffmann";

function add() {
    table.classList.add("awesomeTable");
}

function remove() {
    table.classList.remove("awesomeTable");
}

function toggle() {
    table.classList.toggle("awesomeTable");
    
}

table.addEventListener("mouseover", function () {
    table.classList.add("highlight");
})

table.addEventListener("mouseout", function () {
    table.classList.remove("highlight");
})

/*var btn = document.getElementById("test");
btn.addEventListener("click", function () {
    var row = table.insertRow(1);
row.insertCell(0).innerText = "Johannes";
row.insertCell(1).innerText = "Schulze";
})*/
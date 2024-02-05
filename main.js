function main() {
    var inputSpeed = document.getElementById("speed");
    var inputDir = document.getElementById("dir");
    var inputMaxSpeed = document.getElementById("maxSpeed");


    var speed = parseInt(inputSpeed.value);
    var maxSpeed = parseInt(inputMaxSpeed.value);
    var isFacing = inputDir.checked;  

    var maxSpeedWithOffset = maxSpeed + ((maxSpeed / 100) * 10);
    console.log(maxSpeedWithOffset);

if(speed > maxSpeedWithOffset && isFacing == true) {
    alert("Sie wurden geblitzt");
}

}

// 6:43 min  im video
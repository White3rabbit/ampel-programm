import * as vehicles from "./car.js";


var car = new vehicles.Car("VW", 2010, 200);
car.drive(100);

var car2 = new vehicles.Ship("Frachter", 2015, 300);
car2.drive(210);
car2.honk();

vehicles.allVehicles();
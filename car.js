//Methoden


export class Car {

    constructor(marke, baujahr, ps){
        this.marke = marke;
        this.baujahr = baujahr;
        this.ps = ps;
    }

    drive(speed){
        console.log("Fährt: " + this.marke + " " + speed);
    }

    honk(){
        console.log("Hupt: " + JSON.stringify(this));
    }

    break(){
        console.log("Bremst: " + JSON.stringify(this));
    }
}

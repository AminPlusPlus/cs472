
//ES6 
class Car {

    /**
    @param {String} make
    @param {String} model
    @param {String} color
    */
    constructor(make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
    }

    /**
    @param {Number} speed
    */
    drive(speed) {
        return `The ${this.color} ${this.model} is driving at ${speed} mph.`;
    }

    stop() {
        return `The ${this.color} ${this.make} ${this.model} is stopping`;
    }
}


class RedHondaAccord extends Car {
     /**
    @param {String} make
    @param {String} model
    @param {String} color
    */
    constructor(make, model, color) {
        super(make,model,color)
    }
}

let redHondaAccord = new RedHondaAccord("Honda",'Accord',"red");
console.log(redHondaAccord.drive(300));

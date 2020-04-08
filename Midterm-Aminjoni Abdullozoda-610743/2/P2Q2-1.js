//
let Car = {
    make :"default",
    model : "default",
    color:"default",

    /**
    @param {Number} speed
    */
    drive (speed) {
        return `The ${this.color} ${this.model} is driving at ${speed} mph.`;
    },

    stop () {
        return `The ${this.color} ${this.make} ${this.model} is stopping`;
    }
 
}

let redHondaAccord =  Object.create(Car);
redHondaAccord.make = "Honda";
redHondaAccord.model = "Accord";
redHondaAccord.color = "red";
console.log(redHondaAccord.drive(250));

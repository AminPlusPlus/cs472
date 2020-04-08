// 6
let count = { 
    counter : 0, 
    add() { this.counter++},
    reset() {this.counter = 0}
} 

//8
let count_adder = {
    counter : 0,
    add() { this.counter++},
    reset() {this.counter = 0},
    make_adder(i) {  
     return () => {
            this.counter+=i;
        }
    }
}

//9
//Module Pattern for hidding data inside function 

//10
const Employee = (function(){
    let name;
	let age;
    let salary;
    

    /** 
     * @param {string} newName;
    */
    const setName = function(newName){
        name = newName;
    }
    
    /** 
     * @param {Number} newAge;
    */
    const setAge = (newAge) => {
        age = newAge;
    }

    /** 
     * @param {Number} newSalary;
    */
    const setSalary = function(newSalary){
       salary = newSalary;
    }

    const getName = function(){
        return name;
    }

    const getAge = function(){
        return age;
    }
    
    const getSalary = function(){
        return salary;
    }

    /** 
     * @param {Number} percentage;
    */
    const increaseSalary = function(percentage){
        salary +=  (percentage * getSalary()) / 100;
    }

    const incrementAge = function(){
        age = getAge()+ 1;
    }

    return {
        getName :getName,
        setSalary : setAge,
        setName : setName,
        setAge : setAge,
        increaseSalary : increaseSalary,
        incrementAge : incrementAge
    };

})


//11
Employee.setAddress = function(newAddress){
	address = newAddress;
}

Employee.getAddress = function(){
	return address;
}



let User  = {
    name : '',
    surname : '',

    toString () {
        return `Name:${this.name} , Surname:${this.surname}`;
    }   
}

let amin = Object.create(User);
amin.name = "Aminjoni";
amin.surname = "Abdullo";
amin.salary = 1200;
console.log(amin.toString());
console.log(amin.salary);


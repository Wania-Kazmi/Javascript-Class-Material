//key: value pair syntax
//car object
const Car = {
    type: "Fiat",
    model: "500",
    "color-abc": "white" //for dynamic values
};
//Accessing obj properties
console.log(Car.type);
console.log(Car.model);
console.log(Car["color-abc"]);


//person object:
const Person = {
    fname: "John",
    lname: "Doe",
    age: 50,
    "eye-color": "Blue",
};

//Acessing obj properties:
console.log(Person.fname);
console.log(Person.lname);
console.log(Person.age);
console.log(Person.eye-color); 
console.log(Person["eye-color"]);


//Multiple objects inside an array:
const Persons = [
    {
        fname: "Wania",
        lname: "Kazmi",
        age: 22,
        "eye-color": "brown"
    },
    {
        fname: "John",
        lname: "Doe",
        age: 50,
        "eye-color": "Blue",
    }
]

//Access person 1
console.log(Persons[0].fname);
//Accessing person 2
console.log(Persons[1].fname);


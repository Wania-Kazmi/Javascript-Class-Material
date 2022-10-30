//Simple if-else statement
let user_age = Number(prompt("What's your age?"));;

if(user_age > 18){
    console.log(`You can drive a car`);
}
else if(user_age == 18){
    console.log(`You can drive a car but your age is ....`);
}
else{
    console.log(`You does not satisfy the age limit`);
}

// //Nested if else
let country = prompt("Enter your country"); //Pakistan  PAKistan
country = country.toLowerCase();
let age = Number(prompt("What's your age?"));

if (country == "pakistan") {
  if (age >= 18) {
    console.log("Here is your ticket");
  } else {
    console.log("Age restriction");
  }
} else {
  console.log("Invalid country");
}


//Logical operators
//&& -- AND
let x = 8;
let y = 10;
if (x > y && x > 5) {
  //&& True and true
  console.log("Hello");
} else {
  console.log("World");
}

//|| -- OR
if(x > 5 || x < 5){ //&& True and false
    console.log("Hello");
}else{
    console.log("World");
}

// //Assign 1: number into words: (not for beginners yet)

// let arr = [11, 15, 17, 18, 19]; //Find index number with value

//Assign 1: prototypes methods of array and create your own methods

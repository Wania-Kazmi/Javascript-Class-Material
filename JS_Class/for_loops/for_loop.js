//for loops:
//synatax -- for(initialization; condition; expression){//statement}

for(let i = 0; i < 3; i++){
    console.log("Hello World");
}

for(let i = 0; i < 3; i++){
    console.log("Hello World: "+i);
}

for(let i=5; i<10; i++){
    console.log(i);
}

//infinite loop
// for (let i=10; i>0; i++){
//     console.log(i);
// }

//Break and continue:
// Break:
for (let i = 0; i < 8; i++){
    if(i == 4){
        break;
    }
    console.log("I = "+i);
}

let cleanestCity = ["Islamabad", "Lahore", "Karachi", "Peshawar"];

for (let i = 0; i<cleanestCity.length; i++){
    if(cleanestCity == "Islamabad"){
        console.log("It's one of the cleanest city in Pakistan");
        break;
    }
}

//Continue:

for (let i = 0; i < 8; i++){
    if(i == 4){
        continue;
    }
    console.log("I = "+i);
}


//Nested for loop:
let fname = ["John", "Emma", "Elijah", "Olivia"];
let lname = ["Smith", "Williams", "Brown"];

let fullname = [];

for (let i = 0; i < fname.length; i++){
    for(let j = 0; j < lname.length; j++){
        fullname.push(fname[i] + lname[j]);
    } 
}

console.log(fullname);



//JAVASCRIPT SYLLABUS:

// Learning Basic JavaScript Schedule for Our Web 3.0 and Metaverse Classes:

// We are holding three classes a week to teach you programming. Your onsite class, Monday Zoom/YouTube Class at 8:00 pm by Daniyal, and Saturday Zoom/YouTube Class at 8:00 pm by Hira Khan and Adil Altaf. 

// All our COO's and Line Managers will also conduct help desk sessions. Please contact your section COO to get the schedule of help desk sessions.  

// Please note that currently we have over 100 officers of Panaverse DAO appointed and ready to help you learn programming, but you will have to reach out and ask for help.


// All our classes and help desk sessions we will follow this sequence:

// 1. Background of JavaScript and How to use JavaScript in Browser

// 2. Variables, Primitive data types Analyzing and modifying data types, and Operators (Chapter 2 of JavaScript from Beginner to Professional)

// 3. Intro to Node.js, .mjs files, Modules, NPM, import, export, and using external modules with npm:
// https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing

// 4. Learn how to accept user input in your Node.js JavaScript programs, this will allow us to create interactive Node.js console programs using prompt-sync library.
// The last example in this presentation shows you how to use prompt-sync library in your Node.js programs:
// https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing 

// Note: After this point we will do all our class work and exercises using Node.js in .mjs files. We will also be able to develop interactive Node.js console programs which will greatly help the students to learn.

// 5. Using Arrays and Objects in Node.js Programs (chapter 3 of JavaScript from Beginner to Professional)

// 6. Using if and if else statements, else if statements, Conditional ternary operators, and switch statements in Node.js programs (chapter 4 of JavaScript from Beginner to Professional)

// 7. Using while loop, do while loop, for loop, for in, and for of loop in Node.js (chapter 5 of JavaScript from Beginner to Professional)

// 8. Using Basic functions, Function arguments, Return, Variable scope in functions, Recursive functions, Nested functions, Anonymous functions, and Function callbacks in Node.js (chapter 6 of JavaScript from Beginner to Professional)

// 9. Using Concurrency, Callbacks, Promises, async / await, and Event loop (chapter 13 of of JavaScript from Beginner to Professional)

// At this stage students are required to complete and submit the following exercises:

// https://github.com/panacloud-modern-global-apps/typescript-node-projects/blob/main/getting-started-exercises.md

// After this we will start Learning TypeScript which is a subset of JavaScript.












// function add(num){
//     let name = "Daniyal";

// }
// console.log("Hello");

// setTimeout(() => {
//     console.log("Hello");
    
// }, 3000);

// console.log("Wait");












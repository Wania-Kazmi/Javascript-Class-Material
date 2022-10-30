let fruit1 = "apple";
let fruit2 = "banana";
let fruit3 = "kiwi";
let fruit4 = "blue berries"; //so on ......

//what if we have 100's of fruits to store -- in this case we use array

let fruits = ["apple", "banana", "kiwi", "berries"];  //single variable can hold multiple values


//Now how can we access these values in array:
//array works with indexes -- which is started from index 0

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[5]); //undefined
console.log(fruits[-5]); //undefined

// //In array you can store multiple data type values
let arr = ["Wania", 3452, true];
console.log(arr);

// //Adding and removing elements in array:
let arr1 = [23, "john", true, 34, false];
//Add value in array:
arr1.push("Wania");
console.log(arr1);

//Removing element from array:
arr1.pop();
console.log(arr1);

//shift() method -- it is equivalent to pop() but removes 1st element instead of last:
arr1.shift();
console.log(arr1);

//unshift() method -- it is like push() but it adds elements at the start instead of last:
arr1.unshift("Web3.0");
console.log(arr1);

//splicing() method -- adds new items in the array at any index:
const std = ["John", "Emma", "Elijah", "Olivia"];
console.log("Before: "+std);
std.splice(1, 0, "Wania", "Ava");  //.splice(addElementIndex#, howManyElementsToReplace, elementsToAdd)
console.log("After: "+std);

//slice() method -- it slice out a piece of an array:
const std1 = ["John", "Emma", "Elijah", "Olivia", "Wania", "Ava"];
let toppers = std1.slice(2); //2 is included here
console.log(toppers);

toppers = std1.slice(2, 4); //4 is excluded here
console.log(toppers);


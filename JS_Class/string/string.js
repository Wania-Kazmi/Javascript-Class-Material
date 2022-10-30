//JS strings are used for storing and manipulating text.
//string is combination of characters -- written inside double quotes or single quotes (""/'')

//.length property:
let name1 = "Wania";
console.log(name1.length);

// //escape characters
let a = "Hello \'World";
let b = "Hello \"World";
let c = "Hello \\World";
let d = "Hello \nWorld";
let e = "Hello \tWorld";

//toLowerCase and toUpperCase Function
//Manipulation of string
let str = "JavaScript Language";
str = str.toLocaleLowerCase();
console.log(str);

str = str.toUpperCase();
console.log(str);

//slice() function:
//.slice() extracts the part of string and returns the extracted part in new string

let str1 = "Hello World";
let extractedStr = str1.slice(0, 5); //0 included, 5 excluded [startIndex, endIndex)
console.log(extractedStr);

//indexOf() and lastIndexOf():
//indexOf() -- it return the index of the first occurance of a specified text in a string
//return -1 if not found

let indexChecking = "To be or not to be";
let indexStoring = indexChecking.indexOf("be");

console.log("IndexOf function: "+indexStoring); //3


let indexStoring1 = indexChecking.indexOf("be", 5); //(indexWord, atWhatPointYouWantToStartSearch) -- second parameter is optional
console.log("IndexOf with an optional parameter: "+indexStoring1); //16

//lastIndexOf() -- it returns the index of the last occurance of a specified text in a string:
// start searching from last to beginning:
// return -1 if not found

let indexStoring2 = indexChecking.lastIndexOf("be", 10); 
console.log("LastIndexOf with an optional parameter: "+indexStoring2); //3


//charAt() -- it takes the single index input and return the character at that index
let my_name = "Wania Kazmi";
let charStr = my_name.charAt(0);
console.log(charStr);


//replace() -- it replaces the a specified value with a new value in string
//does not change the string it is called on but it returns the new string
let strToBeReplaced = "To be or not to be";
let replaceStr = strToBeReplaced.replace("to", "hello");
console.log("Replaced String: "+replaceStr); //by default it only replaces the first match


//to replace all be of string -- we use /g flag (global match) 
let replaceGlobalStr = strToBeReplaced.replace(/be/g, "hello"); // /be/g
console.log("Replaced string Globally: "+replaceGlobalStr);

//case insensitive expression -- for this we use /i flag
let caseInsensitive = strToBeReplaced.replace(/to/i, "hello"); // /to/gi
console.log("Case insensitive Replacement: "+caseInsensitive);

//global match replacement
let caseInsensitive2 = strToBeReplaced.replace(/to/gi, "hello");
console.log("Case insensitive Global Replacement: "+caseInsensitive2);


//split() function:
let splitFunctionStr = "To,be not to be";
let splittingStr = splitFunctionStr.split(" "); //split with spaces
console.log(splittingStr);

let commaSplit = splitFunctionStr.split(","); //splitting by comma
console.log(commaSplit);


//Other String Functions
//charCodeAt()
//concat()
//endsWith()
//includes()
//match()
//repeat()
//replace()
//search()
//startsWith()
//substr()
//trim()



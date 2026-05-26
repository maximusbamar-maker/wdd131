// 1. Javascript arrays
// an array is a colection of elements
let names = ["Aaron", "Andrea", "Andrew", "Angela", "Austin", "Benjamin", "Craig", "Corbin", "David", "Denny", "Diana", "Elizabeth", "Emily", "Hailey", "Jeremy", "Judy", "Kate", "Kathy", "Kenzie", "Kevin", "Laura", "Lauren", "Luke", "Mason", "Max", "Parker", "Spencer", "Steve", "Tanner", "Tyson"];
console.log(names);
console.log(names[12]);
console.log(names[names.length - 1]); // logs the last element in the list

let ages = [1, 2, 3, 4, 5];

let mixArray = ["Olive", 8, "Charles", 6, "Eliza", 2]; // this is possible but a terrible idea
console.log(mixArray);


// 2. Javascript objects
// {} are used to create an object
// objects are great for storing mixed data types
let studentName = "Bob";
let stutdentClass = "WDD131"; // objects store this but better

// literal objects
// a literal object is created and filled at the same time
let student = {
    // key/value pairs
    name : "Bob",
    class : "WDD131",
    grade : "A",
    age : 27,
}

// this makes it possible to reuse a page as many different similar pages
// an exemple of this is Amazon's product page, they only need to create one product page, then they can dinamically fill if with any product

console.log(student);
console.log(student.class); // object_name.key_name is how a specific value can be accessed from an object


// 3. Array methods
// => is an annonomus function that has no name
// .forEach passes each item in the array one at a time
names.forEach((name) => {
    // this code executes once per each item in the array
    console.log("hey " + name);
    // break can be used in the middle to end if you have a reason to
})

// .map createas a NEW array with values returned from fuction
let newNameArray = names.map((name) => {
    return name + " Person";
})
console.log(newNameArray)

// .filter returns a new array with filtered values
let filteredArray = names.filter((name) => {
    // filter returns a boolian, True keep, false don't keep
    // filter can be used to make a simple search function
    return name[0] === 'M';
})
console.log(filteredArray);

//.reduce runs the whole array through one function to return one value
const numbers = [175, 50, 25];

num = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}
console.log(num)

// used to insert html in the form of a string into a website, it uses `` to store the string
const studentSummary = `
  <div class="student-summary">
    <h2>${student.name}</h2>
    <p>${student.class} - ${student.grade}</p>
  </div>
`;
console.log(studentSummary)
//Object Destructure

const user = {
  id:21,
  name:"Shaiful",
  age:25,
  education:{
    degree:"BSc in CSE",
  }
};

const {name} = user;
console.log(name);

const {name : title} = user; //Alius name as title
console.log(title);

const {education:{degree}} = user; //Accessing nested object
console.log(degree);

// const {education:{degree} = {}} = user;  // use default value if property is not present for error handling
// console.log(degree);


//Array Destructure
const numbers = [1,2,3,4,5];

var [a,,c] = numbers;

console.log(a,c);
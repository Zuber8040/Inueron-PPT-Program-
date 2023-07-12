Q.1 Explain Hoisting in JavaScript

Ans:
Hoisting is a concept that enables us to extract values of variables and functions even before initializing/assigning value without getting errors and this happens during the 1st phase (memory creation phase) of the Execution Context.

Features of Hoisting:

- In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local. 
- It allows us to call functions before even writing them in our code. 

```

	// Hoisting
	function codeHoist(){
		a = 10;
		let b = 50;
	}
	codeHoist();

	console.log(a); // 10
	console.log(b); // ReferenceError : b is not defined

```

Q.2 Explain Temporal Dead Zone?

Ans:
Variables declared using let and the constants declared using const are hoisted but are in a TDZ. This prevents them from being accessed before their declaration has actually been executed during the step-by-step execution of the code.

Temporal Dead Zone is the period of time during which the let and const declarations cannot be accessed.

```
function print() {
  function log() {
    console.log(age);
  }

  const age = 20;
  log();
}

print(); // 20
```


Q.3 Difference between var & let?

Ans:

```
The keywords let and var both declare new variables in JavaScript. The difference between let and var is in the scope of the variables they create:

Variables declared by let are only available inside the block where they’re defined.
Variables declared by var are available throughout the function in which they’re declared.


```


Q.4 What are the major features introduced in ECMAScript 6?

Ans:

- let and const Keywords
- Arrow Functions
- Multi-line Strings
- Default Parameters
- Template Literals
- Destructuring Assignment
- Enhanced Object Literals
- Promises
- Classes
- Modules


Q.5 What is the difference between let and const ?

Ans:

let :

let is now preferred for variable declaration. It's no surprise as it comes as an improvement to var declarations. It also solves the problem with var that we just covered. Let's consider why this is so.

Let is block scoped
A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block.

So a variable declared in a block with let  is only available for use within that block. Let me explain this with an example:

```
 let greeting = "say Hi";
   let times = 4;

   if (times > 3) {
        let hello = "say Hello instead";
        console.log(hello);// "say Hello instead"
    }
   console.log(hello) // hello is not defined

```

Const
Variables declared with the const maintain constant values. const declarations share some similarities with let declarations.

const declarations are block scoped
Like let declarations, const declarations can only be accessed within the block they were declared.

const cannot be updated or re-declared
This means that the value of a variable declared with const remains the same within its scope. It cannot be updated or re-declared. So if we declare a variable with const, we can neither do this:


```
  const greeting = "say Hi";
    greeting = "say Hello instead";
    // error: Assignment to constant variable. 
```

Q.6  What is template literals in ES6 and how do you use them?

Ans:

Template literals are a new feature introduced in ECMAScript 2015/ ES6. It provides an easy way to create multiline strings and perform string interpolation. Template literals are the string literals and allow embedded expressions.

 template literals are enclosed by the backtick (` `) 


 ```
 var str = `string value`;  
 ```

Q.7 What’s difference between map & forEach?

Ans:

forEach : 

- The forEach() method does not returns a  new array based on the given array.
- The forEach() method returns “undefined“.	

- The forEach() method doesn’t return anything hence the method chaining technique cannot be applied here. 	

- It is not executed for empty elements.	

map() 

- The map() method returns an entirely new array.

- The map() method returns the newly created array according to the provided callback function.

- With the map() method, we can chain other methods like, reduce(),sort() etc.

- It does not change the original array.



Q.8 How can you destructure objects and arrays in ES6?

Ans:

Destructuring means to break down a complex structure into simpler parts. With the syntax of destructuring, you can extract smaller fragments from objects and arrays. It can be used for assignments and declaration of a variable.

```
var arr = ["Hello", "World"]  
  
// destructuring assignment  
var [first, second] = arr;  
  
console.log(first); // Hello  
console.log(second); // World  


```

Object Destructuring:

Say we want to extract data from an object and assign to new variables. Prior to ES6, how would this be done?

```
let person = {name: "Sarah", country: "Nigeria", job: "Developer"};

let name = person.name;
let country = person.country;
let job = person.job;

console.log(name);//"Sarah"
console.log(country);//"Nigeria"
console.log(job);//Developer"
```


Q.9 How can you define default parameter values in ES6 functions?s

Ans:

Function parameters with default values are initialized with default values if they contain no value or are undefined. JavaScript function parameters are defined as undefined by default. However, it may be useful to set a different default value. That is where default parameters come into play.

Syntax:

```
function name(parameter=value,...parameters) {

}


```

Example :
```
function multiply(a, b) {
	return a * b;
}

let num1 = multiply(5);
console.log(num1);
let num2 = multiply(5, 8);
console.log(num2);

```


Q.10 What is the purpose of the spread operator (...) in ES6?

Ans:

Spread Operator is a very simple and powerful feature introduced in the ES6 standard of JavaScript, which helps us to write nicer and shorter code. The JavaScript spread operator is denoted by three dots (…). The spread operator helps the iterable objects to expand into individual elements. Iterable objects are those on which we can use a loop, for example, Array, Map, Set, etc. In other words, the spread operator allows us to copy all elements from the existing array or object into another array or object.


```
const cars1 = ["AUDI", "BMW", "TATA", "MERCEDES"];
// Copied elements from cars1 to cars2 here
const cars2 = [...cars1];

// Copied elements from cars1 to cars3 here
// and also add some new elements in cars3
const cars3 = [...cars1, "NISSAN", "TOYOTA"];

console.log(cars1);
console.log(cars2);
console.log(cars3);
```
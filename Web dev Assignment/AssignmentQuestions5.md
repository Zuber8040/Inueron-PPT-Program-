# Assignment Questions 5

💡 **Q.1** What’s difference between Synchronous and Asynchronous?

Ans:

Synchronous:

- Synchronous data transmission is a data transfer method in which a continuous stream of data signals is accompanied by timing signals.

- Synchronous handler do not return until it finishes processing the HTTP request for which it is called.

- Users need to wait until it sending finishes before getting a response from the server.

- It sends data in the form of blocks or frames.

Asynchronous :

- Asynchronous data transmission is a data transfer method in which the sender and the receiver use the flow control method.

- Asynchronous handler helps you to run a process independently of sending a response to the user.

- Users do not have to wait until sending completes before receiving a response from the server.

- Data is sent in the form of character or byte.

- Asynchronous transmission method is slow.

**Q.2** What are Web Apis ?

A Web API is a developer's dream.

- It can extend the functionality of the browser
- It can greatly simplify complex functions
- It can provide easy syntax to complex code.

**Q.3** Explain SetTimeOut and setInterval ?

Ans:

JavaScript setTimeout() Method: This method executes a function, after waiting a specified number of milliseconds.

```
<button onclick="setTimeout(gfg, 2000);">
	Press me
</button>

	function gfg() {
		alert('Welcome to GeeksforGeeks');
	}
```

JavaScript setInterval() Method: The setInterval() method repeats a given function at every given time interval.

```

<p id="GFG"></p>

	var myVar = setInterval(myTimer, 1000);

	function myTimer() {
		document.getElementById("GFG")
		.innerHTML +="<p>Hi</p>";
	}


```

**Q.4** how can you handle Async code in JavaScript?

Ans:

With asynchronous code, multiple tasks can execute at the same time while tasks in the background finish. This is what we call non-blocking code. The execution of other code won't stop while an asynchronous task finishes its work.

```
let greet_one = "Hello"
let greet_two = "World!!!"
console.log(greet_one)
setTimeout(function(){
    console.log("Asynchronous");
}, 10000)
console.log(greet_two);
```

In the above example, if you run the code on your machine you will see greet_one and greet_two logged even there is code in between those 2 logs.


Now, setTimeout is asynchronous so it runs in background, allowing code after it to execute while it runs. After 10 seconds, Asynchronous will print because we set a time of 10 seconds in setTimeout to execute it after 10 seconds.



💡 **Q.5** What are Callbacks & Callback Hell ?

Ans:

Callback: A callback is a function that is passed as an argument to another function that executes the callback based on the result. They are basically functions that are executed only after a result is produced. Callbacks are an important part of asynchronous JavaScript.


```
// Main function
const mainFunction = (callback) => {
	setTimeout(() => {
		callback([2, 3, 4]);
	}, 2000)
}

// Add function
const add = (array) => {
	let sum = 0;
	for(let i of array) {
		sum += i;
	}
	console.log(sum);
}

// Calling main function
mainFunction(add);


```

Explanation: Here we have used setTimeout in the mainFunction to mimic some I/O Operations or a request call. The callback function passed is used to sum up the elements of the array. After 2 seconds have passed, the sum of the array is printed which is 9.



Callback Hell: Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure. Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects the readability and maintainability of the code. 

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible"
		content="IE=edge">
	<meta name="viewport"
		content="width=device-width, initial-scale=1.0">

	<title>Callback Hell</title>
	
	<style>
		* {
			padding: none;
			margin: none;
			box-sizing: border-box;
		}

		.word {
			color: #308d46;
			font-size: 4rem;
			transition: all .5s ease-in;
			margin: 0 5px;
			transform: translateY(3.8rem);
			opacity: 0;
		}

		body {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 95vw;
			height: 95vh;
		}

		.container {
			overflow: hidden;
			display: flex;
			flex-direction: row;
		}

		.animate {
			opacity: 1;
			transform: translateY(0);
		}
	</style>
</head>

<body>
	<div class="container">
		<h2 class="word">Geeks</h2>
		<h2 class="word">For</h2>
		<h2 class="word">Geeks</h2>
	</div>
</body>
<script>
	let words = document.querySelectorAll(".word");

	const animateAll = (animate) => {
		setTimeout(() => {
			animate(words[0]);
			setTimeout(() => {
				animate(words[1]);
				setTimeout(() => {
					animate(words[2]);
				}, 1000)
			}, 1000)
		}, 1000)
	}

	const animate = (word) => {
		word.classList.add("animate");
	}

	animateAll(animate);
</script>
</html>

```
Output: We can notice that the animateAll function takes a pyramid structure, thereby making it difficult to read.



 **Q.6** What are Promises & Explain Some Three Methods of Promise

Ans: 
In JavaScript, a promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not.

A promise may have one of three states.

- Pending
- Fulfilled
- Rejected


A promise starts in a pending state. That means the process is not complete. If the operation is successful, the process ends in a fulfilled state. And, if an error occurs, the process ends in a rejected state.


```
let promise = new Promise(function(resolve, reject){
     //do something
});


```

Let's suppose that the program below is an asynchronous program. Then the program can be handled by using a promise.


```
const count = true;

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

console.log(countValue);
```


Promises are useful when you have to handle more than one asynchronous task, one after another. For that, we use promise chaining.


JavaScript then() method
The then() method is used with the callback when the promise is successfully fulfilled or resolved.

The syntax of then() method is:

```
promiseObject.then(onFulfilled, onRejected);
```

Example 2: Chaining the Promise with then()

```

// returns a promise

let countValue = new Promise(function (resolve, reject) {
  resolve("Promise resolved");
});

// executes when promise is resolved successfully

countValue
  .then(function successValue(result) {
    console.log(result);
  })

  .then(function successValue1() {
    console.log("You can call multiple functions this way.");
  });
  
```
JavaScript catch() method
The catch() method is used with the callback when the promise is rejected or if an error occurs. For example,

```
// returns a promise
let countValue = new Promise(function (resolve, reject) {
   reject('Promise rejected'); 
});

// executes when promise is resolved successfully
countValue.then(
    function successValue(result) {
        console.log(result);
    },
 )

// executes if there is an error
.catch(
    function errorValue(result) {
        console.log(result);
    }
);
```

**Q.7** What’s async & await Keyword in JavaScript

Ans:
JavaScript is always synchronous and single-threaded that provides the event loops. The event loops enable us to queue up an activity. This activity will not happen until the loops become available after the program that queued the action has completed the execution. However, our program contains a large number of functionalities, which causes our code to be asynchronous. The Async/Await functionality is one of them. Async/Await is an extension of promises that we get as language support.

```

// Syntax
Async function myfirstfunction() {  
return "Hello World"  
}  
```
💡 **Q.8** Explain Purpose of Try and Catch Block & Why do we need it?

Ans:
The objective of a try, catch block is to try and do something which could fail and raise an exception (e.g., read a file from disk, but the file might not be there, etc.). After catching an exception, you can handle it.

```
try {
   riskyOperation();
}
catch (ExpectedException) {
   handleException();
}

```

💡 **Q.9** Explain fetch
Ans:
Fetch API comes with a fetch () method that allows you to fetch data from all sorts of different places and work with the data fetched. It allows you to make an HTTP request, i.e., either a GET request (for getting data) or POST request (for posting data).

```
fetch('url')
  .then(response => {
    //handle response            
    console.log(response);
  })
  .then(data => {
    //handle data
    console.log(data);
  })
  .catch(error => {
    //handle error
  });

```

**Q.10** How do you define an asynchronous function in JavaScript using async/await?

Ans:

The async function declaration creates a binding of a new async function to a given name. The await keyword is permitted within the function body, enabling asynchronous, promise-based behavior to be written in a cleaner style and avoiding the need to explicitly configure promise chains.


```
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // Expected output: "resolved"
}

asyncCall();

```
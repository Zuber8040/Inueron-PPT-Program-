**Question 1**

Given an array **arr[ ]** of size **N** having elements, the task is to find the next greater element for each element of the array in order of their appearance in the array.Next greater element of an element in the array is the nearest element on the right which is greater than the current element.If there does not exist next greater of current element, then next greater element for current element is -1. For example, next greater of the last element is always -1.

**Example 1:**

```
Input:
N = 4, arr[] = [1 3 2 4]
Output:
3 4 4 -1
Explanation:
In the array, the next larger element
to 1 is 3 , 3 is 4 , 2 is 4 and for 4 ?
since it doesn't exist, it is -1.

```

**Example 2:**

```
Input:
N = 5, arr[] [6 8 0 1 3]
Output:
8 -1 1 3 -1
Explanation:
In the array, the next larger element to
6 is 8, for 8 there is no larger elements
hence it is -1, for 0 it is 1 , for 1 it
is 3 and then for 3 there is no larger
element on right and hence -1.
```

Solution:

```
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const map = {};
  const stack = [];
  nums2.forEach(n => {
    while (stack.length > 0 && stack[stack.length - 1] < n) {
      map[stack.pop()] = n;
    }
    stack.push(n);
  });
  return nums1.map(n => map[n] || -1);
};

```


 **Question 2**

Given an array **a** of integers of length **n**, find the nearest smaller number for every element such that the smaller element is on left side.If no small element present on the left print -1.

**Example 1:**

```
Input: n = 3
a = {1, 6, 2}
Output: -1 1 1
Explaination: There is no number at the
left of 1. Smaller number than 6 and 2 is 1.
```

**Example 2:**

```
Input: n = 6
a = {1, 5, 0, 3, 4, 5}
Output: -1 1 -1 0 3 4
Explaination: Upto 3 it is easy to see
the smaller numbers. But for 4 the smaller
numbers are 1, 0 and 3. But among them 3
is closest. Similary for 5 it is 4.
```

Solution :

```
<script>


// Javascript implementation
// of simple algorithm to find
// smaller element on left side


// Prints smaller elements on
// left side of every element
function printPrevSmaller( arr, n)
{
	// Always print empty or '_' for first element
	document.write("_, ");

	// Start from second element
	for (let i=1; i<n; i++)
	{
		// look for smaller element on left of 'i'
		let j;
		for (j=i-1; j>=0; j--)
		{
			if (arr[j] < arr[i])
			{
				document.write(arr[j] + ", ");
				break;
			}
		}

		// If there is no smaller element on left of 'i'
		if (j == -1)
		document.write("_, ");
	}
}

	// Driver program
	
	let arr = [ 1, 3, 0, 2, 5 ];
	let n = arr.length;
	printPrevSmaller(arr, n);
	


```

<aside>
💡 **Question 3**

Implement a Stack using two queues **q1** and **q2**.

**Example 1:**

```
Input:
push(2)
push(3)
pop()
push(4)
pop()
Output:3 4
Explanation:
push(2) the stack will be {2}
push(3) the stack will be {2 3}
pop()   poped element will be 3 the
        stack will be {2}
push(4) the stack will be {2 4}
pop()   poped element will be 4

```

**Example 2:**

```
Input:
push(2)
pop()
pop()
push(3)
Output:2 -1
```

Solution :

```

/*Javascript Program to implement a stack using
two queue */

// Two inbuilt queues
class Stack {
	constructor() {
		this.q1 = [];
		this.q2 = [];
	}

	push(x) {

		// Push x first in isEmpty q2
		this.q2.push(x);
		// Push all the remaining
		// elements in q1 to q2.
		while (this.q1.length != 0) {
			this.q2.push(this.q1[0]);
			this.q1.shift();

		}

		// swap the names of two queues
		this.q = this.q1;
		this.q1 = this.q2;
		this.q2 = this.q;
	}

	pop() {
		// if no elements are there in q1
		if (this.q1.length == 0)
			return;
		this.q1.shift();
	}

	top() {
		if (this.q1.length == 0)
			return -1;
		return this.q1[0];
	}

	size() {
		console.log(this.q1.length);
	}

	isEmpty() {
		// return true if the queue is empty.
		return this.q1.length == 0;
	}

	front() {
		return this.q1[0];
	}
}

// Driver code


let s = new Stack();
s.push(1);
s.push(2);
s.push(3);

console.log("current size: ");
s.size();
console.log(s.top());
s.pop();
console.log(s.top());
s.pop();
console.log(s.top());

console.log("current size: ");
s.size();


```

<aside>
💡 **Question 4**

You are given a stack **St**. You have to reverse the stack using recursion.

**Example 1:**

```
Input:St = {3,2,1,7,6}
Output:{6,7,1,2,3}
```

**Example 2:**

```
Input:St = {4,3,9,6}
Output:{6,9,3,4}
```

Solution :

```
<script>

// JavaScript code to reverse a
// stack using recursion

// using Stack class for
// stack implementation
let st = [];

// Below is a recursive function
// that inserts an element
// at the bottom of a stack.
function insert_at_bottom(x)
{
	if(st.length==0)
		st.push(x);
	else
	{
		// All items are held in Function
			// Call Stack until we reach end
			// of the stack. When the stack becomes
			// empty, the st.size() becomes 0, the
			// above if part is executed and
			// the item is inserted at the bottom
			let a = st.pop();
			insert_at_bottom(x);

			// push allthe items held
			// in Function Call Stack
			// once the item is inserted
			// at the bottom
			st.push(a);
	}
	
	
}

// Below is the function that
	// reverses the given stack using
	// insert_at_bottom()
function reverse()
{
	if(st.length > 0)
		{
			
			// Hold all items in Function
			// Call Stack until we
			// reach end of the stack
			let x = st.pop();
			reverse();
			
			// Insert all the items held
			// in Function Call Stack
			// one by one from the bottom
			// to top. Every item is
			// inserted at the bottom
			insert_at_bottom(x);
		}
}

// Driver Code

// push elements into
// the stack
st.push('1');
st.push('2');
st.push('3');
st.push('4');

document.write("Original Stack<br>");

document.write(st.join(" ")+"<br>");

// function to reverse
// the stack
reverse();

document.write("Reversed Stack<br>");

document.write(st.join(" "));




```

<aside>
💡 **Question 5**

You are given a string **S**, the task is to reverse the string using stack.

**Example 1:**

```
Input: S="GeeksforGeeks"
Output: skeeGrofskeeG
```

Solution :

```
<script>

// Javascript program to reverse
// String using Stack

// stack
class Stack
{
	size;
	top;
	a = [];

	// Function to check if stack is empty
	isEmpty()
	{
		return(this.top < 0);
	}
	
	constructor(n)
	{
		this.top = -1;
		this.size = n;
		this.a = new Array(this.size);
	}

	// Function to push element in Stack
	push(x)
	{
		if (this.top >= this.size)
		{
			document.write("Stack Overflow<br>");
			return false;
		}
		else
		{
			this.a[++this.top] = x;
			return true;
		}
	}

	// Function to pop element from stack
	pop()
	{
		if (this.top < 0)
		{
			document.write("Stack Underflow<br>");
			return 0;
		}
		else
		{
			let x = this.a[this.top--];
			return x;
		}
	}
}

// Function to reverse the string
function reverse(str)
{
	
	// Create a stack of capacity
	// equal to length of string
	let n = str.length;
	let obj = new Stack(n);
	
	// Push all characters of string
	// to stack
	let i;
	for(i = 0; i < n; i++)
		obj.push(str[i]);

	// Pop all characters of string
	// and put them back to str
	for(i = 0; i < n; i++)
	{
		let ch = obj.pop();
		str[i] = ch;
	}
}

// Driver Code
let s = "GeeksQuiz".split("");

// Call reverse method
reverse(s);

// Print the reversed string
document.write("Reversed string is " +
			s.join(""));


```

<aside>
💡 **Question 6**

Given string **S** representing a postfix expression, the task is to evaluate the expression and find the final value. Operators will only include the basic arithmetic operators like ***, /, + and -**.

**Example 1:**

```
Input: S = "231*+9-"
Output: -4
Explanation:
After solving the given expression,
we have -4 as result.

```

**Example 2:**

```
Input: S = "123+*8-"
Output: -3
Explanation:
After solving the given postfix
expression, we have -3 as result.
```

Solution :

```


// Javascript program to evaluate value of a postfix expression

// Method to evaluate value of a postfix expression
function evaluatePostfix(exp)
{
	//create a stack
		let stack=[];
		
		// Scan all characters one by one
		for(let i=0;i<exp.length;i++)
		{
			let c=exp[i];
			
			// If the scanned character is an operand (number here),
			// push it to the stack.
			if(! isNaN( parseInt(c) ))
			stack.push(c.charCodeAt(0) - '0'.charCodeAt(0));
			
			// If the scanned character is an operator, pop two
			// elements from stack apply the operator
			else
			{
				let val1 = stack.pop();
				let val2 = stack.pop();
				
				switch(c)
				{
					case '+':
					stack.push(val2+val1);
					break;
					
					case '-':
					stack.push(val2- val1);
					break;
					
					case '/':
					stack.push(val2/val1);
					break;
					
					case '*':
					stack.push(val2*val1);
					break;
			}
			}
		}
		return stack.pop();
}

// Driver program to test above functions
let exp="231*+9-";
document.write("postfix evaluation: "+evaluatePostfix(exp));

```

<aside>
💡 **Question 7**

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the `MinStack` class:

- `MinStack()` initializes the stack object.
- `void push(int val)` pushes the element `val` onto the stack.
- `void pop()` removes the element on the top of the stack.
- `int top()` gets the top element of the stack.
- `int getMin()` retrieves the minimum element in the stack.

You must implement a solution with `O(1)` time complexity for each function.

**Example 1:**

```
Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
```

Solution :


```
var MinStack = function() {
  this.elements = [];
};

/**

 @param {number} x
 @return {void}
 */
MinStack.prototype.push = function(x) {
  this.elements.push({
    value: x,
    min: this.elements.length === 0 ? x : Math.min(x, this.getMin()),
  });
};
/**

 @return {void}
 */
MinStack.prototype.pop = function() {
  this.elements.pop();
};
/**

 @return {number}
 */
MinStack.prototype.top = function() {
  return this.elements[this.elements.length - 1].value;
};
/**

 @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.elements[this.elements.length - 1].min;
};

```

<aside>
💡 **Question 8**

Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.

**Example 1:**

!https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png

```
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

```

**Example 2:**

```
Input: height = [4,2,0,3,2,5]
Output: 9
```

Solution :

```
/** 1) Brute force */
// time O(n^2)
// space O(1)
function trap(height) {
  if (height == null || height.length === 0) return 0;

  let res = 0;
  for (let i = 0; i < height.length; i++) {
    let lMax = 0;
    let rMax = 0;

    for (let j = 0; j < i; j++) {
      lMax = Math.max(lMax, height[j]);
    }
    for (let j = i + 1; j < height.length; j++) {
      rMax = Math.max(rMax, height[j]);
    }

    const water = Math.min(lMax, rMax) - height[i];
    if (water > 0) res += water;
  }

  return res;
}

/** 2) Dynamic programming */
// time O(n)
// space O(n)
function trap(height) {
  if (height == null || height.length === 0) return 0;

  let res = 0;
  let l = height.length;
  let lMax = {};
  let rMax = {};

  lMax[0] = height[0];
  for (let i = 1; i < l; i++) {
    lMax[i] = Math.max(height[i], lMax[i - 1]);
  }

  rMax[l - 1] = height[l - 1];
  for (let i = l - 2; i >= 0; i--) {
    rMax[i] = Math.max(height[i], rMax[i + 1]);
  }

  for (let i = 0; i < height.length; i++) {
    res += Math.min(lMax[i], rMax[i]) - height[i];
  }

  return res;
}

/** 3) Stack */
// time O(n)
// space O(n)
function trap(height) {
  let res = 0;
  let i = 0;
  const st = [];

  while (i < height.length) {
    while (st.length !== 0 && height[i] > height[st[st.length - 1]]) {
      const top = st[st.length - 1];
      st.pop();

      if (st.length === 0) break;

      const dist = i - st[st.length - 1] - 1;
      const h = Math.min(height[i], height[st[st.length - 1]]) - height[top];
      res += dist * h;
    }
    st.push(i);
    i++;
  }
  return res;
}

/** 4) Two pointers */
// time O(n)
// space O(1)
function trap(height) {
  if (height == null || height.length === 0) return 0;

  let l = 0;
  let r = height.length - 1;

  let lMax = 0;
  let rMax = 0;

  let res = 0;

  while (l < r) {
    lMax = Math.max(lMax, height[l]);
    if (height[l] < lMax) {
      res += lMax - height[l];
    }

    rMax = Math.max(rMax, height[r]);
    if (height[r] < rMax) {
      res += rMax - height[r];
    }

    height[l] < height[r] ? l++ : r--;
  }

  return res;
}
```
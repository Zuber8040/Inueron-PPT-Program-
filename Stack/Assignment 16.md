 **Question 1**

Given an array, for each element find the value of the nearest element to the right which is having a frequency greater than that of the current element. If there does not exist an answer for a position, then make the value ‘-1’.

**Examples:**

```
Input: a[] = [1, 1, 2, 3, 4, 2, 1]
Output : [-1, -1, 1, 2, 2, 1, -1]

Explanation:
Given array a[] = [1, 1, 2, 3, 4, 2, 1]
Frequency of each element is: 3, 3, 2, 1, 1, 2, 3

Lets calls Next Greater Frequency element as NGF
1. For element a[0] = 1 which has a frequency = 3,
   As it has frequency of 3 and no other next element
   has frequency more than 3 so  '-1'
2. For element a[1] = 1 it will be -1 same logic
   like a[0]
3. For element a[2] = 2 which has frequency = 2,
   NGF element is 1 at position = 6  with frequency
   of 3 > 2
4. For element a[3] = 3 which has frequency = 1,
   NGF element is 2 at position = 5 with frequency
   of 2 > 1
5. For element a[4] = 4 which has frequency = 1,
   NGF element is 2 at position = 5 with frequency
   of 2 > 1
6. For element a[5] = 2 which has frequency = 2,
   NGF element is 1 at position = 6 with frequency
   of 3 > 2
7. For element a[6] = 1 there is no element to its
   right, hence -1
```

```
Input : a[] = [1, 1, 1, 2, 2, 2, 2, 11, 3, 3]
Output : [2, 2, 2, -1, -1, -1, -1, 3, -1, -1]
```

Solution :

```

	// Javascript program of Next Greater Frequency Element
	
	/*NFG function to find the
	next greater frequency
	element for each element
	in the array*/
	function NFG(a, n, freq)
	{

		// stack data structure to store
		// the position of array element
		let s = [];
		s.push(0);

		// res to store the value of next greater
		// frequency element for each element
		let res = new Array(n);
		for (let i = 0; i < n; i++)
			res[i] = 0;

		for (let i = 1; i < n; i++)
		{
		
			/* If the frequency of the element which is
				pointed by the top of stack is greater
				than frequency of the current element
				then Push the current position i in stack*/

			if (freq[a[s[s.length - 1]]] > freq[a[i]])
				s.push(i);
			else
			{
			
				/*If the frequency of the element which
				is pointed by the top of stack is less
				than frequency of the current element, then
				Pop the stack and continuing Popping until
				the above condition is true while the stack
				is not empty*/

				while (freq[a[s[s.length - 1]]]
						< freq[a[i]]
					&& s.length > 0)
				{
					res[s[s.length - 1]] = a[i];
					s.pop();
				}

				// now Push the current element
				s.push(i);
			}
		}

		while (s.length > 0)
		{
			res[s[s.length - 1]] = -1;
			s.pop();
		}
		document.write("[");
		for (let i = 0; i < n - 1; i++)
		{
		
			// Print the res list containing next
			// greater frequency element
			document.write(res[i] + ", ");
		}
		document.write(res[n - 1] + "]");
	}
	
	let a = [ 1, 1, 2, 3, 4, 2, 1 ];
	let len = 7;
	let max = Number.MIN_VALUE;
	for (let i = 0; i < len; i++)
	{
	
	// Getting the max element of the array
	if (a[i] > max)
	{
		max = a[i];
	}
	}
	let freq = new Array(max + 1);

	for (let i = 0; i < max + 1; i++)
	freq[i] = 0;

	// Calculating frequency of each element
	for (let i = 0; i < len; i++)
	{
	freq[a[i]]++;
	}
	NFG(a, len, freq);
	
	
```

**Question 2**

Given a stack of integers, sort it in ascending order using another temporary stack.

**Examples:**

```
Input : [34, 3, 31, 98, 92, 23]
Output : [3, 23, 31, 34, 92, 98]

Input : [3, 5, 1, 4, 2, 8]
Output : [1, 2, 3, 4, 5, 8]
```

Solution :

```

	// Javascript program to sort a stack using
	// a auxiliary stack.
	
	// This function return the sorted stack
	function sortstack(input)
	{
		let tmpStack = [];
		while (input.length > 0)
		{
			// pop out the first element
			let tmp = input.pop();

			// while temporary stack is not empty and
			// top of stack is lesser than temp
			while (tmpStack.length > 0 && tmpStack[tmpStack.length - 1] < tmp)
			{
				// pop from temporary stack and
				// push it to the input stack
				input.push(tmpStack[tmpStack.length - 1]);
				tmpStack.pop()
			}

			// push temp in temporary of stack
			tmpStack.push(tmp);
		}
		return tmpStack;
	}
	
	let input = [];
	input.push(34);
	input.push(3);
	input.push(31);
	input.push(98);
	input.push(92);
	input.push(23);

	// This is the temporary stack
	let tmpStack = sortstack(input);
	document.write("Sorted numbers are:" + "</br>");

	while (tmpStack.length > 0)
	{
		document.write(tmpStack[tmpStack.length - 1] + " ");
		tmpStack.pop();
	}
	


```

<aside>
💡 **Question 3**

Given a stack with **push()**, **pop()**, and **empty()** operations, The task is to delete the **middle** element ****of it without using any additional data structure.

Input  : Stack[] = [1, 2, 3, 4, 5]

Output : Stack[] = [1, 2, 4, 5]

Input  : Stack[] = [1, 2, 3, 4, 5, 6]

Output : Stack[] = [1, 2, 4, 5, 6]

Solution :

```
class node {
	constructor(value)
	{
		this.value = value,
		this.prev = null,
		this.next = null
	}
}

class Mystack {
	constructor(){
	this.head = null,
	this.middle = this.head,
	this.tail = this.head,
	this.size = 0
	}
	
	// Function to insert value in a stack
	push(val)
	{
		if (!this.head) {
			let temp = new node(val)
			this.head = temp;
			this.middle = this.head;
			this.tail = this.head;
			this.size++
		}
		else {
			let newTail = new node(val)
			this.tail.next = newTail
			newTail.prev = this.tail
			this.tail = this.tail.next
			this.size++
			if (this.size % 2 !== 0)
			{
				this.middle = this.middle.next
			}
		}
	}
	
	// Function to remove values from stack
	pop()
	{
		if (!this.head) {
			console.log('stack is empty')
		}
		else {
			let temp = this.tail.prev
			this.tail = temp
			this.tail.next = null
			this.size--
			if (this.size % 2 === 0)
			{
				this.middle = this.middle.prev
			}
		}
	}
	
	// Function to get the middle element of the stack
	findMiddle(){
	console.log(this.middle.value)
	return this.middle.value
	}
	
	// Function to delete the middle value of the stack
	deleteMiddle()
	{
		let leader = this.middle.prev;
		let after = this.middle.next;
		leader.next = after
		after.prev = leader
		if (this.size % 2 !== 0)
		{
			this.middle = leader
		}
		else {
			this.middle = after
		}
		this.size--
		console.log(this.middle.value)
	}
	
	// Function to print the remaining stack
	printStack()
	{
		let curr = this.head;
		let arr = []
		while (curr)
		{
			arr.push(curr.value)
			curr = curr.next;
		}
		console.log(arr)
		return arr
	}
}

const helloStack = new Mystack()
helloStack.push(10)
helloStack.push(15)
helloStack.push(30)
helloStack.push(5)
helloStack.push(8)
helloStack.push(11)
helloStack.pop()
helloStack.findMiddle()
helloStack.deleteMiddle()
helloStack.deleteMiddle()
helloStack.printStack()

```

**Question 4**

Given a Queue consisting of first **n** natural numbers (in random order). The task is to check whether the given Queue elements can be arranged in increasing order in another Queue using a stack. The operation allowed are:

1. Push and pop elements from the stack
2. Pop (Or Dequeue) from the given Queue.
3. Push (Or Enqueue) in the another Queue.

**Examples :**

Input : Queue[] = { 5, 1, 2, 3, 4 } 

Output : Yes 

Pop the first element of the given Queue 

i.e 5. Push 5 into the stack. 

Now, pop all the elements of the given Queue and push them to second Queue. 

Now, pop element 5 in the stack and push it to the second Queue.   

Input : Queue[] = { 5, 1, 2, 6, 3, 4 } 

Output : No 

Push 5 to stack. 

Pop 1, 2 from given Queue and push it to another Queue. 

Pop 6 from given Queue and push to stack. 

Pop 3, 4 from given Queue and push to second Queue. 

Now, from using any of above operation, we cannot push 5 into the second Queue because it is below the 6 in the stack.


Solution :

```

	
	
	let q = [];
	
	// Function to check if given
	// queue element can be sorted
	// into another queue using a stack.
	function checkSorted(n)
	{
		let st = [];
		let expected = 1;
		let fnt;
	
		// while given Queue
		// is not empty.
		while (q.length != 0)
		{
			fnt = q[0];
			q.shift();
	
			// if front element is
			// the expected element
			if (fnt == expected)
				expected++;
	
			else
			{
				// if stack is empty,
				// push the element
				if (st.length == 0)
				{
					st.push(fnt);
				}
	
				// if top element is less than
				// element which need to be
				// pushed, then return false.
				else if (st.length != 0 &&
						st[st.length - 1] < fnt)
				{
					return false;
				}
	
				// else push into the stack.
				else
					st.push(fnt);
			}
	
			// while expected element are
			// coming from stack, pop them out.
			while (st.length != 0 &&
				st[st.length - 1] == expected)
			{
				st.pop();
				expected++;
			}
		}
		
		// if the final expected element
		// value is equal to initial Queue
		// size and the stack is empty.
		if ((expected - 1) == n && st.length == 0)
			return true;
	
		return false;
	}
	
	q.push(5);
	q.push(1);
	q.push(2);
	q.push(3);
	q.push(4);

	let n = q.length;

	if (checkSorted(n))
	document.write("Yes");
	else
	document.write("No");

```


 **Question 5**

Given a number , write a program to reverse this number using stack.

**Examples:**

```
Input : 365
Output : 563

Input : 6899
Output : 9986
```

Solution :

```


		// Stack to maintain order of digits
		let st = [];

		// Function to push digits into stack
		function push_digits(number)
		{
			while (number != 0)
			{
				st.push(number % 10);
				number = Math.floor(number / 10);
			}
		}

		// Function to reverse the number
		function reverse_number(number)
		{
		
			// Function call to push number's
			// digits to stack
			push_digits(number);

			let reverse = 0;
			let i = 1;

			// Popping the digits and forming
			// the reversed number
			while (st.length != 0) {
				reverse = reverse + (st[st.length - 1] * i);
				st.pop();
				i = i * 10;
			}

			// Return the reversed number formed
			return reverse;
		}

		// Driver program to test above function
		let number = 39997;

		// Function call to reverse number
		document.write(reverse_number(number));


```


**Question 6**

Given an integer k and a **[queue](https://www.geeksforgeeks.org/queue-data-structure/)** of integers, The task is to reverse the order of the first **k** elements of the queue, leaving the other elements in the same relative order.

Only following standard operations are allowed on queue.

- **enqueue(x) :** Add an item x to rear of queue
- **dequeue() :** Remove an item from front of queue
- **size() :** Returns number of elements in queue.
- **front() :** Finds front item.

Solution :

```
// JavaScript Code to implement queue data structure in Javascript
class Queue {
constructor() {
	this.items = [];
}

// add element to the queue
push(element) {
	return this.items.push(element);
}

// remove element from the queue
pop() {
	if (this.items.length > 0) {
	return this.items.shift();
	}
}

// view the first element
front() {
	return this.items[0];
}

// check if the queue is empty
isEmpty() {
	return this.items.length == 0;
}

// the size of the queue
size() {
	return this.items.length;
}
}

// Function to reverse first k elements of a queue
function reverseFirstK(queue, k) {
solve(queue, k);
let s = queue.size() - k;
while (s-- > 0) {
	let x = queue.front();
	queue.pop();
	queue.push(x);
}
return queue;
}

function solve(queue, k) {
if (k == 0) return;
let e = queue.front();
queue.pop();
solve(queue, k - 1);
queue.push(e);
}

// Driver code

let queue = new Queue();
queue.push(10);
queue.push(20);
queue.push(30);
queue.push(40);
queue.push(50);
queue.push(60);
queue.push(70);
queue.push(80);
queue.push(90);
queue.push(100);

let k = 5;
q = reverseFirstK(queue, k);

// Printing queue
while (!q.isEmpty()) {
console.log(q.front());
q.pop();
}



```

<aside>
💡 **Question 7**

Given a sequence of n strings, the task is to check if any two similar words come together and then destroy each other then print the number of words left in the sequence after this pairwise destruction.

**Examples:**

Input : ab aa aa bcd ab

Output : 3

*As aa, aa destroys each other so,*

*ab bcd ab is the new sequence.*

Input :  tom jerry jerry tom

Output : 0

*As first both jerry will destroy each other.*

*Then sequence will be tom, tom they will also destroy*

*each other. So, the final sequence doesn’t contain any*

*word.*

Solution :

```


function removeConsecutiveSame(v)
{
	let n = v.length;

	// Start traversing the sequence
	for (let i = 0; i < n - 1;)
	{
	
		// Compare the current string with
		// next one Erase both if equal
		if (v[i] == (v[i + 1]))
		{
		
			// Erase function delete the element and
			// also shifts other element that's why
			// i is not updated
			v.splice(i, 1);
			v.splice(i, 1);

			// Update i, as to check from
			// previous element again
			if (i > 0) {
				i--;
			}

			// Reduce sequence size
			n = n - 2;
		}

		// Increment i, if not equal
		else {
			i++;
		}
	}

	// Return modified size
	return v.length;
}

// Driver Code

let v = [];

v.push("tom");
v.push("jerry");
v.push("jerry");
v.push("tom");

document.write(removeConsecutiveSame(v));


```

<aside>
💡 **Question 8**

Given an array of integers, the task is to find the maximum absolute difference between the nearest left and the right smaller element of every element in the array.

**Note:** If there is no smaller element on right side or left side of any element then we take zero as the smaller element. For example for the leftmost element, the nearest smaller element on the left side is considered as 0. Similarly, for rightmost elements, the smaller element on the right side is considered as 0.

**Examples:**

```
Input : arr[] = {2, 1, 8}
Output : 1
Left smaller  LS[] {0, 0, 1}
Right smaller RS[] {1, 0, 0}
Maximum Diff of abs(LS[i] - RS[i]) = 1

Input  : arr[] = {2, 4, 8, 7, 7, 9, 3}
Output : 4
Left smaller   LS[] = {0, 2, 4, 4, 4, 7, 2}
Right smaller  RS[] = {0, 3, 7, 3, 3, 3, 0}
Maximum Diff of abs(LS[i] - RS[i]) = 7 - 3 = 4

Input : arr[] = {5, 1, 9, 2, 5, 1, 7}
Output : 1
```

Solution :

```

// Javascript program to find the difference b/w left and
// right smaller element of every element in array
	
	// Function to fill left smaller element for every
	// element of arr[0..n-1]. These values are filled
	// in SE[0..n-1]
	function leftSmaller(arr,n,SE)
	{
		// Create an empty stack
		let S=[]
		
		// Traverse all array elements
		// compute nearest smaller elements of every element
		for (let i = 0; i < n; i++)
		{
			// Keep removing top element from S while the top
			// element is greater than or equal to arr[i]
			while (S.length!=0 && S[S.length-1] >= arr[i])
			{
				S.pop();
			}

			// Store the smaller element of current element
			if (S.length!=0)
			{
				SE[i] = S[S.length-1];
			}
			// If all elements in S were greater than arr[i]
			else
			{
				SE[i] = 0;
			}

			// Push this element
			S.push(arr[i]);
		}
		
	}
	
	// Function returns maximum difference b/w Left &
	// right smaller element
	function findMaxDiff(arr,n)
	{
		// To store left smaller elements
		let LS = new Array(n);
		for(let i=0;i<n;i++)
		{
			LS[i]=0;
		}
		// find left smaller element of every element
		leftSmaller(arr, n, LS);

		// find right smaller element of every element
		// first reverse the array and do the same process
		let RRS = new Array(n); // To store right smaller elements in
		for(let i=0;i<n;i++)
		{
			RRS[i]=0;
		}
		
		// reverse array
		reverse(arr);
		leftSmaller(arr, n, RRS);

		// find maximum absolute difference b/w LS & RRS
		// In the reversed array right smaller for arr[i] is
		// stored at RRS[n-i-1]
		let result = -1;
		for (let i = 0; i < n; i++)
		{
			result = Math.max(result, Math.abs(LS[i] - RRS[n - 1 - i]));
		}

		// return maximum difference b/w LS & RRS
		return result;
	}
	
	function reverse(a)
	{
		let i, k, n = a.length;
		let t;
		for (i = 0; i < Math.floor(n / 2); i++)
		{
			t = a[i];
			a[i] = a[n - i - 1];
			a[n - i - 1] = t;
		}
	}
	
	
	let arr=[2, 4, 8, 7, 7, 9, 3];
	let n = arr.length;
	document.write("Maximum diff : "
				+ findMaxDiff(arr, n));
	

```
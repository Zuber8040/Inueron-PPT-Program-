<aside>
💡 **Question 1**

Given an integer `n`, return *`true` if it is a power of two. Otherwise, return `false`*.

An integer `n` is a power of two, if there exists an integer `x` such that `n == 2x`.

**Example 1:**
Input: n = 1

Output: true

**Example 2:**
Input: n = 16

Output: true

**Example 3:**
Input: n = 3

Output: false

Solution

```
class Solution {
public:
    bool isPowerOfTwo(int n) {
        return n > 0 ? !(n & n-1) : false;
    }
};
```

<aside>
💡 **Question 2**

Given a number n, find the sum of the first natural numbers.

**Example 1:**

Input: n = 3

Output: 6

**Example 2:**

Input : 5

Output : 15

Solution:

```
function findSum(n)
{
    return n * (n + 1) / 2;
}
var n = 5;

```

    <aside>

💡 **Question 3**

\*\*\*\*Given a positive integer, N. Find the factorial of N.

**Example 1:**

Input: N = 5

Output: 120

**Example 2:**

Input: N = 4

Output: 24

SOlution:

```
function factorial(n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}

let num = 5;
```

💡 **Question 4**

Given a number N and a power P, the task is to find the exponent of this number raised to the given power, i.e. N^P.

**Example 1 :**

Input: N = 5, P = 2

Output: 25

**Example 2 :**
Input: N = 2, P = 5

Output: 32

Solution:

```
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n===0) return 1;

    let pow = Math.abs(n);

	let result = pow%2===0 ? myPow(x*x,pow/2) : myPow(x*x,(pow-1)/2) * x;

    return n < 0 ? 1/result : result;
};

```

<aside>
💡 **Question 5**

Given an array of integers **arr**, the task is to find maximum element of that array using recursion.

**Example 1:**

Input: arr = {1, 4, 3, -5, -4, 8, 6};
Output: 8

**Example 2:**

Input: arr = {1, 4, 45, 6, 10, -8};
Output: 45

Solution:

```


// Javascript program to find minimum

// Function to print Minimum
// element using recursion
function findMinRec(A, n)
{

	// If size = 0 means whole
	// array has been traversed
	if (n == 1)
		return A[0];

	return Math.min(A[n - 1],
		findMinRec(A, n - 1));
}


let A = [ 1, 4, 45, 6, -50, 10, 2 ];
let n = A.length;

console.log(findMinRec(A, n));



```

**Question 6**

Given first term (a), common difference (d) and a integer N of the Arithmetic Progression series, the task is to find Nth term of the series.

**Example 1:**

Input : a = 2 d = 1 N = 5
Output : 6
The 5th term of the series is : 6

**Example 2:**

Input : a = 5 d = 2 N = 10
Output : 23
The 10th term of the series is : 23

Solution:

```


// JavaScript Program to find nth term of
// Arithmetic progression

	function Nth_of_AP(a, d, N)
	{
		// using formula to find the
		// Nth term t(n) = a(1) + (n-1)*d
		return (a + (N - 1) * d);

	}


	// starting number
	let a = 2;

	// Common difference
	let d = 1;

	// N th term to be find
	let N = 5;







```

<aside>
💡 **Question 7**

Given a string S, the task is to write a program to print all permutations of a given string.

**Example 1:**

**_Input:_**

_S = “ABC”_

**_Output:_**

_“ABC”, “ACB”, “BAC”, “BCA”, “CBA”, “CAB”_

**Example 2:**

**_Input:_**

_S = “XY”_

**_Output:_**

_“XY”, “YX”_

Solution:

```
<script>
// Javascript program to print all permutations of a
// given string.

function permute(str, l, r)
{
	if (l == r)
			document.write(str+"<br>");
		else
		{
			for (let i = l; i <= r; i++)
			{
				str = swap(str, l, i);
				permute(str, l + 1, r);
				str = swap(str, l, i);
			}
		}
}

function swap(a, i, j)
{
	let temp;
let charArray = a.split("");
temp = charArray[i] ;
charArray[i] = charArray[j];
charArray[j] = temp;
return (charArray).join("");
}

let str = "ABC";
let n = str.length;
permute(str, 0, n-1);




```

<aside>
💡 **Question 8**

Given an array, find a product of all array elements.

**Example 1:**

Input : arr[] = {1, 2, 3, 4, 5}
Output : 120
**Example 2:**

Input : arr[] = {1, 6, 3}
Output : 18

Solution:

```

// Recursive javascript program to
// multiply array elements

	var arr = [ 1, 2, 3, 4, 5, 6 ];

	// Method to calculate the product
	// of the array using recursion
	function multiply(a , n) {
		// Termination condition
		if (n == 0)
			return (a[n]);
		else
			return (a[n] * multiply(a, n - 1));
	}

	// Driver Code

		// Method call to
		// calculate product
		console.log(multiply(arr,arr.length - 1));



```

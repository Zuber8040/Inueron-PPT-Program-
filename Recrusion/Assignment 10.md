<aside>
💡 **Question 1**

Given an integer `n`, return *`true` if it is a power of three. Otherwise, return `false`*.

An integer `n` is a power of three, if there exists an integer `x` such that `n == 3x`.

**Example 1:**

```
Input: n = 27
Output: true
Explanation: 27 = 33
```

**Example 2:**

```
Input: n = 0
Output: false
Explanation: There is no x where 3x = 0.

```

**Example 3:**

```
Input: n = -1
Output: false
Explanation: There is no x where 3x = (-1).
```

Solution:

```
var isPowerOfThree = function(n) {
    return n > 0 && 1162261467 % n === 0
};

```

**Question 2**

You have a list `arr` of all integers in the range `[1, n]` sorted in a strictly increasing order. Apply the following algorithm on `arr`:

- Starting from left to right, remove the first number and every other number afterward until you reach the end of the list.
- Repeat the previous step again, but this time from right to left, remove the rightmost number and every other number from the remaining numbers.
- Keep repeating the steps again, alternating left to right and right to left, until a single number remains.

Given the integer `n`, return *the last number that remains in* `arr`.

**Example 1:**

```
Input: n = 9
Output: 6
Explanation:
arr = [1, 2,3, 4,5, 6,7, 8,9]
arr = [2,4, 6,8]
arr = [2, 6]
arr = [6]

```

**Example 2:**

```
Input: n = 1
Output: 1
```

Solution:

```
var lastRemaining = function(n) {

    const dfs=(leftRight,num,depth,count)=>{
        if(count===1) return num; // base case if array size=1
        return leftRight?
            // l->r, increment num, since we always cut the first number
            dfs(!leftRight, num+Math.pow(2,depth),depth+1,Math.trunc(count/2)):
            // first number being cut-off only if we have ODD array size
            dfs(!leftRight, (count%2>0)?num+Math.pow(2,depth):num ,depth+1,Math.trunc(count/2));
    }
    return dfs(true,1/*start from 1*/,0/*curr level*/,n/* array length*/);
};

```

<aside>
💡 **Question 3**

\*\*\*\*Given a set represented as a string, write a recursive code to print all subsets of it. The subsets can be printed in any order.

**Example 1:**

Input :  set = “abc”

Output : { “”, “a”, “b”, “c”, “ab”, “ac”, “bc”, “abc”}

**Example 2:**

Input : set = “abcd”

Output : { “”, “a” ,”ab” ,”abc” ,”abcd”, “abd” ,”ac” ,”acd”, “ad” ,”b”, “bc” ,”bcd” ,”bd” ,”c” ,”cd” ,”d” }

Solution:

```



	// str : Stores input string
// curr : Stores current subset
// index : Index in current subset, curr
	function powerSet(str,index,curr)
	{
		let n = str.length;

	// base case
	if (index == n)
	{
		return;
	}

	// Two cases for every character
	// (i) We consider the character
	// as part of current subset
	// (ii) We do not consider current
	// character as part of current
	// subset
	powerSet(str, index + 1, curr + str[index]);
	powerSet(str, index + 1, curr);
	}


	let str = "abc";
	let index = 0;
	let curr="";
	powerSet(str,index,curr);

```

<aside>
💡 **Question 4**

Given a string calculate length of the string using recursion.

**Examples:**

```
Input : str = "abcd"
Output :4

Input : str = "GEEKSFORGEEKS"
Output :13
```

Solution:

```


// JavaScript program to calculate length of
// a string using recursion

/* Function to calculate length */
	function recLen(str)
	{

		// if we reach at the end of the string
		if (str == "")
			return 0;
		else
			return recLen(str.substring(1)) + 1;
	}



		let str ="GeeksforGeeks";





```

**Question 5**

We are given a string S, we need to find count of all contiguous substrings starting and ending with same character.

**Examples :**

```
Input  : S = "abcab"
Output : 7
There are 15 substrings of "abcab"
a, ab, abc, abca, abcab, b, bc, bca
bcab, c, ca, cab, a, ab, b
Out of the above substrings, there
are 7 substrings : a, abca, b, bcab,
c, a and b.

Input  : S = "aba"
Output : 4
The substrings are a, b, a and aba
```

Solution:

```
<script>

// JavaScript program to count all substrings
// with same first and last characters.


// Returns true if first and last characters
// of s are same.
function checkEquality(s)
{
	return (s.charAt(0) == s.charAt(s.length - 1));
}

function countSubstringWithEqualEnds(s)
{
	var result = 0;
	var n = s.length;

	// Starting point of substring
	for (var i = 0; i < n; i++)

	// Length of substring
	for (var len = 1; len <= n-i; len++)

		// Check if current substring has same
		// starting and ending characters.
		if (checkEquality(s.substring(i, i + len)))
			result++;

	return result;
}



	var s = "abcab";
	console.log(countSubstringWithEqualEnds(s));



```
<aside>
💡 **Question 6**

The [tower of Hanoi](https://en.wikipedia.org/wiki/Tower_of_Hanoi) is a famous puzzle where we have three rods and **N** disks. The objective of the puzzle is to move the entire stack to another rod. You are given the number of discs **N**. Initially, these discs are in the rod 1. You need to print all the steps of discs movement so that all the discs reach the 3rd rod. Also, you need to find the total moves.**Note:** The discs are arranged such that the **top disc is numbered 1** and the **bottom-most disc is numbered N**. Also, all the discs have **different sizes** and a bigger disc **cannot** be put on the top of a smaller disc. Refer the provided link to get a better clarity about the puzzle.

**Example 1:**

```
Input:
N = 2
Output:
move disk 1 from rod 1 to rod 2
move disk 2 from rod 1 to rod 3
move disk 1 from rod 2 to rod 3
3
Explanation:For N=2 , steps will be
as follows in the example and total
3 steps will be taken.
```

**Example 2:**

```
Input:
N = 3
Output:
move disk 1 from rod 1 to rod 3
move disk 2 from rod 1 to rod 2
move disk 1 from rod 3 to rod 2
move disk 3 from rod 1 to rod 3
move disk 1 from rod 2 to rod 1
move disk 2 from rod 2 to rod 3
move disk 1 from rod 1 to rod 3
7
Explanation:For N=3 , steps will be
as follows in the example and total
7 steps will be taken.
```

Solution:

```
/**
 * @param {number} N
 * @param {number} from
 * @param {number} to
 * @param {number} aux
 * @returns {number}
*/
class Solution {
  
    toh(N, from, to, aux)
    {
        let moves = 0;
        if (N >= 1) {
            // recursive call to move top disk from "from" to aux in current call
            moves += this.toh(N - 1, from, aux, to);
            
            let s="move disk " + N + " from rod " + from + " to rod " + to;
            console.log(s);
            // increment moves
            moves++;
            
            // recursive call to move top disk from aux to "to" in current call
            moves += this.toh(N - 1, aux, to, from);
        }
        return moves;
    }
}
```

<aside>
💡 **Question 7**

Given a string **str**, the task is to print all the permutations of **str**. A **permutation** is an arrangement of all or part of a set of objects, with regard to the order of the arrangement. For instance, the words ‘bat’ and ‘tab’ represents two distinct permutation (or arrangements) of a similar three letter word.

**Examples:**

> Input: str = “cd”
> 
> 
> **Output:** cd dc
> 
> **Input:** str = “abb”
> 
> **Output:** abb abb bab bba bab bba
> 

Solution:

```



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

💡 **Question 8**

Given a string, count total number of consonants in it. A consonant is an English alphabet character that is not vowel (a, e, i, o and u). Examples of constants are b, c, d, f, and g.

**Examples :**

```
Input : abc de
Output : 3
There are three consonants b, c and d.

Input : geeksforgeeks portal
Output : 12
```

Solution:

```
<script>

// Recursive Javascript program to
// count total number of consonants

// Function to check for consonant
function isConsonant(ch)
{
	
	// To handle lower case
	ch = ch.toUpperCase();
	
	return (!(ch == 'A' || ch == 'E' ||
			ch == 'I' || ch == 'O' ||
			ch == 'U') && ch.charCodeAt(0) >= 65 &&
							ch.charCodeAt(0) <= 90) ;
}

// To count total number of consonants from
// 0 to n-1
function totalConsonants(str, n)
{
	if (n == 1)
		return isConsonant(str[0]);

	return totalConsonants(str, n - 1) +
				isConsonant(str[n - 1]);
}

// Driver code
var str = "abc de";
console.log(totalConsonants(str,str.length));



```
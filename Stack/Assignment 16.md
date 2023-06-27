<aside>
💡 **Question 1**

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

💡 **Question 1**

A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

- s[i] == 'I' if perm[i] < perm[i + 1], and
- s[i] == 'D' if perm[i] > perm[i + 1].

Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return **any of them**.

**Example 1:**

**Input:** s = "IDID"

**Output:**

[0,4,1,3,2]

Solution:

```
/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let inc = 0;
    let dec = s.length;
    let ans = [];
    let indx = 0;

    for(let i=0;i<s.length;i++){
        if(s[i]=='I'){
            ans.push(inc);
            inc+=1;
            indx++;
        }
        else if(s[i]=='D') {
            ans.push(dec);
             dec-=1;
             indx++;
        }
          
    }
  if(indx==s.length)ans.push(inc);
    return ans;
};

// TC: O(N)
// SC:O(N)

```

<aside>
💡 **Question 2**

You are given an m x n integer matrix matrix with the following two properties:

- Each row is sorted in non-decreasing order.
- The first integer of each row is greater than the last integer of the previous row.

Given an integer target, return true *if* target *is in* matrix *or* false *otherwise*.

You must write a solution in O(log(m * n)) time complexity.

**Example 1:**



**Input:** matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3

**Output:** true

Solution:

```
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let i =0;
  let j=matrix[0].length;
  while(i<matrix.length && j>=0){
      if(matrix[i][j]===target)return true;
      else if(matrix[i][j]<target)i++;
      else j--;
  }  
  return false;
};

// TC: O(NLOGN)
// SC:O(1)
```

**Question 3**

Given an array of integers arr, return *true if and only if it is a valid mountain array*.

Recall that arr is a mountain array if and only if:

- arr.length >= 3
- There exists some i with 0 < i < arr.length - 1 such that:
    - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
    - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

**Example 1:**

**Input:** arr = [2,1]

**Output:**

false

Solution:

```
/**
 * @param {number[]} arr
 * @return {boolean}
 */
// TC = O(n)
var validMountainArray = function(arr) {
    // 2 pointers - one will move from left to right and other will move from right to left
	// so that both meet at the peak point
    let left = 0,
        right = arr.length - 1;
	// condition: while either of the pointer is able to move
    while(arr[left] < arr[left + 1] || arr[right] < arr[right - 1]) {
        if(arr[left] < arr[left + 1]) {
            ++left;
        }
        if(arr[right] < arr[right - 1]) {
            --right;
        }
    }
	// if left and right pointer does not meet at the peak - array contains equal integers or zig-zag pattern
	// OR all integers are in ascending order
	// OR all integers are in descending order
    if(left !== right || left === arr.length - 1 || right === 0) {
        return false;
    }
    return true;
};
```


**Question 4**

Given a binary array nums, return *the maximum length of a contiguous subarray with an equal number of* 0 *and* 1.

**Example 1:**

**Input:** nums = [0,1]

**Output:** 2

**Explanation:**

[0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

Solution:

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    var counts = new Map();
    let maxLength = 0;
    counts.set(0,-1);
    let cnt =0;
    for(let i=0;i<nums.length;i++){
        // if we found o we will decrement  the counter 
        // if we found 1 we will   increment the counter
        if(nums[i]===0){
            cnt-=1;
        }
        else cnt+=1;
        
        if(counts.has(cnt)){
            maxLength=Math.max(maxLength,i-counts.get(cnt));
        }
        else counts.set(cnt,i);
    }
    return maxLength;
};

```

**Question 5**

The **product sum** of two equal-length arrays a and b is equal to the sum of a[i] * b[i] for all 0 <= i < a.length (**0-indexed**).

- For example, if a = [1,2,3,4] and b = [5,2,3,1], the **product sum** would be 1*5 + 2*2 + 3*3 + 4*1 = 22.

Given two arrays nums1 and nums2 of length n, return *the **minimum product sum** if you are allowed to **rearrange** the **order** of the elements in* nums1.

**Example 1:**

**Input:** nums1 = [5,3,4,2], nums2 = [4,2,2,5]

**Output:** 40

**Explanation:**

We can rearrange nums1 to become [3,5,4,2]. The product sum of [3,5,4,2] and [4,2,2,5] is 3*4 + 5*2 + 4*2 + 2*5 = 40.

Solution:

```
function minValue(A, B, n)
{
     
    // Sort A and B so that minimum and maximum
    // value can easily be fetched.
    A.sort(function(a,b){
        return a - b;
    });
    B.sort(function(a,b){
        return a - b;
    });
 
    // Multiplying minimum value of A
    // and maximum value of B
    let result = 0;
    for(let i = 0; i < n; i++)
        result += (A[i] * B[n - i - 1]);
 
    return result;
}
```


**Question 6**

An integer array original is transformed into a **doubled** array changed by appending **twice the value** of every element in original, and then randomly **shuffling** the resulting array.

Given an array changed, return original *if* changed *is a **doubled** array. If* changed *is not a **doubled** array, return an empty array. The elements in* original *may be returned in **any** order*.

**Example 1:**

**Input:** changed = [1,3,4,2,6,8]

**Output:** [1,3,4]

**Explanation:** One possible original array could be [1,3,4]:

- Twice the value of 1 is 1 * 2 = 2.
- Twice the value of 3 is 3 * 2 = 6.
- Twice the value of 4 is 4 * 2 = 8.

Other original arrays could be [4,3,1] or [3,1,4].


Solution:

```
/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
    if (changed.length % 2 != 0) return [] //if array length is odd, changed is not a doubled array
    changed.sort((a,b)=>a-b) //sort array in ascending order
    ans=[]
    for (let i = 0; i< changed.length; i++){
        if (changed[i]>-1){  //check if element isn't marked as doubled
            //let doubleIndex = changed.lastIndexOf(changed[i]*2) //find last index of doubled, ends up with TLE
			let doubleIndex = changed.indexOf(changed[i]*2, i+1) //find next index of doubled, doesn't end up with TLE
            if (doubleIndex>i) {      
                ans.push(changed[i]) //add element to ans if doubled found
                changed[doubleIndex] = -1 //mark element as double
            } else {
                return [] //if doubled not found, changed is not a doubled array
            }
        }
    }
    return ans
};
```

Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

**Example 1:**

**Input:** n = 3

**Output:** [[1,2,3],[8,9,4],[7,6,5]]

Solution:

```
    /**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    
    let output = new Array(n).fill(0).map(() => new Array(n).fill(0))
    
    let count = 0;
    
    let size = n * n;
    
    let left = 0;
    
    let right = n - 1;
    
    let top = 0;
    
    let bottom = n -1;
    
    while(count < size){
        
        //going left
        for(let i = left; i <= right; i++){
            count++;
            output[top][i] = count;
        }
        top++;
                
        // going down
        for(let i = top; i <= bottom; i++){
            count++;
            output[i][right] = count;
        }
        right--;
        
        //going left
        for(let i = right; i >= left; i--){
            count++;
            output[bottom][i] = count;
        }
        bottom--;
        
        //going up
        for(let i = bottom; i >= top; i--){
            count++;
            output[i][left] = count;
        }
        left++;
    }
    
    return output;
    
};


```

**Question 8**

Given two [sparse matrices](https://en.wikipedia.org/wiki/Sparse_matrix) mat1 of size m x k and mat2 of size k x n, return the result of mat1 x mat2. You may assume that multiplication is always possible.

**Example 1:**


**Input:** mat1 = [[1,0,0],[-1,0,3]], mat2 = [[7,0,0],[0,0,0],[0,0,1]]

**Output:**

[[7,0,0],[-7,0,3]]

Solution :

```
let r1 = mat1.length, c1 = mat1[0].length, c2 = mat2[0].length;
let res = new Array(r1).fill().map(() => new Array(c2).fill(0));
let mp = new Map();
for (let i = 0; i < r1; ++i) {
    for (let j = 0; j < c1; ++j) {
        if (mat1[i][j] !== 0) {
            if (!mp.has(i)) mp.set(i, []);
            mp.get(i).push(j);
        }
    }
}
for (let i = 0; i < r1; ++i) {
    for (let j = 0; j < c2; ++j) {
        for (let k of mp.get(i)) {
            res[i][j] += mat1[i][k] * mat2[k][j];
        }
    }
}
return res;
```
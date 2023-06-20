
💡 **Question 1**

Convert 1D Array Into 2D Array

You are given a **0-indexed** 1-dimensional (1D) integer array original, and two integers, m and n. You are tasked with creating a 2-dimensional (2D) array with  m rows and n columns using **all** the elements from original.

The elements from indices 0 to n - 1 (**inclusive**) of original should form the first row of the constructed 2D array, the elements from indices n to 2 * n - 1 (**inclusive**) should form the second row of the constructed 2D array, and so on.

Return *an* m x n *2D array constructed according to the above procedure, or an empty 2D array if it is impossible*.

**Example 1:**


**Input:** original = [1,2,3,4], m = 2, n = 2

**Output:** [[1,2],[3,4]]

**Explanation:** The constructed 2D array should contain 2 rows and 2 columns.

The first group of n=2 elements in original, [1,2], becomes the first row in the constructed 2D array.

The second group of n=2 elements in original, [3,4], becomes the second row in the constructed 2D array.

Solution:

```
/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    if(original.length!==(m*n))return [];
    let res = [];
    let arr = [];
    for(let i=0;i<original.length;i++){
        arr.push(original[i]);
        if(arr.length===n){
            res.push(arr);
            arr=[];
        }
    }
    return res;
};
TC:O(N);
SC:O(1)
```

Q2 You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

Given the integer n, return the number of complete rows of the staircase you will build.

Solution
```
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    if(n==1)return n;
    if(n==2)return 1;
    
    let cnt = 0;
    let i=1;
    while(i<=n){
        n-=i;
        i++;
        cnt++;  
    }
    return cnt;


};
TC:O(N);
SC:O(1);


    // another approach

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let start = 1;
    let end = n;
    let completedRows = 0;
    while(start<=end){
        let mid = parseInt((start+end)/2)
        let sum = (mid * (mid+1))/2
        if (sum== n){
            return mid;
        }
        else if (sum < n){
            completedRows = mid;
            start = mid+1;
        }
        else{
            end = mid -1;
        }

    }
    return completedRows;
};
```

 **Question 3**
Given a 2D integer array matrix, return *the **transpose** of* matrix.

The **transpose** of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

**Example 1:**

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]

Output: [[1,4,7],[2,5,8],[3,6,9]]


Solution:

```
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let res = [];
    for(let i=0;i<matrix[0].length;i++){
        let currCol = [];
        for(let j=0;j<matrix.length;j++){
            currCol.push(matrix[j][i]);
        }
        res.push(currCol);
    }
    return res;
};

TC:O(N^2);
SC:O(N);

```


 **Question 4**
Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is **maximized**. Return *the maximized sum*.

**Example 1:**

Input: nums = [1,4,3,2]

Output: 4

**Explanation:** All possible pairings (ignoring the ordering of elements) are:

1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3

2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3

3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4

So the maximum possible sum is 4.

Solution:

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a,b)=>a-b);
    let maxiSum = 0;
    for(let i=0;i<nums.length;i+=2){
        maxiSum+=nums[i];
    }
    return maxiSum;
};
```


💡 **Question 5**

Given two **0-indexed** integer arrays nums1 and nums2, return *a list* answer *of size* 2 *where:*

- answer[0] *is a list of all **distinct** integers in* nums1 *which are **not** present in* nums2*.*
- answer[1] *is a list of all **distinct** integers in* nums2 *which are **not** present in* nums1.

**Note** that the integers in the lists may be returned in **any** order.

**Example 1:**

**Input:** nums1 = [1,2,3], nums2 = [2,4,6]

**Output:** [[1,3],[4,6]]

**Explanation:**

For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].

For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].


Solution:

```
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const num1set = new Set(nums1);
    const num2set = new Set(nums2);
     const a1 = [...num1set].filter(x => !num2set.has(x));
    const a2 = [...num2set].filter(x => !num1set.has(x));
    
    return [num1set,num2set];


};

```


**Question 6**
Given an integer array nums sorted in **non-decreasing** order, return *an array of **the squares of each number** sorted in non-decreasing order*.

**Example 1:**

Input: nums = [-4,-1,0,3,10]

Output: [0,1,9,16,100]

**Explanation:** After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100]


Solution:

```
const  nums = [-4,-1,0,3,10];
  let res = [];
for (var i = 0; i < nums.length; i++) {
    if(nums[i]<0){
      nums[i]*=-1;
      res.push(nums[i]*nums[i]);
    }
   else  res.push(nums[i]*nums[i]);
}
res.sort((a,b)=>a-b)
console.log(res);

TC:O(NLogn)
SC:O(N);

```


**Question 7**
You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.

Count and return *the number of maximum integers in the matrix after performing all the operations*

**Example 1:**



**Input:** m = 3, n = 3, ops = [[2,2],[3,3]]

**Output:** 4

**Explanation:** The maximum integer in M is 2, and there are four of it in M. So return 4.


Solution:

```
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    let min_row = m;
    let min_col = n;
    // finding overlap opertors 
    for(const op of ops){
        min_row = Math.min(min_row,op[0]);
        min_col = Math.min(min_col,op[1]);
    }
    return min_row*min_col;
};

TC: O(N)
SC: O(1);

```


**Question 8**

Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

*Return the array in the form* [x1,y1,x2,y2,...,xn,yn].

**Example 1:**

**Input:** nums = [2,5,1,3,4,7], n = 3

**Output:** [2,3,5,4,1,7]

**Explanation:** Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

Solution:

```
    /**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    if(n==1)return nums;
    // const sz = nums.length-1;
   let ans = [];
    let i = 0 ,j=n;
    while(i<n){
        ans.push(nums[i]);
        ans.push(nums[j]);
        i++;
        j++;
    }
    return ans;
};

// TC : O(N);
// SC : O(N);

```


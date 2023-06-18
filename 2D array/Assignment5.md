<aside>
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


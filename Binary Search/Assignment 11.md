
💡 **Question 1**

Given a non-negative integer `x`, return *the square root of* `x` *rounded down to the nearest integer*. The returned integer should be **non-negative** as well.

You **must not use** any built-in exponent function or operator.

- For example, do not use `pow(x, 0.5)` in c++ or `x ** 0.5` in python.

**Example 1:**

```
Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.

```

**Example 2:**

```
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
```

Solution:

```

  var mySqrt = function(x) {
  var left = 1;
  var right = Math.floor(x / 2) + 1;
  var mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (mid * mid > x) {
      right = mid - 1;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return right;
};

```

<aside>
💡 **Question 2**

A peak element is an element that is strictly greater than its neighbors.

Given a **0-indexed** integer array `nums`, find a peak element, and return its index. If the array contains multiple peaks, return the index to **any of the peaks**.

You may imagine that `nums[-1] = nums[n] = -∞`. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

You must write an algorithm that runs in `O(log n)` time.

**Example 1:**

```
Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
```

**Example 2:**

```
Input: nums = [1,2,1,3,5,6,4]
Output: 5
Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
```

Solution:

```
var findPeakElement = function(nums) {
    let left = 0, right = nums.length-1, mid;
    
    while(left < right) {
        mid = Math.floor((right+left)/2);
        if(nums[mid] > nums[mid+1]) right = mid;
        else left = mid+1;
    }
    return left;
};

```

<aside>
💡 **Question 3**

****

Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return *the only number in the range that is missing from the array.*

**Example 1:**

```
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

```

**Example 2:**

```
Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

```

**Example 3:**

```
Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
```

Solution:

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;

  for (let i = 0; i < nums.length; i++) {
    actualSum = actualSum + nums[i]
  }
  
  return expectedSum-actualSum
};
```


💡 **Question 4**

Given an array of integers `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive.

There is only **one repeated number** in `nums`, return *this repeated number*.

You must solve the problem **without** modifying the array `nums` and uses only constant extra space.

**Example 1:**

```
Input: nums = [1,3,4,2,2]
Output: 2

```

**Example 2:**

```
Input: nums = [3,1,3,4,2]
Output: 3
```

Solution:

```
var findDuplicate = function(nums) {
    
    // start hopping from Node_#0
    let [slow, fast] = [0,0];
    
    // for locating start node of cycle
    let check = 0;
    
    // Step_#1
    // Cycle detection
    // Let slow jumper and fast jumper meet somewhere in the cycle
    
    while( true ){
        
        // slow jumpper hops 1 step, while fast jumpper hops two steps forward
        slow = nums[ slow ];
        fast = nums[ nums[ fast ] ];
        
        if( slow == fast ){
            break;
        }
    }
    
    // Step_#2
    // Locate the start node of cycle (i.e., the duplicate number)
    while( true ){
        
        slow = nums[ slow ];
        check = nums[ check ];
        
        if( slow == check ){
            break;
        }
    }
    
    return check;
    
};

```
<aside>
💡 **Question 5**

Given two integer arrays `nums1` and `nums2`, return *an array of their intersection*. Each element in the result must be **unique** and you may return the result in **any order**.

**Example 1:**

```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

```

**Example 2:**

```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
```

Solution:

```
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let result = [];
    nums2.sort((a,b)=> a-b)

    // we will loop in first array and will binary search that in second array
    for(let temp of nums1){
        binarySearch(temp, nums2, result);
    }
    return result;
};
function binarySearch(target, nums2, result){
    let start = 0;
    let end = nums2.length-1;

    while(start<=end){
        let mid = parseInt((start+end)/2);
        if (target == nums2[mid]){
            if (!result.includes(target)){
                result.push(target)
            }
            break;
        }
        else if (target <nums2[mid]){
            end = mid-1
        }
        else {
            start = mid+1
        }
    }
}
```

<aside>
💡 **Question 6**

Suppose an array of length `n` sorted in ascending order is **rotated** between `1` and `n` times. For example, the array `nums = [0,1,2,4,5,6,7]` might become:

- `[4,5,6,7,0,1,2]` if it was rotated `4` times.
- `[0,1,2,4,5,6,7]` if it was rotated `7` times.

Notice that **rotating** an array `[a[0], a[1], a[2], ..., a[n-1]]` 1 time results in the array `[a[n-1], a[0], a[1], a[2], ..., a[n-2]]`.

Given the sorted rotated array `nums` of **unique** elements, return *the minimum element of this array*.

You must write an algorithm that runs in `O(log n) time.`

**Example 1:**

```
Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.

```

**Example 2:**

```
Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

```

**Example 3:**

```
Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times.
```

Solution:

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const m = ~~((l + r) / 2);
    if (nums[m] > nums[r]) l = m + 1;
    else r = m;
  }
  return nums[l];
};
```


💡 **Question 7**

Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given `target` value.

If `target` is not found in the array, return `[-1, -1]`.

You must write an algorithm with `O(log n)` runtime complexity.

**Example 1:**

```
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

```

**Example 2:**

```
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

```

**Example 3:**

```
Input: nums = [], target = 0
Output: [-1,-1]
```

Solution:

```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    // initiate binary search
    let l = 0, r = nums.length - 1;

    // search for the first appearance index of target
    while (l < r) {
        let mid = Math.floor((l + r) / 2);

        // try to push the array to the left smaller half
        // that's why even when nums[mid] == target, we still set r = mid
        nums[mid] >= target ? r = mid : l = mid + 1;
    }

    // after the first while loop, the small index l should already be the first appearance index of target
    // otherwise, target is not in the array and [-1, -1] should be returned
    if (nums[l] !== target) return [-1, -1];

    // now we have the first appearance index of target, and it is the small index l
    // we can store it to a new variable for further usage
    let start = l;

    // since both of the indices were changed (both of them are at the first appearance index of target)
    // we need to reset the big index to the end of the array to do the second binary search
    // to find the last appearance index of the target
    r = nums.length - 1;

    // search for the last appearance index of the target
    while (l < r) {
        let mid = Math.floor((l + r) / 2);

        // nums[mid] <= target? l = mid : r = mid -1
        // the above will not work as it will run into infinite loop
        nums[mid] <= target ? l = mid + 1 : r = mid;
    }

    // after the second while loop, now l == nums.length - 1
    // now there are 2 conditions: target is also appeared at the last index of the array, or not
    // store the last appearance index of target to another variable
    let end = nums[l] === target ? l : l - 1;

    // finally return the two indices into an array
    return [start, end];
};
```
<aside>
💡 **Question 8**

Given two integer arrays `nums1` and `nums2`, return *an array of their intersection*. Each element in the result must appear as many times as it shows in both arrays and you may return the result in **any order**.

**Example 1:**

```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

```

**Example 2:**

```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
```

Solution:

```
function intersect(nums1: number[], nums2: number[]): number[] {
  let sorted1 = nums1.sort((a, b) => a - b);
  let sorted2 = nums2.sort((a, b) => a - b).reverse();
  let input = sorted1.concat(sorted2);
  let l = 0;
  let r = input.length -1;
  let result = [];
  
  while(l < r && l < sorted1.length && (r - sorted1.length) >= 0) {
    if (input[l] == input[r]) {
      result.push(input[l]);
      l++;
      r--;
      continue;
    }
    input[l] < input[r] ? l++ : r--;
  }
  
  return result;
};

function binarySearch(nums: number[], target) {
  let start = 0;
  let end = nums.length - 1;
  let mid;
  
  while(start <= end) {
    mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      start = mid + 1;
    }
    if (nums[mid] > target) {
      end = mid - 1;
    }
  }
  return -1;
} 

```
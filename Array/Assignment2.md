**Question 1**
Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2),..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

**Example 1:**
Input: nums = [1,4,3,2]
Output: 4

**Explanation:** All possible pairings (ignoring the ordering of elements) are:

1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
   So the maximum possible sum is 4

Solution:

```
int arrayPairSum(vector<int>& nums) {

    // sort the array
    sort(nums.begin(),nums.end());

    // maxisum till now
    int maxisum = 0;
    // taking 2 pairs of summ
    for(int i=0;i<nums.size();i+=2){
        maxisum+=nums[i];
    }
    return maxisum;
}

TC:(NlogN)
SC:O(1)

```

**Question 2**
Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor.

The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice.

Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.

**Example 1:**
Input: candyType = [1,1,2,2,3,3]
Output: 3

**Explanation**: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.

Solution:

```
       const s = new Set();
for (const i of candyType) {
  s.add(i);
}
const can_eats = candyType.length / 2;

let ans = 0;
if (can_eats === s.size) {
  ans = s.size;
} else if (can_eats < s.size) {
  ans = can_eats;
} else {
  ans = s.size;
}
return ans;


TC: O(N)
SC:O(N) // store the occurence of the element in array
```

**Question 3**
We define a harmonious array as an array where the difference between its maximum value
and its minimum value is exactly 1.

Given an integer array nums, return the length of its longest harmonious subsequence
among all its possible subsequences.

A subsequence of an array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

**Example 1:**
Input: nums = [1,3,2,2,5,2,3,7]
Output: 5

**Explanation:** The longest harmonious subsequence is [3,2,2,2,3].

Solution :
```
function findMaxDiffPairs(nums, k) {
  // Sort the array.
  nums.sort();

  // Initialize variables.
  let i = 0,
    j = 0,
    max = 0,
    diff,
    cnt = 1;

  // Loop through the array.
  while (j < nums.length) {
    // Get the difference between the current and next elements.
    diff = nums[j] - nums[i];

    // If the difference is 1, update the maximum.
    if (diff == 1) {
      max = Math.max(max, cnt);
    }

    // If the difference is greater than 1, move the start pointer until the difference is 1.
    if (diff > 1) {
      while (diff > 1) {
        i++;
        diff = nums[j] - nums[i];
        cnt--;
      }
    }

    // Increment the end pointer and the count.
    j++;
    cnt++;
  }

  // Return the maximum.
  return max;
}

// Test cases.
let nums1 = [3, 1, 4, 1, 5];
let k1 = 2;
let expected1 = 2;

let nums2 = [1, 2, 3, 4, 5];
let k2 = 1;
let expected2 = 4;

let nums3 = [1, 3, 1, 5, 4];
let k3 = 0;
let expected3 = 1;

console.log(findMaxDiffPairs(nums1, k1) === expected1);
console.log(findMaxDiffPairs(nums2, k2) === expected2);
console.log(findMaxDiffPairs(nums3, k3) === expected3);


```


💡 **Question 4**
You have a long flowerbed in which some of the plots are planted, and some are not.
However, flowers cannot be planted in adjacent plots.
Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

**Example 1:**
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true


Solution :

```

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
 let count = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] == 0 && (i == 0 || flowerbed[i - 1] == 0) && (i == flowerbed.length - 1 || flowerbed[i + 1] == 0)) {
            flowerbed[i] = 1;
            count++;
        }
    }
    return count >= n;
};

TC : O(N)
SC:O(1)

```

💡 **Question 6**
Given an array of integers nums which is sorted in ascending order, and an integer target,
write a function to search target in nums. If target exists, then return its index. Otherwise,
return -1.

You must write an algorithm with O(log n) runtime complexity.

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4

**Explanation:** 9 exists in nums and its index is 4

SOlution:

```
let l = 0;
let h = nums.length - 1;
while (h >= l) {
  let mid = l + Math.floor((h - l) / 2);
  if (nums[mid] === target) return mid;
  else if (nums[mid] < target) l = mid + 1;
  else h = mid - 1;
}
return -1;

TC:O(NLogN)
SC:O(1)

```


**Question 7**
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is
monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.

**Example 1:**
Input: nums = [1,2,2,3]
Output: true


Solution:

```
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
   let inc = true ,dec=true;
   for(let i=0;i<nums.length;i++){
       if(nums[i]>nums[i+1])inc=false;
       if(nums[i]<nums[i+1])dec=false;
   }
   return inc||dec;
    
};

```


**Question 8**
You are given an integer array nums and an integer k.

In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.

The score of nums is the difference between the maximum and minimum elements in nums.

Return the minimum score of nums after applying the mentioned operation at most once for each index in it.

**Example 1:**
Input: nums = [1], k = 0
Output: 0

**Explanation:** The score is max(nums) - min(nums) = 1 - 1 = 0.

Solution :

```
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
     const min = Math.min(...nums);
    const max = Math.max(...nums);
    
    if (max - min <= 2*k) return 0;
    return max - min - 2*k;
};

```


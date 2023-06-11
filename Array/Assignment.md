**Q1.** Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

**Example:**
Input: nums = [2,7,11,15], target = 9
Output0 [0,1]

**Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1]

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
**Example:**
Input: nums = [2,7,11,15], target = 9
Output0 [0,1]

### Code :

#### Brute force :

```

var nums = [2,7,11,5];

var target = 9;




var ans=function(nums,target){
for(int i=0;i<nums.length;i++){
    for(int j=0;j<nums.length;j++){
        // checking index equal to target or not
        if(nums[i]+nums[j]==target){
            return [i,j];
        }
    }
}
}
console.log(ans(nums,target));

// TC: O(N^2);
// SC : O(1)

```

Optimized :

```
// Implementing with Hashmap


var nums = [2,7,11,5];
var target = 9;

// map using in this method
//

var ans=function(nums, target) {
  // Initialize the left and right pointers
  let left = 0, right = nums.length - 1;

  // Iterate until the left and right pointers meet
  while (left < right) {
    // Check if the sum of the numbers at the left and right pointers is equal to the target
    if (nums[left] + nums[right] === target) {
      // Return the pair of indices
      return [left, right];
    } else if (nums[left] + nums[right] < target) {
      // Increment the left pointer
      left++;
    } else {
      // Decrement the right pointer
      right--;
    }
  }

  // Return (-1, -1) if no such pair exists
  return [-1, -1];
}
console.log(ans(nums,target));


// TC : O(N)
// SC : O(1)


```

Q2. Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.
Example :
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2. It does not matter what you leave beyond the returned k (hence they are underscores)

Solution :

```

 var cnt=0;
        for(var i=0;i<nums.length;i++){
            if(nums[i]!=val){
                nums[cnt++]=nums[i];
            }
        }
        var cnt;
```

 **Q3.** Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

**Example 1:**
Input: nums = [1,3,5,6], target = 5

Output: 2

SOlution :

```
var l = 0,r=nums.size()-1;
while(l<r){
  var mid = l+(r-l)/2;
  if(num[mid]==target)return mid;
  else if(num[mid]<target)r=mid-1;
  else l=mid+1;
}

return -1;


```


**Q4.** You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

**Example 1:**
Input: digits = [1,2,3]
Output: [1,2,4]

**Explanation:** The array represents the integer 123.

Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].


Solution : 

``` 
return Array.from((BigInt(digits.join('')) + BigInt('1')).toString(), Number)  

```


💡 **Q5.** You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

**Example 1:**
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]

**Explanation:** The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.


Solution:

```
const intervals = [
  [1, 3],
  [2, 5],
  [6, 10],
];

function mergeIntervals(intervals) {
  // Check if the intervals array is empty
  if (intervals.length === 0) {
    return [];
  }

  // Sort the intervals array
  intervals.sort((a, b) => a[0] - b[0]);

  // Create a temporary variable to store the current interval
  let temp = intervals[0];

  // Iterate over the intervals array
  for (let it of intervals) {
    // Check if the current interval starts before the end of the previous interval
    if (it[0] <= temp[1]) {
      // Merge the intervals by updating the end of the previous interval
      temp[1] = Math.max(it[1], temp[1]);
    } else {
      // Add the previous interval to the merged intervals array
      mergedIntervals.push(temp);

      // Set the temporary variable to the current interval
      temp = it;
    }
  }

  // Add the last interval to the merged intervals array
  mergedIntervals.push(temp);

  // Return the merged intervals array
  return mergedIntervals;
}

const mergedIntervals = mergeIntervals(intervals);

console.log(mergedIntervals); 


```


 **Q6.** Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

**Example 1:**
Input: nums = [1,2,3,1]

Output: true

Solution :

```

function containsDuplicate(nums) {
  // Check if the array is empty
  if (nums.length <= 1) {
    return false;
  }

  // Create a set to store the unique values in the array
  const seen = new Set();

  // Iterate over the array
  for (const num of nums) {
    // Check if the number is already in the set
    if (seen.has(num)) {
      return true;
    }

    // Add the number to the set
    seen.add(num);
  }

  // Return false if no duplicate values were found
  return false;
}


```



💡 **Q7.** Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.

Note that you must do this in-place without making a copy of the array.

**Example 1:**
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]


Solution : 

```
function moveZeroes(nums) {
  // Initialize the index of the first non-zero element.
  let nonZeroIndex = 0;

  // Iterate through the array.
  for (let i = 0; i < nums.length; i++) {
    // If the current element is not a 0, then swap it with the element at the non-zero index.
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nums[i] = 0;
      nonZeroIndex++;
    }
  }
}
const nums = [0, 1, 0, 3, 12];

moveZeroes(nums);

console.log(nums); // [1, 3, 12, 0, 0]


```


**Q8.** You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

**Example 1:**
Input: nums = [1,2,2,4]
Output: [2,3]

Solution :

```
function findDuplicateAndMissing(nums) {
  // Create a set of all the numbers from 1 to n.
  const numSet = new Set();
  for (let i = 1; i <= nums.length; i++) {
    numSet.add(i);
  }

  // Find the number that occurs twice.
  const duplicate = nums.reduce((acc, num, i) => {
    if (nums.indexOf(num) !== i && numSet.has(num)) {
      acc = num;
    }
    return acc;
  }, null);

  // Find the number that is missing.
  const missing = numSet.values().filter(num => !nums.includes(num))[0];

  // Return the duplicate and missing number.
  return [duplicate, missing];
}

const nums = [1, 2, 2, 4];
const [duplicate, missing] = findDuplicateAndMissing(nums);

console.log(duplicate, missing); // 2 3

```
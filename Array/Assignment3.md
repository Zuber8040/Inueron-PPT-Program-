**Question 1**
Given an integer array nums of length n and an integer target, find three integers
in nums such that the sum is closest to the target.
Return the sum of the three integers.

You may assume that each input would have exactly one solution.

**Example 1:**
Input: nums = [-1,2,1,-4], target = 1
Output: 2

**Explanation:** The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

Solution:

```

// steps for this solution
// step 1 : sort the array
// step 2  : sum the arryay it size of 3 in sum variable
// step 3 : check sum is less than target if yes increase the sum  soo move second index
// step 4: chek sum is bigger than target or not if yes reduce the sum and reduce third index --
// step 5 : if sum == target return sum;


// code :

const arr=  [-1,2,1,-4]
let target  =-1;

if(arr.length<3)return 0
let closest  = arr[1]+arr[2]+arr[3];
// this closest till now
arr.sort();
// array will trave till n-2
for(let first=0;first<arr.length-2;first++){
    if(first>0 && nums[first]==nums[first-1])continue;


    int second=first+1;

    int third = arr.length-1;

    // check the till end
    while(second<third){
        let currSum = arr[first]+arr[second]+arr[third];
        if(currSum == target) return currSum;

        if(Maths.abs(target-currSum)<Maths.abs(target-closest))closest=currSum;
        
        if(currSum<ttarget)--third;
        else second++;
    }
}

return closest;

TC:O(N^2)
SC:O(1)


```


**Question 2**
Given an array nums of n integers, return an array of all the unique quadruplets
[nums[a], nums[b], nums[c], nums[d]] such that:
           ● 0 <= a, b, c, d < n
           ● a, b, c, and d are distinct.
           ● nums[a] + nums[b] + nums[c] + nums[d] == target

You may return the answer in any order.

**Example 1:**
Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

Solution:

```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    const result = []
    
    for(let i = 0; i < nums.length - 3; i++) {
        for(let j = i + 1; j < nums.length - 2; j++) {
            let low = j + 1;
            let high = nums.length - 1

            while(low < high) {
                const sum = nums[i] + nums[j] + nums[low] + nums[high];
                if(sum === target) {
                    result.push([nums[i], nums[j], nums[low], nums[high]])
                    while(nums[low] === nums[low + 1]) low++;
                    while(nums[high] === nums[high - 1]) high--;
                    low++;
                    high--;
                } else if(sum < target) {
                    low++
                } else {
                    high--
                }
            }   
            while(nums[j] === nums[j + 1]) j++;
        }   
        while(nums[i] === nums[i + 1]) i++;
    }
    return result
};

```


**Question 3**
A permutation of an array of integers is an arrangement of its members into a
sequence or linear order.

For example, for arr = [1,2,3], the following are all the permutations of arr:
[1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].

The next permutation of an array of integers is the next lexicographically greater
permutation of its integer. More formally, if all the permutations of the array are
sorted in one container according to their lexicographical order, then the next
permutation of that array is the permutation that follows it in the sorted container.

If such an arrangement is not possible, the array must be rearranged as the
lowest possible order (i.e., sorted in ascending order).

● For example, the next permutation of arr = [1,2,3] is [1,3,2].
● Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
● While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not
have a lexicographical larger rearrangement.

Given an array of integers nums, find the next permutation of nums.
The replacement must be in place and use only constant extra memory.

**Example 1:**
Input: nums = [1,2,3]
Output: [1,3,2]


Solution :

```

var nextPermutation = function(nums) {
    
    for(let i = nums.length-1; i >= 0; i--) {
        if(nums[i] < nums[i+1]) {
            const large = nextLarge(i);
            swap(i, large);
            reverse(i+1);
            return;
        }
    }
	
	// If there is no next permutation reverse the arr
    nums.reverse()
    
    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    
    function reverse(idx) {
        let start = idx, end = nums.length-1;
        
        while(start < end) {
            swap(start, end);
            start++;
            end--;
        }
    }
    
    function nextLarge(idx) {
        for(let i = nums.length-1; i > idx; i--) {
            if(nums[i] > nums[idx]) return i;
        }
    }
};

TC:O(N);
SC:O(1)


```


**Question 4**
Given a sorted array of distinct integers and a target value, return the index if the
target is found. If not, return the index where it would be if it were inserted in
order.

You must write an algorithm with O(log n) runtime complexity.

**Example 1:**
Input: nums = [1,3,5,6], target = 5
Output: 2


Solution:

```

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length-1;

    while(start<=end){
        let mid = start+(end-start)/2;

        if(nums[mid]==target)return mid;
        else if(nums[mid]>target){
            end=mid;
        }
        else {
            start=mid+1;
        }
    }
    return nums[start]<target ? start+1 : start

};

TC:O(NLOGN)
SC:O(1)


```

**Question 5**
You are given a large integer represented as an integer array digits, where each
digits[i] is the ith digit of the integer. The digits are ordered from most significant
to least significant in left-to-right order. The large integer does not contain any
leading 0's.

Increment the large integer by one and return the resulting array of digits.

**Example 1:**
Input: digits = [1,2,3]
Output: [1,2,4]

**Explanation:** The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

Solution:

```
var plusOne = function(digits) {
for(var i = digits.length - 1; i >= 0; i--){
     digits[i]++; 
    if(digits[i] > 9){
        digits[i] = 0;
    }else{
        return digits;
    }
}
digits.unshift(1);
return digits;
};

TC:O(N)
SC:O(1)

```
**Question 6**
Given a non-empty array of integers nums, every element appears twice except
for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only
constant extra space.

**Example 1:**
Input: nums = [2,2,1]
Output: 1

Solution:

``` // i will use bitmanipuation
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let ans = 0;
    for(let i=0; i<nums.length;i++){
        ans^=nums[i];
    }  
    return ans;

};
```


**Question 7**
You are given an inclusive range [lower, upper] and a sorted unique integer array
nums, where all elements are within the inclusive range.

A number x is considered missing if x is in the range [lower, upper] and x is not in
nums.

Return the shortest sorted list of ranges that exactly covers all the missing
numbers. That is, no element of nums is included in any of the ranges, and each
missing number is covered by one of the ranges.

**Example 1:**
Input: nums = [0,1,3,50,75], lower = 0, upper = 99
Output: [[2,2],[4,49],[51,74],[76,99]]

**Explanation:** The ranges are:
[2,2]
[4,49]
[51,74]
[76,99]

Solution:
```
    // Create a list of string to store the output result...
    const output = [];
    // Start traversing the array from idx = 0 till idx < sizeofarray in a while loop.
    let idx = 0;
    while(idx < nums.length) {
        // Initialize beg and last index for identifying the continuous element in the array...
        let beg, last;
        // Mark the number at current index as beginning element of the range...
        beg = nums[idx];
        // Traverse the array beggining from current index & find the last element whose difference from previous element is exactly 1, i.e. nums[idx + 1] == nums[idx] + 1...
        while(idx+1 < nums.length && nums[idx+1] == nums[idx] + 1) 
            idx++;
        // Set this element as last element of the range...
        last = nums[idx];
        // If continuous element isn't present...
        if(beg == last)
            output.push(beg + "");
        // If present...
        else
            output.push( beg + "->" + last );
        idx++;          
    }
    return output;      // Return the output result list...

TC:O(N)
SC:O(1)
```


**Question 8**
Given an array of meeting time intervals where intervals[i] = [starti, endi],
determine if a person could attend all meetings.

**Example 1:**
Input: intervals = [[0,30],[5,10],[15,20]]
Output: false

Solution:

```
    /**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
  intervals.sort((a,b) => a[0] - b[0]);
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) { return false; }
  }
  return true;
};

```

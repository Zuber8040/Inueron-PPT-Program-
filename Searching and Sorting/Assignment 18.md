 1. **Merge Intervals**

Given an array of `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return *an array of the non-overlapping intervals that cover all the intervals in the input*.

**Example 1:**

```
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

```

**Example 2:**

```
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

```

**Constraints:**

- `1 <= intervals.length <= 10000`
- `intervals[i].length == 2`
- `0 <= starti <= endi <= 10000`

Solution :


```
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
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
};

```

 2. **Sort Colors**

Given an array `nums` with `n` objects colored red, white, or blue, sort them **[in-place](https://en.wikipedia.org/wiki/In-place_algorithm)** so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers `0`, `1`, and `2` to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

**Example 1:**

```
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

```

**Example 2:**

```
Input: nums = [2,0,1]
Output: [0,1,2]

```

**Constraints:**

- `n == nums.length`
- `1 <= n <= 300`
- `nums[i]` is either `0`, `1`, or `2`.

Solution :


```

var sortColors = function(arr) {
    
    let i=0
    for( let j=0; j<arr.length; j++){
        if(arr[j]==0){ 
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++
        }
    
    }

    let k=i
    for( let m=0; m<arr.length; m++){
        if(arr[m]==1){
             [arr[m], arr[k]] = [arr[k], arr[m]]
             k++
        }
       
    }   

};

```

3. **First Bad Version Solution**

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have `n` versions `[1, 2, ..., n]` and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API `bool isBadVersion(version)` which returns whether `version` is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

**Example 1:**

```
Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.

```

**Example 2:**

```
Input: n = 1, bad = 1
Output: 1

```

**Constraints:**

- `1 <= bad <= n <= 2^31 - 1`


Solution :


```
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // binary search
       var start = 1, end = n;
       while(start < end){
           var mid = Math.floor(start + (end-start) / 2);
           if(isBadVersion(mid)){
                end = mid; // look on left side of mid
           }else{
               start = mid+1; // look on the right side of mid
           }
       }
       return start;
    };
};


```

 4. **Maximum Gap**

Given an integer array `nums`, return *the maximum difference between two successive elements in its sorted form*. If the array contains less than two elements, return `0`.

You must write an algorithm that runs in linear time and uses linear extra space.

**Example 1:**

```
Input: nums = [3,6,9,1]
Output: 3
Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.

```

**Example 2:**

```
Input: nums = [10]
Output: 0
Explanation: The array contains less than 2 elements, therefore return 0.

```

**Constraints:**

- `1 <= nums.length <= 10^5`
- `0 <= nums[i] <= 10^9`

Solution :


```
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    
    let bucketSize = Math.max(1, Math.floor((max - min)/ nums.length - 1));
    
    let buckets = {};
    
    for(let i=0;i<nums.length;i++) {
        let bucketId = Math.floor((nums[i] - min) / bucketSize);
        buckets[bucketId] = {
            min: Math.min(nums[i], buckets[bucketId] ? buckets[bucketId].min : Infinity),
            max: Math.max(nums[i], buckets[bucketId] ? buckets[bucketId].max : -Infinity)
        };
    }

	let prevBucketMax = min, maxGap = 0;
    Object.values(buckets).forEach((b) => {
			maxGap = Math.max(maxGap, b.min - prevBucketMax);
            prevBucketMax = b.max;
    });
    
    return maxGap;
};

```


 5. **Contains Duplicate**

Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.

**Example 1:**

```
Input: nums = [1,2,3,1]
Output: true

```

**Example 2:**

```
Input: nums = [1,2,3,4]
Output: false

```

**Example 3:**

```
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

```

**Constraints:**

- `1 <= nums.length <= 10^5`
- `109 <= nums[i] <= 10^9`

Solution :

```
// Time complexity: O(n)
// Space complexity: O(n)
var containsDuplicate = function(nums) {
    const s = new Set(nums); return s.size !== nums.length
};

```

 6. **Minimum Number of Arrows to Burst Balloons**

There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array `points` where `points[i] = [xstart, xend]` denotes a balloon whose **horizontal diameter** stretches between `xstart` and `xend`. You do not know the exact y-coordinates of the balloons.

Arrows can be shot up **directly vertically** (in the positive y-direction) from different points along the x-axis. A balloon with `xstart` and `xend` is **burst** by an arrow shot at `x` if `xstart <= x <= xend`. There is **no limit** to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path.

Given the array `points`, return *the **minimum** number of arrows that must be shot to burst all balloons*.

**Example 1:**

```
Input: points = [[10,16],[2,8],[1,6],[7,12]]
Output: 2
Explanation: The balloons can be burst by 2 arrows:
- Shoot an arrow at x = 6, bursting the balloons [2,8] and [1,6].
- Shoot an arrow at x = 11, bursting the balloons [10,16] and [7,12].

```

**Example 2:**

```
Input: points = [[1,2],[3,4],[5,6],[7,8]]
Output: 4
Explanation: One arrow needs to be shot for each balloon for a total of 4 arrows.

```

**Example 3:**

```
Input: points = [[1,2],[2,3],[3,4],[4,5]]
Output: 2
Explanation: The balloons can be burst by 2 arrows:
- Shoot an arrow at x = 2, bursting the balloons [1,2] and [2,3].
- Shoot an arrow at x = 4, bursting the balloons [3,4] and [4,5].

```

**Constraints:**

- `1 <= points.length <= 10^5`
- `points[i].length == 2`
- `231 <= xstart < xend <= 2^31 - 1`

Solution :

```
// Time complexity: O(n)
// Space complexity: O(n)
var containsDuplicate = function(nums) {
    const s = new Set(nums); return s.size !== nums.length
};
```

7. **Longest Increasing Subsequence**

Given an integer array `nums`, return *the length of the longest **strictly increasing***

***subsequence***

.

**Example 1:**

```
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

```

**Example 2:**

```
Input: nums = [0,1,0,3,2,3]
Output: 4

```

**Example 3:**

```
Input: nums = [7,7,7,7,7,7,7]
Output: 1

```

**Constraints:**

- `1 <= nums.length <= 2500`
- `-10^4 <= nums[i] <= 10^4`

Solution :


```
const lengthOfLIS = (nums) => {
	let dp = new Array(nums.length).fill(1);
	let longest = 1;
	for (let i = 1; i < nums.length; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[j] < nums[i]) {
				dp[i] = Math.max(dp[i], dp[j]+1);
				longest = Math.max(longest, dp[i]);
			}
		}
	}
	return longest;
}
```

8. **132 Pattern**

Given an array of `n` integers `nums`, a **132 pattern** is a subsequence of three integers `nums[i]`, `nums[j]` and `nums[k]` such that `i < j < k` and `nums[i] < nums[k] < nums[j]`.

Return `true` *if there is a **132 pattern** in* `nums`*, otherwise, return* `false`*.*

**Example 1:**

```
Input: nums = [1,2,3,4]
Output: false
Explanation: There is no 132 pattern in the sequence.

```

**Example 2:**

```
Input: nums = [3,1,4,2]
Output: true
Explanation: There is a 132 pattern in the sequence: [1, 4, 2].

```

**Example 3:**

```
Input: nums = [-1,3,2,0]
Output: true
Explanation: There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].

```

**Constraints:**

- `n == nums.length`
- `1 <= n <= 2 * 10^5`
- `-10^9 <= nums[i] <= 10^9`

Solution :


```
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    // sanity check
    if (nums.length < 3) return false;

    let N2 = []; // potential candidates, number 2
    let N1 = [nums[0]]; // the smallest number, number 3

    for (let i=1;i<nums.length;i++) { 
        N1.push(Math.min(N1[N1.length-1], nums[i]));
    }

    for (let i=nums.length-1;i>=0;i--) { // number 3
        if (nums[i] > N1[i]) {
            // remove useless N2 candidates
            while (N2.length!=0 && N2[N2.length-1] <= N1[i]) N2.pop();
            // found a pattern
            if (N2.length!=0 && N2[N2.length-1] < nums[i]) return true;
            N2.push(nums[i]);
        }
    }
    return false;
}
```
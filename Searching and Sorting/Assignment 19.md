 1. **Merge k Sorted Lists**

You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.

*Merge all the linked-lists into one sorted linked-list and return it.*

**Example 1:**

```
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6

```

**Example 2:**

```
Input: lists = []
Output: []

```

**Example 3:**

```
Input: lists = [[]]
Output: []

```

**Constraints:**

- `k == lists.length`
- `0 <= k <= 10000`
- `0 <= lists[i].length <= 500`
- `-10000 <= lists[i][j] <= 10000`
- `lists[i]` is sorted in **ascending order**.
- The sum of `lists[i].length` will not exceed `10000`.

Solution :


```
function mergeLists(a, b) {
    const dummy = new ListNode(0);
    let temp = dummy;
     while (a !== null && b !== null) {
         if (a.val < b.val) {
             temp.next = a;
             a = a.next;
         } else {
             temp.next = b;
             b = b.next;
         }
         temp = temp.next;
     }
    if (a !== null) {
        temp.next = a;
    }
    if (b !== null) {
        temp.next = b;
    }
    return dummy.next;
}

var mergeKLists = function(lists) {
    if (lists.length === 0 ) {
        return null;
    }
    // two two
    // priority queue
    while (lists.length > 1) {
        let a = lists.shift(); // the head will contains the "less" length list
        let b = lists.shift(); // acturally, we can use the linkedlist to replace it, the while loop will be the while( list.header.next !== null || lists.length > 0)
        const h = mergeLists(a, b);
        lists.push(h);
    }
    return lists[0];
};
```

2. **Count of Smaller Numbers After Self**

Given an integer array `nums`, return *an integer array* `counts` *where* `counts[i]` *is the number of smaller elements to the right of* `nums[i]`.

**Example 1:**

```
Input: nums = [5,2,6,1]
Output: [2,1,1,0]
Explanation:
To the right of 5 there are2 smaller elements (2 and 1).
To the right of 2 there is only1 smaller element (1).
To the right of 6 there is1 smaller element (1).
To the right of 1 there is0 smaller element.

```

**Example 2:**

```
Input: nums = [-1]
Output: [0]

```

**Example 3:**

```
Input: nums = [-1,-1]
Output: [0,0]

```

**Constraints:**

- `1 <= nums.length <= 100000`
- `-10000 <= nums[i] <= 10000`

Solution :


```
var countSmallerBinarySearch = function(nums) {
    let sorted = [], result = [];
    for (let i=nums.length-1;i>=0;i--) {
        let left = 0, right = sorted.length;
        while(left < right) {
            let mid = left + Math.floor((right-left)/2);
            if (nums[i] > sorted[mid]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        result.unshift(left);
        sorted.splice(left, 0, nums[i]);
    }
    return result;
}

```

3. **Sort an Array**

Given an array of integers `nums`, sort the array in ascending order and return it.

You must solve the problem **without using any built-in** functions in `O(nlog(n))` time complexity and with the smallest space complexity possible.

**Example 1:**

```
Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).

```

**Example 2:**

```
Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessairly unique.

```

**Constraints:**

- `1 <= nums.length <= 5 * 10000`
- `-5 * 104 <= nums[i] <= 5 * 10000`


## **Solution** :

```

var quickSort = function(nums) {
    
    function quickSortHelper(nums, start, end) {
        if (start >= end) return nums
    
        var pivotValue = nums[start]
        var smaller = start
        for (var i = start + 1; i <= end; i++) {
            var bigger = i
            if (nums[bigger] < pivotValue) {
                smaller++
                var smallerValue = nums[bigger]
                nums[bigger] = nums[smaller]
                nums[smaller] = smallerValue
            }
        }
        var smallerCache = nums[smaller]
        nums[smaller] = nums[start]
        nums[start] = smallerCache
        
        quickSortHelper(nums, start, smaller - 1)
        quickSortHelper(nums, smaller + 1, end)
        return nums
    }
    
    return quickSortHelper(nums, 0, nums.length - 1)
};
```

 4. **Move all zeroes to end of array**

Given an array of random numbers, Push all the zero’s of a given array to the end of the array. For example, if the given arrays is {1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0}, it should be changed to {1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0}. The order of all other elements should be same. Expected time complexity is O(n) and extra space is O(1).

**Example:**

```
Input :  arr[] = {1, 2, 0, 4, 3, 0, 5, 0};
Output : arr[] = {1, 2, 4, 3, 5, 0, 0, 0};

Input : arr[]  = {1, 2, 0, 0, 0, 3, 6};
Output : arr[] = {1, 2, 3, 6, 0, 0, 0};
```

## Solution :

```
// Javascript program to shift all zeros
// to right most side of array
// without affecting order of non-zero
// elements.

// function to shift zeros
function move_zeros_to_right( m)
{
	let count = 0;
	for (let i = 0; i < m.length; i++) {
		if (m[i] == 0) {
			count++;
			
			// deleting the element from vector
			//m.erase(m.begin() + i);
			m.splice(i,1);
			i--;
		}
	}
	
	for (let i = 0; i < count; i++)
	{
	
		// inserting the zero into vector
		m.push(0);
	}
	console.log( "array after shifting zeros to right side: ");
	var str= m.join(' ');
	console.log(str)
}

	let m = [ 5, 6, 0, 4, 6, 0, 9, 0, 8 ];
	
	// function call
	move_zeros_to_right(m);
	


```

 5. **Rearrange array in alternating positive & negative items with O(1) extra space**

Given an **array of positive** and **negative numbers**, arrange them in an **alternate** fashion such that every positive number is followed by a negative and vice-versa maintaining the **order of appearance**. The number of positive and negative numbers need not be equal. If there are more positive numbers they appear at the end of the array. If there are more negative numbers, they too appear at the end of the array.

**Examples:**

> Input:  arr[] = {1, 2, 3, -4, -1, 4}
Output: arr[] = {-4, 1, -1, 2, 3, 4}

Input:  arr[] = {-5, -2, 5, 2, 4, 7, 1, 8, 0, -8}
Output: arr[] = {-5, 5, -2, 2, -8, 4, 7, 1, 8, 0}
> 

Solution :

```
function rearrangeArray(nums: number[]): number[] {
    const result: number[] = [];
    const index = {pos: 0, neg: 1};

    for (const num of nums) {
        const sign = num >= 0 ? 'pos' : 'neg';

        result[index[sign]] = num;
        index[sign] += 2;
    }
    return result;
}
```

 **6. Merge two sorted arrays**

Given two sorted arrays, the task is to merge them in a sorted manner.

**Examples:**

> Input: arr1[] = { 1, 3, 4, 5}, arr2[] = {2, 4, 6, 8} 
Output: arr3[] = {1, 2, 3, 4, 4, 5, 6, 8}

Input: arr1[] = { 5, 8, 9}, arr2[] = {4, 7, 8}
Output: arr3[] = {4, 5, 7, 8, 8, 9}
> 

Solution :

```
var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    
    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
};
```

 7. **Intersection of Two Arrays**

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

**Constraints:**

- `1 <= nums1.length, nums2.length <= 1000`
- `0 <= nums1[i], nums2[i] <= 1000`

Solution :

```
function intersect(nums1, nums2){
    let map = new Map();
    for(let num of nums1){
        if(!map.has(num))
            map.set(num, 1);
    }
    
    return nums2.filter(n => {
        if(map.has(n)){
            map.delete(n);
            return true;
        }
        else return false;
    });
}

```

8. **Intersection of Two Arrays II**

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

**Constraints:**

- `1 <= nums1.length, nums2.length <= 1000`
- `0 <= nums1[i], nums2[i] <= 1000`


Solution :

```

var intersect = function(nums1, nums2) {
    const map = new Map();
    for (const n of nums1) {
        if (map.has(n)) {
            map.set(n, map.get(n) + 1);
        } else {
            map.set(n, 1);
        }
    }
    const result = [];
    for (const n of nums2) {
        if (map.has(n) && map.get(n) > 0) {
            result.push(n);
            map.set(n, map.get(n) - 1);
        }
    }
    return result;
};
```
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well. You must not use any built-in exponent function or operator. 

 Example 1:
Input: x = 4 Output: 2 Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8 Output: 2 Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
Constraints:

0 <= x <= 231 - 1

Note: Create a GitHub file for the solution and add the file link the the answer section below.

Solution:

```
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x==0)return 0;

    let start = 1;
    let end =  Math.floor(x/2)+1;

    while(start<=end){
        let mid = Math.floor((left+right)/2);

        if(mid*mid>x){
            start=mid-1;

        }
        else if(mid*mid<x){
            end=mid+1;

        }
        else return mid;
    }
    return end;
};


```
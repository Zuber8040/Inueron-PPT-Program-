
**Question 1**

Given two strings s and t, *determine if they are isomorphic*.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

**Example 1:**

**Input:** s = "egg", t = "add"

**Output:** true

Solution:

```
// Runtime: 83 ms, faster than 88.18% of JavaScript online submissions for Isomorphic Strings.
// Time Complexity : O(n)
var isIsomorphic = function(s, t) {
    // Base case: for different length of two strings...
    if(s.length != t.length)
        return false;
    // Create two maps for s & t strings...
    const map1 = [256];
    const map2 = [256];
    // Traverse all elements through the loop...
    for(let idx = 0; idx < s.length; idx++){
        // Compare the maps, if not equal, return false...
        if(map1[s.charAt(idx)] != map2[t.charAt(idx)])
            return false;
        // Insert each character if string s and t into seperate map...
        map1[s.charAt(idx)] = idx + 1;
        map2[t.charAt(idx)] = idx + 1;
    }
    return true;    // Otherwise return true...
};

```



**Question 2**

Given a string num which represents an integer, return true *if* num *is a **strobogrammatic number***.

A **strobogrammatic number** is a number that looks the same when rotated 180 degrees (looked at upside down).

**Example 1:**

**Input:** num = "69"

**Output:**

true

Solution:

```
var isStrobogrammatic = function(num){
    var mymap = new Map();
    mymap.set('1','1');
    mymap.set('0','0');
    mymap.set('8','8');
    mymap.set('6','6');
    mymap.set('9','9');

    let i=0;
    let j=num.length-1;
    while(i<=j){
        let ch1 = num[i];
        let ch2 = num[j];
        if(mymap.has(ch1) && mymap.has(ch2) mymap.get(ch1)==ch2 )
        i++;
        j--;
    } 
    else return false;

return true;
};

// TC: O(N);
// SC : O(N);

```



**Question 3**

Given two non-negative integers, num1 and num2 represented as string, return *the sum of* num1 *and* num2 *as a string*.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

**Example 1:**

**Input:** num1 = "11", num2 = "123"

**Output:**

"134"

Solution:

```
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {

    let i = num1.length-1;
    let j = num2.length-1;
    let sum = "";
    let carry =0;
    while(i>=0 || j>=0 || carry>0){
        const digit1 = i<0?0:num1.charAt(i)-'0';
        const digit2 = j<0?0:num2.charAt(j)-'0';
        const digitSum = digit1+digit2+carry;

        sum = `${digitsSum % 10}${sum}`;

        carry = Math.floor(digitSum/10);
    }

return sum;
};


```


**Question 4**

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

**Example 1:**

**Input:** s = "Let's take LeetCode contest"

**Output:** "s'teL ekat edoCteeL tsetnoc"

Solution:

```
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let res= '';
    let word ='';
    for(let c of s){
        if(c==' '){res+=word+c;
        word='';
        }
        else word = c+word;
    }
    return res+word;
};

```


**Question 5**

Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

**Example 1:**

**Input:** s = "abcdefg", k = 2

**Output:**

"bacdfeg"




Solution:

```


```





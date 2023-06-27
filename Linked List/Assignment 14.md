<aside>
💡 **Question 1**

Given a linked list of **N** nodes such that it may contain a loop.

A loop here means that the last node of the link list is connected to the node at position X(1-based index). If the link list does not have any loop, X=0.

Remove the loop from the linked list, if it is present, i.e. unlink the last node which is forming the loop.

**Example 1:**

```
Input:
N = 3
value[] = {1,3,4}
X = 2
Output:1
Explanation:The link list looks like
1 -> 3 -> 4
     ^    |
     |____|
A loop is present. If you remove it
successfully, the answer will be 1.

```

**Example 2:**

```
Input:
N = 4
value[] = {1,8,3,4}
X = 0
Output:1
Explanation:The Linked list does not
contains any loop.
```

**Example 3:**

```
Input:
N = 4
value[] = {1,2,3,4}
X = 1
Output:1
Explanation:The link list looks like
1 -> 2 -> 3 -> 4
^              |
|______________|
A loop is present.
If you remove it successfully,
the answer will be 1.
```

Solution :

```
<script>

// Javascript program to detect and
// remove loop in linked list
var head;

class Node
{
	constructor(val)
	{
		this.data = val;
		this.next = null;
	}
}

// Function that detects loop in the list
function detectAndRemoveLoop(node)
{
	var slow = node, fast = node;
	while (slow != null &&
		fast != null &&
		fast.next != null)
	{
		slow = slow.next;
		fast = fast.next.next;

		// If slow and fast meet at same
		// point then loop is present
		if (slow == fast)
		{
			removeLoop(slow, node);
			return 1;
		}
	}
	return 0;
}

// Function to remove loop
function removeLoop(loop, head)
{
	var ptr1 = loop;
	var ptr2 = loop;

	// Count the number of nodes in loop
	var k = 1, i;
	
	while (ptr1.next != ptr2)
	{
		ptr1 = ptr1.next;
		k++;
	}

	// Fix one pointer to head
	ptr1 = head;

	// And the other pointer to
	// k nodes after head
	ptr2 = head;
	for(i = 0; i < k; i++)
	{
		ptr2 = ptr2.next;
	}

	/* Move both pointers at the same pace,
	they will meet at loop starting node */
	while (ptr2 != ptr1)
	{
		ptr1 = ptr1.next;
		ptr2 = ptr2.next;
	}

	// Get pointer to the last node
	while (ptr2.next != ptr1)
	{
		ptr2 = ptr2.next;
	}

	/* Set the next node of the loop ending node
	to fix the loop */
	ptr2.next = null;
}

// Function to print the linked list
function printList(node)
{
	while (node != null)
	{
		document.write(node.data + " ");
		node = node.next;
	}
}

// Driver code
head = new Node(50);
head.next = new Node(20);
head.next.next = new Node(15);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(10);

// Creating a loop for testing
head.next.next.next.next.next = head.next.next;
detectAndRemoveLoop(head);
document.write("Linked List after removing loop : ");
printList(head);



```

<aside>
💡 **Question 2**

A number **N** is represented in Linked List such that each digit corresponds to a node in linked list. You need to add 1 to it.

**Example 1:**

```
Input:
LinkedList: 4->5->6
Output:457

```

**Example 2:**

```
Input:
LinkedList: 1->2->3
Output:124
```

Solution :

```
<script>

// Javascript program to add 1 to a linked list

/* Linked list node */
class Node
{
	constructor()
	{
		this.data = 0;
		this.next = null;
	}
};

/* Function to create a new node with given data */
function newNode(data)
{
	var new_node = new Node();
	new_node.data = data;
	new_node.next = null;
	return new_node;
}

/* Function to reverse the linked list */
function reverse(head)
{
	var prev = null;
	var current = head;
	var next;
	while (current != null)
	{
		next = current.next;
		current.next = prev;
		prev = current;
		current = next;
	}
	return prev;
}

/* Adds one to a linked lists and return the head
node of resultant list */
function addOneUtil(head)
{
	// res is head node of the resultant list
	var res = head;
	var temp, prev = null;

	var carry = 1, sum;

	while (head != null) //while both lists exist
	{
		// Calculate value of next digit in resultant list.
		// The next digit is sum of following things
		// (i) Carry
		// (ii) Next digit of head list (if there is a
		// next digit)
		sum = carry + head.data;

		// update carry for next calculation
		carry = (sum >= 10)? 1 : 0;

		// update sum if it is greater than 10
		sum = sum % 10;

		// Create a new node with sum as data
		head.data = sum;

		// Move head and second pointers to next nodes
		temp = head;
		head = head.next;
	}

	// if some carry is still there, add a new node to
	// result list.
	if (carry > 0)
		temp.next = newNode(carry);

	// return head of the resultant list
	return res;
}

// This function mainly uses addOneUtil().
function addOne(head)
{
	// Reverse linked list
	head = reverse(head);

	// Add one from left to right of reversed
	// list
	head = addOneUtil(head);

	// Reverse the modified list
	return reverse(head);
}

// A utility function to print a linked list
function printList(node)
{
	while (node != null)
	{
		document.write( node.data);
		node = node.next;
	}
	document.write("<br>");
}

/* Driver program to test above function */
var head = newNode(1);
head.next = newNode(9);
head.next.next = newNode(9);
head.next.next.next = newNode(9);
document.write( "List is ");
printList(head);
head = addOne(head);
document.write( "<br>Resultant list is ");
printList(head);


```


💡 **Question 3**

Given a Linked List of size N, where every node represents a sub-linked-list and contains two pointers:(i) a **next** pointer to the next node,(ii) a **bottom** pointer to a linked list where this node is head.Each of the sub-linked-list is in sorted order.Flatten the Link List such that all the nodes appear in a single level while maintaining the sorted order. **Note:** The flattened list will be printed using the bottom pointer instead of next pointer.

**Example 1:**

```
Input:
5 -> 10 -> 19 -> 28
|     |     |     |
7     20    22   35
|           |     |
8          50    40
|                 |
30               45
Output: 5-> 7-> 8- > 10 -> 19-> 20->
22-> 28-> 30-> 35-> 40-> 45-> 50.
Explanation:
The resultant linked lists has every
node in a single level.(Note:| represents the bottom pointer.)

```

**Example 2:**

```
Input:
5 -> 10 -> 19 -> 28
|          |
7          22
|          |
8          50
|
30
Output: 5->7->8->10->19->22->28->30->50
Explanation:
The resultant linked lists has every
node in a single level.

Solution :

```
// javascript program for flattening a Linked List
var head; // head of list

	/* Linked list Node */
	
	class Node {
			constructor(val) {
				this.data = val;
				this.down = null;
				this.next = null;
			}
		}

	// An utility function to merge two sorted linked lists
	function merge(a, b) {
		// if first linked list is empty then second
		// is the answer
		if (a == null)
			return b;

		// if second linked list is empty then first
		// is the result
		if (b == null)
			return a;

		// compare the data members of the two linked lists
		// and put the larger one in the result
		var result;

		if (a.data < b.data) {
			result = a;
			result.down = merge(a.down, b);
		}

		else {
			result = b;
			result.down = merge(a, b.down);
		}

		result.right = null;
		return result;
	}

	function flatten(root) {
		// Base Cases
		if (root == null || root.right == null)
			return root;

		// recur for list on right
		root.right = flatten(root.right);

		// now merge
		root = merge(root, root.right);

		// return the root
		// it will be in turn merged with its left
		return root;
	}

	/*
	* Utility function to insert a node at beginning of the linked list
	*/
	function push(head_ref , data) {
		/*
		* 1 & 2: Allocate the Node & Put in the data
		*/
		var new_node = new Node(data);

		/* 3. Make next of new Node as head */
		new_node.down = head_ref;

		/* 4. Move the head to point to new Node */
		head_ref = new_node;

		/* 5. return to link it back */
		return head_ref;
	}

	function printList() {
	var temp = head;
		while (temp != null) {
			document.write(temp.data + " ");
			temp = temp.down;
		}
		document.write();
	}

	/* Driver program to test above functions */
	
		

		/*
		* Let us create the following linked list 5 -> 10 -> 19 -> 28 | | | | V V V V 7
		* 20 22 35 | | | V V V 8 50 40 | | V V 30 45
		*/

		head = push(head, 30);
		head = push(head, 8);
		head = push(head, 7);
		head = push(head, 5);

		head.right = push(head.right, 20);
		head.right = push(head.right, 10);

		head.right.right = push(head.right.right, 50);
		head.right.right = push(head.right.right, 22);
		head.right.right = push(head.right.right, 19);

		head.right.right.right = push(head.right.right.right, 45);
		head.right.right.right = push(head.right.right.right, 40);
		head.right.right.right = push(head.right.right.right, 35);
		head.right.right.right = push(head.right.right.right, 20);

		// flatten the list
		head = flatten(head);

		printList();

**Question 4**

You are given a special linked list with **N** nodes where each node has a next pointer pointing to its next node. You are also given **M** random pointers, where you will be given **M** number of pairs denoting two nodes **a** and **b**  **i.e. a->arb = b** (arb is pointer to random node)**.**

Construct a copy of the given list. The copy should consist of exactly **N** new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

For example, if there are two nodes **X** and **Y** in the original list, where **X.arb** **-->** **Y**, then for the corresponding two nodes **x** and **y** in the copied list, **x.arb --> y.**

Return the head of the copied linked list.


**Note** :- The diagram isn't part of any example, it just depicts an example of how the linked list may look like.

**Example 1:**

```
Input:
N = 4, M = 2
value = {1,2,3,4}
pairs = {{1,2},{2,4}}
Output:1
Explanation:In this test case, there
are 4 nodes in linked list.  Among these
4 nodes,  2 nodes have arbitrary pointer
set, rest two nodes have arbitrary pointer
as NULL. Second line tells us the value
of four nodes. The third line gives the
information about arbitrary pointers.
The first node arbitrary pointer is set to
node 2.  The second node arbitrary pointer
is set to node 4.

```

**Example 2:**

```
Input:
N = 4, M = 2
value[] = {1,3,5,9}
pairs[] = {{1,1},{3,4}}
Output:1
Explanation:In the given testcase ,
applying the method as stated in the
above example, the output will be 1.



````

SOlution:

```
// Javascript code to implement the approach
class Node {
constructor(val) {
	this.val = val;
	this.next = null;
	this.arbit = null;
}
}

const cloneLinkedList = (head) => {

// Map to store the mapping of old nodes with new ones
const mp = new Map();
let temp = head;
let nhead = new Node(temp.val);
mp.set(temp, nhead);

// Loop to create duplicates of nodes with only next pointer
while (temp.next) {
	nhead.next = new Node(temp.next.val);
	temp = temp.next;
	nhead = nhead.next;
	mp.set(temp, nhead);
}
temp = head;

// Loop to clone the arbit pointers
while (temp) {
	mp.get(temp).arbit = mp.get(temp.arbit);
	temp = temp.next;
}

// Return the head of the clone
return mp.get(head);
}

const printList = (head) => {
let str = `${head.val}(${head.arbit.val})`;
head = head.next;
while (head) {
	str += ` -> ${head.val}(${head.arbit.val})`;
	head = head.next;
}
console.log(str);
}

// Creating a linked list with random pointer
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.arbit = head.next.next;
head.next.arbit = head;
head.next.next.arbit = head.next.next.next.next;
head.next.next.next.arbit = head.next.next;
head.next.next.next.next.arbit = head.next;

// Print the original list
console.log("The original linked list:");
printList(head);

// Function call
const sol = cloneLinkedList(head);

console.log("The cloned linked list:");
printList(sol);
```

<aside>
💡 **Question 5**

Given the `head` of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return *the reordered list*.

The **first** node is considered **odd**, and the **second** node is **even**, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in `O(1)` extra space complexity and `O(n)` time complexity.

**Example 1:**

!https://assets.leetcode.com/uploads/2021/03/10/oddeven-linked-list.jpg

```
Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]

```

**Example 2:**

!https://assets.leetcode.com/uploads/2021/03/10/oddeven2-linked-list.jpg

```
Input: head = [2,1,3,5,6,4,7]
Output: [2,3,6,7,1,5,4]
```
Solution:

```

function oddEvenList(head: ListNode | null): ListNode | null {
    if (!head || !head.next)
        return head;

    let { val, next: { val: val1, next: node }} = head;

    const oddList = new ListNode(val), evenList = new ListNode(val1);
    let tmp = oddList, tmp1 = evenList, i = 2;

    while (node) {
        const { val, next } = node;

        if (i % 2) {
            tmp1.next = new ListNode(val);
            tmp1 = tmp1.next;
        } else {
            tmp.next = new ListNode(val);
            tmp = tmp.next;
        }
        
        node = next;
        i++;
    }

    if (evenList)
        tmp.next = evenList;

    return oddList;
}


```

<aside>
💡 **Question 6**

Given a singly linked list of size **N**. The task is to **left-shift** the linked list by **k** nodes, where **k** is a given positive integer smaller than or equal to length of the linked list.

**Example 1:**

```
Input:
N = 5
value[] = {2, 4, 7, 8, 9}
k = 3
Output:8 9 2 4 7
Explanation:Rotate 1:4 -> 7 -> 8 -> 9 -> 2
Rotate 2: 7 -> 8 -> 9 -> 2 -> 4
Rotate 3: 8 -> 9 -> 2 -> 4 -> 7

```

**Example 2:**

```
Input:
N = 8
value[] = {1, 2, 3, 4, 5, 6, 7, 8}
k = 4
Output:5 6 7 8 1 2 3 4
```

Solution :

```
<script>

// Javascript program to rotate a linked list

var head; // head of list

	/* Linked list Node */
	class Node {
		constructor(val) {
			this.data = val;
			this.next = null;
		}
	}

	// This function rotates a linked
	// list counter-clockwise
	// and updates the head.
	// The function assumes that k is
	// smaller than size of linked list.
	// It doesn't modify
	// the list if k is greater than or equal to size
	function rotate(k) {
		if (k == 0)
			return;

		// Let us understand the
		// below code for example k = 4
		// and list = 10->20->30->40->50->60.
		var current = head;

		// current will either point to kth
		// or NULL after this
		// loop. current will point to node
		// 40 in the above example
		var count = 1;
		while (count < k && current != null) {
			current = current.next;
			count++;
		}

		// If current is NULL, k is greater
		// than or equal to count
		// of nodes in linked list.
		// Don't change the list in this case
		if (current == null)
			return;

		// current points to kth node.
		// Store it in a variable.
		// kthNode points to node 40
		// in the above example
		var kthNode = current;

		// current will point to last
		// node after this loop
		// current will point to node
		// 60 in the above example
		while (current.next != null)
			current = current.next;

		// Change next of last node to previous head
		// Next of 60 is now changed to node 10

		current.next = head;

		// Change head to (k+1)th node
		// head is now changed to node 50
		head = kthNode.next;

		// change next of kth node to null
		kthNode.next = null;
	}

	/*
	* Given a reference (pointer to pointer) to
	the head of a list and an int, push
	a new node on the front of the list.
	*/
	function push(new_data) {
		/*
		1 & 2: Allocate the Node & Put in the data
		*/
var new_node = new Node(new_data);

		/* 3. Make next of new Node as head */
		new_node.next = head;

		/* 4. Move the head to point to new Node */
		head = new_node;
	}

	function printList() {
var temp = head;
		while (temp != null) {
			document.write(temp.data + " ");
			temp = temp.next;
		}
		document.write("<br/>");
	}

	/* Driver program to test above functions */
	
		// create a list 10->20->30->40->50->60
		for (i = 60; i >= 10; i -= 10)
			push(i);

		document.write("Given list<br/>");
		printList();

		rotate(4);

		document.write("Rotated Linked List<br/>");
		printList();

```

<aside>
💡 **Question 7**

You are given the `head` of a linked list with `n` nodes.

For each node in the list, find the value of the **next greater node**. That is, for each node, find the value of the first node that is next to it and has a **strictly larger** value than it.

Return an integer array `answer` where `answer[i]` is the value of the next greater node of the `ith` node (**1-indexed**). If the `ith` node does not have a next greater node, set `answer[i] = 0`.

**Example 1:**

!https://assets.leetcode.com/uploads/2021/08/05/linkedlistnext1.jpg

```
Input: head = [2,1,5]
Output: [5,5,0]

```

**Example 2:**

!https://assets.leetcode.com/uploads/2021/08/05/linkedlistnext2.jpg

```
Input: head = [2,7,4,3,5]
Output: [7,0,5,5,0]
```

Solution :

```
const nextLargerNodes = head => {
    let stack = [], ans = [];
    for (let node = head; node; node = node.next) {
        while (stack.length && stack[stack.length-1].val < node.val) {
            ans[stack.pop().idx] = node.val;
        }
        stack.push({val: node.val, idx: ans.length});
        ans.push(0);
    }
    return ans;
};
```


<aside>
💡 **Question 8**

Given the `head` of a linked list, we repeatedly delete consecutive sequences of nodes that sum to `0` until there are no such sequences.

After doing so, return the head of the final linked list.  You may return any such answer.

(Note that in the examples below, all sequences are serializations of `ListNode` objects.)

**Example 1:**

```
Input: head = [1,2,-3,3,1]
Output: [3,1]
Note: The answer [1,2,1] would also be accepted.

```

**Example 2:**

```
Input: head = [1,2,3,-3,4]
Output: [1,2,4]

```

**Example 3:**

```
Input: head = [1,2,3,-3,-2]
Output: [1]
```

Solution :

```
var removeZeroSumSublists = function(head) {
    if (!head) {
        return head;
    }
    
	// Initialize
    let dummy = new ListNode(0);
    dummy.next = head;
    
    // Step1: build the prefix sum map
    let curr = dummy 
    let prefixSumMap = new Map(); 
    let runningSum = 0; 
    
    while (curr) {
        runningSum += curr.val;
        prefixSumMap.set(runningSum, curr);
        curr = curr.next;
    }
    
    // Step 2: build the output
    curr = dummy;
    runningSum = 0;
    
    while (curr) {
        runningSum += curr.val; 
        curr.next = prefixSumMap.get(runningSum).next;
        curr = curr.next; 
    }
    
    return dummy.next;
};

```

	
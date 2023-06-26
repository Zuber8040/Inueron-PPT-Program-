<aside>
💡 **Question 1**

Given a singly linked list, delete **middle** of the linked list. For example, if given linked list is 1->2->**3**->4->5 then linked list should be modified to 1->2->4->5.If there are **even** nodes, then there would be **two middle** nodes, we need to delete the second middle element. For example, if given linked list is 1->2->3->4->5->6 then it should be modified to 1->2->3->5->6.If the input linked list is NULL or has 1 node, then it should return NULL

**Example 1:**

```
Input:
LinkedList: 1->2->3->4->5
Output:1 2 4 5

```

**Example 2:**

```
Input:
LinkedList: 2->4->6->7->5->1
Output:2 4 6 5 1
```
Solution:

``// Time complexity: O(n)
// Space complexity: O(1)
var deleteMiddle = function(head) {
    // Initialize slow and fast pointers to reach middle of linked list...
    let slow = fast = head;
    // Find the middle and previous of middle...
    let prev = null;
    // To store previous of slow pointer...
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    // Delete the middle node...
    if (!prev) return null;
    prev.next = slow.next;
    return head;
};


```

<aside>
💡 **Question 2**

Given a linked list of **N** nodes. The task is to check if the linked list has a loop. Linked list can contain self loop.

**Example 1:**

```
Input:
N = 3
value[] = {1,3,4}
x(position at which tail is connected) = 2
Output:True
Explanation:In above test case N = 3.
The linked list with nodes N = 3 is
given. Then value of x=2 is given which
means last node is connected with xth
node of linked list. Therefore, there
exists a loop.
```

**Example 2:**

```
Input:
N = 4
value[] = {1,8,3,4}
x = 0
Output:False
Explanation:For N = 4 ,x = 0 means
then lastNode->next = NULL, then
the Linked list does not contains
any loop.

Solution:

```
<script>

// JavaScript program to detect loop in a linked list
	var head; // head of list

	/* Linked list Node */
	class Node {
		constructor(val) {
			this.data = val;
			this.next = null;
		}
	}
	/* Inserts a new Node at front of the list. */
	function push(new_data) {
		/*
		* 1 & 2: Allocate the Node & Put in the data
		*/
var new_node = new Node(new_data);

		/* 3. Make next of new Node as head */
		new_node.next = head;

		/* 4. Move the head to point to new Node */
		head = new_node;
	}

	// Returns true if there is a loop in linked
	// list else returns false.
	function detectLoop(h) {
		var s = new Set();
		while (h != null) {
			// If we have already has this node
			// in hashmap it means there is a cycle
			// (Because you we encountering the
			// node second time).
			if (s.has(h))
				return true;

			// If we are seeing the node for
			// the first time, insert it in hash
			s.add(h);

			h = h.next;
		}

		return false;
	}

	/* Driver program to test above function */
	

		push(20);
		push(4);
		push(15);
		push(10);

		/* Create loop for testing */
		head.next.next.next.next = head;

		if (detectLoop(head))
			document.write("Loop Found");
		else
			document.write("No Loop");



```
<aside>
💡 **Question 3**

Given a linked list consisting of **L** nodes and given a number **N**. The task is to find the **N**th node from the end of the linked list.

**Example 1:**

```
Input:
N = 2
LinkedList: 1->2->3->4->5->6->7->8->9
Output:8
Explanation:In the first example, there
are 9 nodes in linked list and we need
to find 2nd node from end. 2nd node
from end is 8.

```

**Example 2:**

```
Input:
N = 5
LinkedList: 10->5->100->5
Output:-1
Explanation:In the second example, there
are 4 nodes in the linked list and we
need to find 5th from the end. Since 'n'
is more than the number of nodes in the
linked list, the output is -1.

```
Solution :

```


/* Linked List node */
class Node {
	
	constructor(d)
	{
		this.data = d;
		this.next = null;
	}
}

/* Function to get the nth node from the last of a
	linked list */
class LinkedList
{

	constructor(d){
	this.head = d;
	}

printNthFromLast(n)
{
	let len = 0;
	let temp = this.head;

	// 1) count the number of nodes in Linked List
	while (temp != null) {
		temp = temp.next;
		len++;
	}

	// check if value of n is not more than length of
	// the linked list
	if (len < n)
		return;

	temp = this.head;

	// 2) get the (len-n+1)th node from the beginning
	for (let i = 1; i < len - n + 1; i++)
		temp = temp.next;

	document.write(temp.data);
}

push(new_data)
{
	/* 1 & 2: Allocate the Node &
				Put in the data*/
	let new_node = new Node(new_data);

	/* 3. Make next of new Node as head */
	new_node.next = this.head;

	/* 4. Move the head to point to new Node */
	this.head = new_node;
}
}

	let llist = new LinkedList();
	llist.push(20);
	llist.push(4);
	llist.push(15);
	llist.push(35);

	llist.printNthFromLast(4);

```

<aside>
💡 **Question 4**

Given a singly linked list of characters, write a function that returns true if the given list is a palindrome, else false.



**Examples:**

> Input: R->A->D->A->R->NULL
> 
> 
> **Output:** Yes
> 
> **Input:** C->O->D->E->NULL
> 
> **Output:** No
> 
Solution:

```
<script>

/* JavaScript program to check if
linked list is palindrome recursively */

	class Node {
		constructor(val) {
			this.data = val;
			this.ptr = null;
		}
	}
	
var one = new Node(1);
var two = new Node(2);
var three = new Node(3);
var four = new Node(4);
var five = new Node(3);
var six = new Node(2);
var seven = new Node(1);
		one.ptr = two;
		two.ptr = three;
		three.ptr = four;
		four.ptr = five;
		five.ptr = six;
		six.ptr = seven;
		var condition = isPalindrome(one);
		document.write("isPalidrome: " + condition);
	

	function isPalindrome(head) {

var slow = head;
		var ispalin = true;
		var stack = [];

		while (slow != null) {
			stack.push(slow.data);
			slow = slow.ptr;
		}

		while (head != null) {

			var i = stack.pop();
			if (head.data == i) {
				ispalin = true;
			} else {
				ispalin = false;
				break;
			}
			head = head.ptr;
		}
		return ispalin;
	}





```


💡 **Question 5**

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
💡 **Question 7**

Given two linked lists, insert nodes of second list into first list at alternate positions of first list.
For example, if first list is 5->7->17->13->11 and second is 12->10->2->4->6, the first list should become 5->12->7->10->17->2->13->4->11->6 and second list should become empty. The nodes of second list should only be inserted when there are positions available. For example, if the first list is 1->2->3 and second list is 4->5->6->7->8, then first list should become 1->4->2->5->3->6 and second list to 7->8.

Use of extra space is not allowed (Not allowed to create additional nodes), i.e., insertion must be done in-place. Expected time complexity is O(n) where n is number of nodes in first list.

Solution :

```
<script>

// Javascript program to merge a linked list into another at
// alternate positions

// A nexted list node
class Node
{
	constructor()
	{
		this.data = 0;
		this.next = null;
	}
};

/* Function to insert a node at the beginning */
function push(head_ref, new_data)
{
	var new_node = new Node();
	new_node.data = new_data;
	new_node.next = (head_ref);
	(head_ref) = new_node;
	return head_ref;

}

/* Utility function to print a singly linked list */
function printList(head)
{
	var temp = head;
	while (temp != null)
	{
		document.write( temp.data + " ");
		temp = temp.next;
	}
	document.write("<br>");
}

// Main function that inserts nodes of linked list q into p at
// alternate positions. Since head of first list never changes
// and head of second list may change, we need single pointer
// for first list and double pointer for second list.
function merge(p, q)
{
	var p_curr = p, q_curr = q;
	var p_next, q_next;

	// While there are available positions in p
	while (p_curr != null && q_curr != null)
	{
		// Save next pointers
		p_next = p_curr.next;
		q_next = q_curr.next;

		// Make q_curr as next of p_curr
		q_curr.next = p_next; // Change next pointer of q_curr
		p_curr.next = q_curr; // Change next pointer of p_curr

		// Update current pointers for next iteration
		p_curr = p_next;
		q_curr = q_next;
	}

	q = q_curr; // Update head pointer of second list
	return q;
}


var p = null, q = null;
p = push(p, 3);
p = push(p, 2);
p = push(p, 1);
document.write( "First Linked List:<br>");
printList(p);
q = push(q, 8);
q = push(q, 7);
q = push(q, 6);
q = push(q, 5);
q = push(q, 4);
document.write( "Second Linked List:<br>");
printList(q);
q = merge(p, q);
document.write( "Modified First Linked List:<br>");
printList(p);
document.write( "Modified Second Linked List:<br>");
printList(q);


```

<aside>
💡 **Question 8**

Given a singly linked list, find if the linked list is [circular](https://www.geeksforgeeks.org/circular-linked-list/amp/) or not.

> A linked list is called circular if it is not NULL-terminated and all nodes are connected in the form of a cycle. Below is an example of a circular linked list.
> 


Solution:

```
// javascript program to check if
// linked list is circular

	/* Link list Node */
class Node {
	constructor(val) {
		this.data = val;
		this.next = null;
	}
}


	/*
	* This function returns true if given linked list is circular, else false.
	*/
	function isCircular( head) {
		// An empty linked list is circular
		if (head == null)
			return true;

		// Next of head
		node = head.next;

		// This loop would stop in both cases (1) If
		// Circular (2) Not circular
		while (node != null && node != head)
			node = node.next;

		// If loop stopped because of circular
		// condition
		return (node == head);
	}

	// Utility function to create a new node.
	function newNode(data) {
		temp = new Node();
		temp.data = data;
		temp.next = null;
		return temp;
	}

	/* Driver code */
	
		/* Start with the empty list */
		head = newNode(1);
		head.next = newNode(2);
		head.next.next = newNode(3);
		head.next.next.next = newNode(4);

		document.write(isCircular(head) ? "Yes<br/>" : "No<br/>");

		// Making linked list circular
		head.next.next.next.next = head;

		document.write(isCircular(head) ? "Yes<br/>" : "No<br/>");


```
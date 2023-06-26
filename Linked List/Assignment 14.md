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

<aside>
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

```
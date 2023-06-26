<aside>
💡 **Question 1**

Given two linked list of the same size, the task is to create a new linked list using those linked lists. The condition is that the greater node among both linked list will be added to the new linked list.

**Examples:**

```
Input: list1 = 5->2->3->8
list2 = 1->7->4->5
Output: New list = 5->7->4->8

Input:list1 = 2->8->9->3
list2 = 5->3->6->4
Output: New list = 5->8->9->4
```

Solution:

```
<script>
// javascript program to create a new linked list
// from two given linked list
// of the same size with
// the greater element among the two at each node

	// Representation of node
class Node {
	constructor(val) {
		this.data = val;
		this.next = null;
	}
}
	// Function to insert node in a linked list
	function insert( root , item) {
		var ptr, temp;
		temp = new Node();
		temp.data = item;
		temp.next = null;

		if (root == null)
			root = temp;
		else {
			ptr = root;
			while (ptr.next != null)
				ptr = ptr.next;

			ptr.next = temp;
		}
		return root;
	}

	// Function which returns new linked list
	function newList( root1, root2) {
		var ptr1 = root1, ptr2 = root2, ptr;
		var root = null, temp;

		while (ptr1 != null) {
			temp = new Node();
			temp.next = null;

			// Compare for greater node
			if (ptr1.data < ptr2.data)
				temp.data = ptr2.data;
			else
				temp.data = ptr1.data;

			if (root == null)
				root = temp;
			else {
				ptr = root;
				while (ptr.next != null)
					ptr = ptr.next;

				ptr.next = temp;
			}
			ptr1 = ptr1.next;
			ptr2 = ptr2.next;
		}
		return root;
	}

	function display( root) {
		while (root != null) {
			document.write(root.data + "->");
			root = root.next;
		}
		document.write("<br/>");
	}

	// Driver code
	
		root1 = null, root2 = null, root = null;

		// First linked list
		root1 = insert(root1, 5);
		root1 = insert(root1, 2);
		root1 = insert(root1, 3);
		root1 = insert(root1, 8);

		document.write("First List: ");
		display(root1);

		// Second linked list
		root2 = insert(root2, 1);
		root2 = insert(root2, 7);
		root2 = insert(root2, 4);
		root2 = insert(root2, 5);

		document.write("Second List: ");
		display(root2);

		root = newList(root1, root2);
		document.write("New List: ");
		display(root);


```

<aside>
💡 **Question 2**

Write a function that takes a list sorted in non-decreasing order and deletes any duplicate nodes from the list. The list should only be traversed once.

For example if the linked list is 11->11->11->21->43->43->60 then removeDuplicates() should convert the list to 11->21->43->60.

**Example 1:**

```
Input:
LinkedList: 
11->11->11->21->43->43->60
Output:
11->21->43->60
```

**Example 2:**

```
Input:
LinkedList: 
10->12->12->25->25->25->34
Output:
10->12->25->34
```

Solution:

```
var deleteDuplicates = function(head) {
    var current = head;
    
    while(current) {
        if(current.next !== null && current.val == current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    
    return head;
};
```

<aside>
💡 **Question 3**

Given a linked list of size **N**. The task is to reverse every **k** nodes (where k is an input to the function) in the linked list. If the number of nodes is not a multiple of *k* then left-out nodes, in the end, should be considered as a group and must be reversed (See Example 2 for clarification).

**Example 1:**

```
Input:
LinkedList: 1->2->2->4->5->6->7->8
K = 4
Output:4 2 2 1 8 7 6 5
Explanation:
The first 4 elements 1,2,2,4 are reversed first
and then the next 4 elements 5,6,7,8. Hence, the
resultant linked list is 4->2->2->1->8->7->6->5.

```

**Example 2:**

```
Input:
LinkedList: 1->2->3->4->5
K = 3
Output:3 2 1 5 4
Explanation:
The first 3 elements are 1,2,3 are reversed
first and then elements 4,5 are reversed.Hence,
the resultant linked list is 3->2->1->5->4.
```
Solution:

```
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* reverseKGroup(ListNode* head, int k) {
        ListNode* dummy = new ListNode(0);
        dummy->next = head;
        ListNode* prevGroupTail = dummy;
        
        while (head) {
            ListNode* groupStart = head;
            ListNode* groupEnd = getGroupEnd(head, k);
            
            if (!groupEnd) {
                break; // Remaining nodes are less than k, so no need to reverse
            }
            
            ListNode* nextGroupStart = groupEnd->next;
            groupEnd->next = nullptr; // Separate the group to be reversed
            
            // Reverse the group
            prevGroupTail->next = reverseList(groupStart);
            groupStart->next = nextGroupStart;
            
            prevGroupTail = groupStart;
            head = nextGroupStart;
        }
        
        ListNode* newHead = dummy->next;
        delete dummy;
        return newHead;
    }
    
private:
    ListNode* getGroupEnd(ListNode* head, int k) {
        while (head && k > 1) {
            head = head->next;
            k--;
        }
        return head;
    }
    
    ListNode* reverseList(ListNode* head) {
        ListNode* prev = nullptr;
        ListNode* curr = head;
        
        while (curr) {
            ListNode* next = curr->next;
            curr->next = prev;
            prev = curr;
            curr = next;
        }
        
        return prev;
    }
};
```

<aside>
💡 **Question 4**

Given a linked list, write a function to reverse every alternate k nodes (where k is an input to the function) in an efficient way. Give the complexity of your algorithm.

**Example:**

```
Inputs:   1->2->3->4->5->6->7->8->9->NULL and k = 3
Output:   3->2->1->4->5->6->9->8->7->NULL.
```

Solution :

```
<script>

// JavaScript program to reverse
// alternate k nodes in a linked list
class Node
{
	constructor(d)
	{
		this.data = d;
		this.next = null;
	}
}

let head;

// Reverses alternate k nodes and returns
// the pointer to the new head node
function kAltReverse(node, k)
{
	let current = node;
	let next = null, prev = null;
	let count = 0;

	/*1) reverse first k nodes of the linked list */
	while (current != null && count < k)
	{
		next = current.next;
		current.next = prev;
		prev = current;
		current = next;
		count++;
	}

	/* 2) Now head points to the kth node.
		So change next of head to (k+1)th node*/
	if (node != null)
	{
		node.next = current;
	}

	/* 3) We do not want to reverse next k nodes.
		So move the current pointer to skip
		next k nodes */
	count = 0;
	while (count < k - 1 && current != null)
	{
		current = current.next;
		count++;
	}

	/* 4) Recursively call for the list starting
		from current->next. And make rest of
		the list as next of first node */
	if (current != null)
	{
		current.next = kAltReverse(current.next, k);
	}

	/* 5) prev is new head of the input list */
	return prev;
}

function printList(node)
{
	while (node != null)
	{
		document.write(node.data + " ");
		node = node.next;
	}
}

function push(newdata)
{
	let mynode = new Node(newdata);
	mynode.next = head;
	head = mynode;
}

// Driver code

// Creating the linkedlist
for(let i = 20; i > 0; i--)
{
	push(i);
}
document.write("Given Linked List :<br>");
printList(head);
head = kAltReverse(head, 3);

document.write("<br>");
document.write("Modified Linked List :<br>");
printList(head);



```

<aside>
💡 **Question 5**

Given a linked list and a key to be deleted. Delete last occurrence of key from linked. The list may have duplicates.

**Examples**:

```
Input:   1->2->3->5->2->10, key = 2
Output:  1->2->3->5->10
```

Solution:

```

<script>
// A linked list Node
class Node
{

	// Utility function to create a new node
	// with given key
	constructor(data)
	{
		this.data = data;
		this.next = null;
		
	}
}

// Function to delete the last occurrence
function deleteLast(head, x)
{
	let temp = head;
	let prt = null;
	while (temp != null)
	{
		//If found key, update
		if (temp.data == x)
			ptr = temp;
		temp = temp.next;
	}
	
	// If the last occurrence is the last node
	if (ptr != null && ptr.next == null)
	{
		temp = head;
		while (temp.next != ptr)
		{
			temp = temp.next;
		}
		temp.next = null;
	}
	
	// If it is not the last node
	if (ptr != null && ptr.next != null)
	{
		ptr.data = ptr.next.data;
		temp = ptr.next;
		ptr.next = ptr.next.next;
		
	}
	return head;
	
}

// This function prints contents of linked
// list starting from the given Node
function display(head)
{
	let temp = head
	if (head == null)
	{
		document.write("NULL<br>");
		return;
	}
	while (temp != null)
	{
		document.write( temp.data," --> ", end = "");
		temp = temp.next;
	}
	document.write("NULL<br>")
}

// Driver code
let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(4)
head.next.next.next.next.next.next = new Node(4);

document.write("Created Linked list: ");
display(head)

// Pass the address of the head pointer
head = deleteLast(head, 4)
document.write("List after deletion of 4: ")
display(head)


```

<aside>
💡 **Question 6**

Given two sorted linked lists consisting of **N** and **M** nodes respectively. The task is to merge both of the lists (in place) and return the head of the merged list.

**Examples:**

Input: a: 5->10->15, b: 2->3->20

Output: 2->3->5->10->15->20

Input: a: 1->1, b: 2->4

Output: 1->1->2->4

Solution:

```
var mergeTwoLists = function(l1, l2) {
    var mergedHead = { val : -1, next : null },
        crt = mergedHead;
    while(l1 && l2) {
        if(l1.val > l2.val) {
            crt.next = l2;
            l2 = l2.next;
        } else {
            crt.next = l1;
            l1 = l1.next;
        }
        crt = crt.next;
    }
    crt.next = l1 || l2;
    
    return mergedHead.next;
};

```

<aside>
💡 **Question 7**

Given a **Doubly Linked List**, the task is to reverse the given Doubly Linked List.

**Example:**

```
Original Linked list 10 8 4 2
Reversed Linked list 2 4 8 10
```
Solution:

```
// javascript program to reverse a doubly linked list

var head;

	class Node {
			constructor(val) {
				this.data = val;
				this.prev = null;
				this.next = null;
			}
		}
	/* Function to reverse a Doubly Linked List */
	function reverse() {
var temp = null;
var current = head;

		/*
		* swap next and prev for all nodes of doubly linked list
		*/
		while (current != null) {
			temp = current.prev;
			current.prev = current.next;
			current.next = temp;
			current = current.prev;
		}

		/*
		* Before changing head, check for the cases like empty list and list with only
		* one node
		*/
		if (temp != null) {
			head = temp.prev;
		}
	}

	/* UTILITY FUNCTIONS */
	/*
	* Function to insert a node at the beginning of the Doubly Linked List
	*/
	function push(new_data) {
		/* allocate node */
var new_node = new Node(new_data);

		/*
		* since we are adding at the beginning, prev is always NULL
		*/
		new_node.prev = null;

		/* link the old list of the new node */
		new_node.next = head;

		/* change prev of head node to new node */
		if (head != null) {
			head.prev = new_node;
		}

		/* move the head to point to the new node */
		head = new_node;
	}

	/*
	* Function to print nodes in a given doubly linked list This function is same
	* as printList() of singly linked list
	*/
	function printList(node) {
		while (node != null) {
			document.write(node.data + " ");
			node = node.next;
		}
	}

	

		/*
		* Let us create a sorted linked list to test the functions Created linked list
		* will be 10->8->4->2
		*/
		push(2);
		push(4);
		push(8);
		push(10);

		document.write("Original linked list <br/>");
		printList(head);

		reverse();
		document.write("<br/>");
		document.write("The reversed Linked List is <br/>");
		printList(head);


```

<aside>
💡 **Question 8**

Given a doubly linked list and a position. The task is to delete a node from given position in a doubly linked list.

**Example 1:**

```
Input:
LinkedList = 1 <--> 3 <--> 4
x = 3
Output:1 3
Explanation:After deleting the node at
position 3 (position starts from 1),
the linked list will be now as 1->3.

```

**Example 2:**

```
Input:
LinkedList = 1 <--> 5 <--> 2 <--> 9
x = 1
Output:5 2 9
```

Solution:

```
<script>
/* javascript implementation to delete a
doubly Linked List node
at the given position */

// A node of the doubly linked list
class Node {
		constructor() {
			this.data = 0;
			this.prev = null;
			this.next = null;
		}
	}
var head = null;

	// Function to delete a node
	// in a Doubly Linked List.
	// head_ref --> pointer to head node pointer.
	// del --> pointer to node to be deleted.
	function deleteNode(del) {
		// base case
		if (head == null || del == null)
			return null;

		// If node to be deleted is head node
		if (head == del)
			head = del.next;

		// Change next only if node to be
		// deleted is NOT the last node
		if (del.next != null)
			del.next.prev = del.prev;

		// Change prev only if node to be
		// deleted is NOT the first node
		if (del.prev != null)
			del.prev.next = del.next;

		del = null;

		return head;
	}

	// Function to delete the node at the
	// given position in the doubly linked list
	function deleteNodeAtGivenPos(n) {
		/*
		* if list in NULL or invalid position is given
		*/
		if (head == null || n <= 0)
			return;

var current = head;
		var i;

		/*
		* traverse up to the node at position 'n' from the beginning
		*/
		for (i = 1; current != null && i < n; i++) {
			current = current.next;
		}

		// if 'n' is greater than the number of nodes
		// in the doubly linked list
		if (current == null)
			return;

		// delete the node pointed to by 'current'
		deleteNode(current);
	}

	// Function to insert a node
	// at the beginning of the Doubly Linked List
	function push(new_data) {
		// allocate node
var new_node = new Node();

		// put in the data
		new_node.data = new_data;

		// since we are adding at the beginning,
		// prev is always NULL

		new_node.prev = null;

		// link the old list of the new node
		new_node.next = head;

		// change prev of head node to new node
		if (head != null)
			head.prev = new_node;

		// move the head to point to the new node
		head = new_node;
	}

	// Function to print nodes in a
	// given doubly linked list
	function printList() {
var temp = head;
		if (temp == null)
			document.write("Doubly Linked list empty");

		while (temp != null) {
			document.write(temp.data + " ");
			temp = temp.next;
		}
		document.write();
	}

		// Create the doubly linked list:
		// 10<->8<->4<->2<->5

		push(5);
		push(2);
		push(4);
		push(8);
		push(10);

		document.write("Doubly linked " + "list before deletion:<br/>");
		printList();

		var n = 2;

		// delete node at the given position 'n'
		deleteNodeAtGivenPos(n);
		document.write("<br/>Doubly linked " + "list after deletion:<br/>");
		printList();
```
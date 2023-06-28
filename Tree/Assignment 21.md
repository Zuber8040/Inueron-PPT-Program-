Question-1

You are given a binary tree. The binary tree is represented using the TreeNode class. Each TreeNode has an integer value and left and right children, represented using the TreeNode class itself. Convert this binary tree into a binary search tree.

Input:

        10

       /   \

     2      7

    /   \

    8      4

Output:

        8

      /   \

    4     10

    /   \

    2      7

Solution :

```
class Solution {
  binaryTreeToBST(root) {
    if (root === null) {
      return;
    }
    
    let arr = [];
    this.storeInorder(root, arr);
    
    arr.sort();
    
    this.arrayToBST(arr, root);
  }
  
  storeInorder(root, inorder) {
    if (root === null) {
      return;
    }
    
    this.storeInorder(root.left, inorder);
    
    inorder.push(root.data);
    
    this.storeInorder(root.right, inorder);
  }
  
  arrayToBST(arr, root) {
    if (root === null) {
      return;
    }
    
    this.arrayToBST(arr, root.left);
    
    root.data = arr[0];
    arr.shift();
    
    this.arrayToBST(arr, root.right);
  }
}
```

<aside>
💡 Question-2:

Given a Binary Search Tree with all unique values and two keys. Find the distance between two nodes in BST. The given keys always exist in BST.

Example:

Consider the following BST:

![1.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f2455039-7e12-43fc-a7d3-b5be24931c1c/1.png)

**Input-1:**

n = 9

values = [8, 3, 1, 6, 4, 7, 10, 14,13]

node-1 = 6

node-2 = 14

**Output-1:**

The distance between the two keys = 4

**Input-2:**

n = 9

values = [8, 3, 1, 6, 4, 7, 10, 14,13]

node-1 = 3

node-2 = 4

**Output-2:**

The distance between the two keys = 2

Solution :

```
	class Node {
			constructor() {
				this.key = 0;
				this.left = null;
				this.right = null;
			}
		}

	function newNode(key) {
var ptr = new Node();
		ptr.key = key;
		ptr.left = null;
		ptr.right = null;
		return ptr;
	}

	// Standard BST insert function
	function insert(root , key) {
		if (root == null)
			root = newNode(key);
		else if (root.key > key)
			root.left = insert(root.left, key);
		else if (root.key < key)
			root.right = insert(root.right, key);
		return root;
	}

	// This function returns distance of x from
	// root. This function assumes that x exists
	// in BST and BST is not NULL.
	function distanceFromRoot(root , x) {
		if (root.key == x)
			return 0;
		else if (root.key > x)
			return 1 + distanceFromRoot(root.left, x);
		return 1 + distanceFromRoot(root.right, x);
	}

	// Returns minimum distance between a and b.
	// This function assumes that a and b exist
	// in BST.
	function distanceBetween2(root , a , b) {
		if (root == null)
			return 0;

		// Both keys lie in left
		if (root.key > a && root.key > b)
			return distanceBetween2(root.left, a, b);

		// Both keys lie in right
		if (root.key < a && root.key < b) // same path
			return distanceBetween2(root.right, a, b);

		// Lie in opposite directions (Root is
		// LCA of two nodes)
		if (root.key >= a && root.key <= b)
			return distanceFromRoot(root, a) +
			distanceFromRoot(root, b);

		return 0;
	}

	// This function make sure that a is smaller
	// than b before making a call to findDistWrapper()
	function findDistWrapper(root , a , b) {
		var temp = 0;
		if (a > b) {
			temp = a;
			a = b;
			b = temp;
		}
		return distanceBetween2(root, a, b);
	}

	// Driver code
	
		var root = null;
		root = insert(root, 20);
		insert(root, 10);
		insert(root, 5);
		insert(root, 15);
		insert(root, 30);
		insert(root, 25);
		insert(root, 35);
		document.write(findDistWrapper(root, 5, 35));


```

 Question-3:

Write a program to convert a binary tree to a doubly linked list.

Input:

        10

       /   \

     5     20

           /   \

        30     35

Output:

5 10 30 20 35

Solution :

```

	// A javascript program for in-place conversion of Binary Tree to DLL

	// A binary tree node has data, left pointers and right pointers
	class Node {
		constructor(val) {
			this.data = val;
			this.left = null;
			this.right = null;
		}
	}

	var root;
	
	// head --> Pointer to head node of created doubly linked list
	var head;
	
	// Initialize previously visited node as NULL. This is
	// so that the same value is accessible in all recursive
	// calls
	var prev = null;

	// A simple recursive function to convert a given Binary tree
	// to Doubly Linked List
	// root --> Root of Binary Tree
	function BinaryTree2DoubleLinkedList(root)
	{
		// Base case
		if (root == null)
			return;

		// Recursively convert left subtree
		BinaryTree2DoubleLinkedList(root.left);

		// Now convert this node
		if (prev == null)
			head = root;
		else
		{
			root.left = prev;
			prev.right = root;
		}
		prev = root;

		// Finally convert right subtree
		BinaryTree2DoubleLinkedList(root.right);
	}

	/* Function to print nodes in a given doubly linked list */
	function printList(node)
	{
		while (node != null)
		{
			document.write(node.data + " ");
			node = node.right;
		}
	}

	// Driver program to test above functions

	// Let us create the tree as shown in above diagram
	
	root = new Node(10);
	root.left = new Node(12);
	root.right = new Node(15);
	root.left.left = new Node(25);
	root.left.right = new Node(30);
	root.right.left = new Node(36);

	// convert to DLL
	BinaryTree2DoubleLinkedList(root);
		
	// Print the converted List
	printList(head);



```

Question-4:

Write a program to connect nodes at the same level.

Input:

        1

      /   \

    2      3

  /   \   /   \

4     5 6    7

Output:

1 → -1

2 → 3

3 → -1

4 → 5

5 → 6

6 → 7

7 → -1

Solution :

```


class Node
{
	constructor(item)
	{
		this.data = item;
		this.left = this.right = this.nextRight = null;
	}
}



// Sets the nextRight of
// root and calls connectRecur()
// for other nodes
function connect( p) {
	// Set the nextRight for root
	p.nextRight = null;

	// Set the next right for rest of the nodes
	// (other than root)
	connectRecur(p);
	}

/*
* Set next right of all descendants of p. Assumption: p is a complete binary
* tree
*/
function connectRecur( p) {
	// Base case
	if (p == null)
		return;

	// Set the nextRight pointer for p's left child
	if (p.left != null)
		p.left.nextRight = p.right;

	// Set the nextRight pointer
	// for p's right child p.nextRight
	// will be null if p is the right
	// most child at its level
	if (p.right != null)
		p.right.nextRight = (p.nextRight) != null ? p.nextRight.left : null;

	// Set nextRight for other
	// nodes in pre order fashion
	connectRecur(p.left);
	connectRecur(p.right);
}


/* Constructed binary tree is
			10
			/ \
		8	 2
		/
		3
		*/
let root = new Node(10);
root.left = new Node(8);
root.right = new Node(2);
root.left.left = new Node(3);

// Populates nextRight pointer in all nodes
connect(root);

// Let us check the values of nextRight pointers
document.write("Following are populated nextRight pointers in "
				+ "the tree"
				+ "(-1 is printed if there is no nextRight)<br>");
let a = root.nextRight != null ? root.nextRight.data : -1;
document.write("nextRight of " + root.data + " is "
				+ a+"<br>");
let b = root.left.nextRight != null ? root.left.nextRight.data : -1;
document.write("nextRight of " + root.left.data + " is "
				+ b+"<br>");
let c = root.right.nextRight != null ? root.right.nextRight.data : -1;
document.write("nextRight of " + root.right.data + " is "
				+ c+"<br>");
let d = root.left.left.nextRight != null ? root.left.left.nextRight.data : -1;
document.write("nextRight of " + root.left.left.data + " is "
				+ d+"<br>");
				


```
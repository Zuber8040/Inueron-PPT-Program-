 Question-1:

Given a Binary Tree (Bt), convert it to a Doubly Linked List(DLL). The left and right pointers in nodes are to be used as previous and next pointers respectively in converted DLL. The order of nodes in DLL must be the same as in Inorder for the given Binary Tree. The first node of Inorder traversal (leftmost node in BT) must be the head node of the DLL.


## Solution :

```
	// javascript program to convert binary tree to double linked list

	/* A binary tree node has data, and left and right pointers */
	class Node {
		constructor(val) {
			this.data = val;
			this.left = null;
			this.right = null;
		}
	}
	var root;
	/*
	* This is the core function to convert Tree to list. This function follows
	* steps 1 and 2 of the above algorithm
	*/

	function bintree2listUtil(node) {
		// Base case
		if (node == null)
			return node;

		// Convert the left subtree and link to root
		if (node.left != null) {
			// Convert the left subtree
			var left = bintree2listUtil(node.left);

			// Find inorder predecessor. After this loop, left
			// will point to the inorder predecessor
			for (; left.right != null; left = left.right)
				

			// Make root as next of the predecessor
			left.right = node;

			// Make predecessor as previous of root
			node.left = left;
		}

		// Convert the right subtree and link to root
		if (node.right != null) {
			// Convert the right subtree
			var right = bintree2listUtil(node.right);

			// Find inorder successor. After this loop, right
			// will point to the inorder successor
			for (; right.left != null; right = right.left)
				

			// Make root as previous of successor
			right.left = node;

			// Make successor as next of root
			node.right = right;
		}

		return node;
	}

	// The main function that first calls bintree2listUtil(), then follows
	// step 3 of the above algorithm

	function bintree2list(node) {
		// Base case
		if (node == null)
			return node;

		// Convert to DLL using bintree2listUtil()
		node = bintree2listUtil(node);

		// bintree2listUtil() returns root node of the converted
		// DLL. We need pointer to the leftmost node which is
		// head of the constructed DLL, so move to the leftmost node
		while (node.left != null)
			node = node.left;

		return node;
	}

	/* Function to print nodes in a given doubly linked list */
	function printList(node) {
		while (node != null) {
			document.write(node.data + " ");
			node = node.right;
		}
	}

	/* Driver program to test above functions */
	
	// Let us create the tree shown in above diagram
	root = new Node(10);
	root.left = new Node(12);
	root.right = new Node(15);
	root.left.left = new Node(25);
	root.left.right = new Node(30);
	root.right.left = new Node(36);

	// Convert to DLL
	var head = bintree2list(root);

	// Print the converted list
	printList(head);


```

 Question-2

A Given a binary tree, the task is to flip the binary tree towards the right direction that is clockwise. See the below examples to see the transformation.

In the flip operation, the leftmost node becomes the root of the flipped tree and its parent becomes its right child and the right sibling becomes its left child and the same should be done for all left most nodes recursively.

Solution :

```

	// JavaScript program to flip a binary tree
	
	class Node
	{
		constructor(data) {
		this.left = null;
		this.right = null;
		this.data = data;
		}
	}
	
	// Utility function to create
	// a new Binary Tree Node

	function newNode(data)
	{
		let temp = new Node(data);
		return temp;
	}

	// method to flip the binary tree
	function flipBinaryTree(root)
	{
		// Initialization of pointers
		let curr = root;
		let next = null;
		let temp = null;
		let prev = null;

		// Iterate through all left nodes
		while(curr != null)
		{
			next = curr.left;

			// Swapping nodes now, need
			// temp to keep the previous
			// right child

			// Making prev's right
			// as curr's left child
			curr.left = temp;	

			// Storing curr's right child
			temp = curr.right;	

			// Making prev as curr's
			// right child
			curr.right = prev;	

			prev = curr;
			curr = next;
		}
		return prev;
	}

	// Iterative method to do
	// level order traversal
	// line by line
	function printLevelOrder(root)
	{
		// Base Case
		if (root == null) return;

		// Create an empty queue for
		// level order traversal
		let q = [];

		// Enqueue Root and
		// initialize height
		q.push(root);

		while (true)
		{
			// nodeCount (queue size)
			// indicates number of nodes
			// at current level.
			let nodeCount = q.length;
			if (nodeCount == 0)
				break;

			// Dequeue all nodes of current
			// level and Enqueue all nodes
			// of next level
			while (nodeCount > 0)
			{
				let node = q[0];
				document.write(node.data + " ");
				q.shift();

				if (node.left != null)
					q.push(node.left);

				if (node.right != null)
					q.push(node.right);
				nodeCount--;
			}
			document.write("</br>");
		}
	}
	
	let root = newNode(1);
	root.left = newNode(2);
	root.right = newNode(3);
	root.right.left = newNode(4);
	root.right.right = newNode(5);

	document.write("Level order traversal " +
							"of given tree" + "</br>");
	printLevelOrder(root);

	root = flipBinaryTree(root);

	document.write("</br>" + "Level order traversal " +
						"of the flipped tree" + "</br>");
	printLevelOrder(root);

```

 Question-3:

Given a binary tree, print all its root-to-leaf paths without using recursion. For example, consider the following Binary Tree.

Input:

        6
     /    \
    3      5
  /   \     \
 2     5     4
     /   \
    7     4

Output:

There are 4 leaves, hence 4 root to leaf paths -
  6->3->2
  6->3->5->7
  6->3->5->4
  6->5>4

Solution :

```
// JavaScript program to print root to leaf path without using recursion

// A binary tree node structure
class Node{
	constructor(data){
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class pair{
	constructor(val1, val2){
		this.first = val1;
		this.second = val2;
	}
}

// function to create a new node
function newNode(data){
	let temp = new Node(data);
	return temp;
}

// function to check leaf node
function isleafnode(root){
	if(root.left == null && root.right == null) return true;
	return false;
}

// function to print root to leaf paths without using parent
// pointers
function printRootToLeaf(root){
	// base case
	if(root == null) return;
	
	let path = "";
	
	// create an empty stack to store a pair of tree nodes
	// and its path from root node.
	let s = [];
	
	// push the root node
	s.push(new pair(root, path));
	// loop until stack becomes empty
	while(s.length > 0){
		let it = s.pop();
		
		root = it.first;
		path = it.second;
		
		// convert the curr root value to string
		let curr = (root.data).toString() + " ";
		
		// add the current node to the existing path
		path = path + curr;
		
		// print the path if a node is encountered
		if(isleafnode(root))
			console.log(path);
		
		if(root.right != null)
			s.push(new pair(root.right, path));
		if(root.left != null)
			s.push(new pair(root.left, path));
	}
}

// create a tree
let root = newNode(10);
root.left = newNode(8);
root.right = newNode(2);
root.left.left = newNode(3);
root.left.right = newNode(5);
root.right.left = newNode(2);

printRootToLeaf(root);


```

 Question-4:

Given Preorder, Inorder and Postorder traversals of some tree. Write a program to check if they all are of the same tree.

**Examples:**

Input : 

        Inorder -> 4 2 5 1 3
        Preorder -> 1 2 4 5 3
        Postorder -> 4 5 2 3 1
Output : 

Yes
Explanation : 

All of the above three traversals are of
the same tree 

                           1
                         /   \
                        2     3
                      /   \
                     4     5

Input : 

        Inorder -> 4 2 5 1 3
        Preorder -> 1 5 4 2 3
        Postorder -> 4 1 2 3 5
Output : 

No



## Solution :

```
// JavaScript program for the above approach
class Node{
	constructor(val){
		this.data = val;
		this.left = null;
		this.right = null;
	}
}

let preIndex = 0;
let notPossible = false;
function buildTreeFromInorderPreorder(inStart, inEnd,
preorder, inorderIndexMap){
	if(inStart > inEnd){
		return null;
	}
	
	// build the current node
	let rootData = preorder[preIndex];
	let root = new Node(rootData);
	preIndex++;
	
	// find the node in inorderIndexMap
	if(inorderIndexMap.has(rootData) == false){
		notPossible = true;
		return root;
	}
	
	let inorderIndex = inorderIndexMap.get(rootData);
	if(!(inStart <= inorderIndex && inorderIndex <= inEnd)){
		notPosstible = true;
		return root;
	}
	
	let leftInorderStart = inStart;
	let leftInorderEnd = inorderIndex - 1;
	let rightInorderStart = inorderIndex + 1;
	let rightInorderEnd = inEnd;
		
	root.left = buildTreeFromInorderPreorder(
		leftInorderStart, leftInorderEnd, preorder, inorderIndexMap);
		
	if(notPossible == true)
		return root;
	
	root.right = buildTreeFromInorderPreorder(
		leftInorderStart, leftInorderEnd, preorder, inorderIndexMap);
	
	return root;
}

let postIndex = 0;
function checkPostorderCorrect(root, postOrder){
	if(root == null) return true;
	if(!checkPostorderCorrect(root.left, postOrder))
		return false;
	
	if(!checkPostorderCorrect(root.right, postOrder))
		return false;
		
	return (root.data == postOrder[postIndex++]);
}

function printPostorder(root){
	if(root == null) return;
	
	printPostorder(root.left);
	printPostorder(root.right);
	document.write(root.data + " ");
}

function printInorder(root){
	if(root == null) return;
	printInorder(root.left);
	document.write(root.data + " ");
	printInorder(root.right);
}

function checktree(preorder, inorder, postorder, N){
	if(N == 0) return true;
	
	inorderIndexMap = new Map();
	for(let i = 0; i<N; i++){
		inorderIndexMap.set(inorder[i], i);
	}
	
	let root = buildTreeFromInorderPreorder(0, N-1,
	preorder, inorderIndexMap);
	
	if(notPossible == true) return false;
	
	return checkPostorderCorrect(root, postorder);
}

// driver program
let inOrder = [4, 2, 5, 1, 3];
let preOrder = [1, 2, 4, 5, 3];
let postOrder = [4, 5, 2, 3, 1];

let len = inOrder.length;

// If both postorder traversals as same
if(checktree(preOrder, inOrder, postOrder, len))
	document.write("Yes");
else
	document.write("No");
	


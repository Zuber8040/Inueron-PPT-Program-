<aside>
💡 Question-1:

Given preorder of a binary tree, calculate its **[depth(or height)](https://www.geeksforgeeks.org/write-a-c-program-to-find-the-maximum-depth-or-height-of-a-tree/)** [starting from depth 0]. The preorder is given as a string with two possible characters.

1. ‘l’ denotes the leaf
2. ‘n’ denotes internal node

The given tree can be seen as a full binary tree where every node has 0 or two children. The two children of a node can ‘n’ or ‘l’ or mix of both.

**Examples :**

Input  : nlnll
Output : 2
Explanation :

!https://media.geeksforgeeks.org/wp-content/uploads/btree1.png

Input  : nlnnlll
Output : 3


Solution :

```

	// Javascript program to find height of
	// full binary tree using preorder
	
	// function to return max of left subtree
	// height or right subtree height
	function findDepthRec(tree, n, index)
	{
		if (index >= n || tree[index] == 'l')
			return 0;

		// calc height of left subtree (In preorder
		// left subtree is processed before right)
		index++;
		let left = findDepthRec(tree, n, index);

		// calc height of right subtree
		index++;
		let right = findDepthRec(tree, n, index);

		return Math.max(left, right) + 1;
	}

	// Wrapper over findDepthRec()
	function findDepth(tree, n)
	{
		let index = 0;
		return (findDepthRec(tree, n, index));
	}
	
	let tree = "nlnnlll".split('');
	let n = tree.length;
	document.write(findDepth(tree, n));

```


Question-2:

Given a Binary tree, the task is to print the **left view** of the Binary Tree. The left view of a Binary Tree is a set of leftmost nodes for every level.

**Examples:**

***Input:***

            4

          /   \

        5     2

             /   \

            3     1

           /  \

          6    7

***Output:** 4 5 3 6*

**Explanation:**

!https://media.geeksforgeeks.org/wp-content/cdn-uploads/left-view.png

***Input:***

                    1

                  /   \

                2       3

                 \

                   4

                     \

                        5

                           \

                             6

**Output:** 1 2 4 5 6

Solution :

```


// JavaScript program to print left view of
// Binary Tree
class newNode{

	// Construct to create a newNode
	constructor(key){
		this.data = key
		this.left = null
		this.right = null
		this.hd = 0
	}
}

// function to print left view of
// binary tree
function printLeftView(root){

	if (root == null)
		return

	let q = []
	q.push(root)

	while (q.length){

		// number of nodes at current level
		let n = q.length

		// Traverse all nodes of current level
		for(let i=1;i< n + 1;i++){
			let temp = q.shift()

			// Print the left most element
			// at the level
			if (i == 1)
				document.write(temp.data," ")

			// Add left node to queue
			if (temp.left != null)
				q.push(temp.left)

			// Add right node to queue
			if (temp.right != null)
				q.push(temp.right)
		}
	}
}

// Driver Code
let root = new newNode(10)
root.left = new newNode(2)
root.right = new newNode(3)
root.left.left = new newNode(7)
root.left.right = new newNode(8)
root.right.right = new newNode(15)
root.right.left = new newNode(12)
root.right.right.left = new newNode(14)
printLeftView(root)



```

Question-3:

Given a Binary Tree, print the Right view of it.

The right view of a Binary Tree is a set of nodes visible when the tree is visited from the Right side.

**Examples:**

**Input:**

         1

      /     \

   2         3

/   \       /  \

4     5   6    7

             \

               8

**Output**: 

Right view of the tree is 1 3 7 8

**Input:**

         1

       /

    8

  /

7

**Output**: 

Right view of the tree is 1 8 7

Solution :

```

	// JavaScript program to print left view of Binary Tree
	
	class Node
	{
		constructor(data) {
		this.left = null;
		this.right = null;
		this.data = data;
		}
	}
	
	// Utility function to create a new tree node
	function newNode(data)
	{
		let temp = new Node(data);
		return temp;
	}

	// function to print Right view of
	// binary tree
	function printRightView(root)
	{
		if (root == null)
			return;

		let q = [];
		q.push(root);

		while (q.length > 0) {
			// get number of nodes for each level
			let n = q.length;

			// traverse all the nodes of the current level
			while (n-- > 0) {

				let x = q[0];
				q.shift();

				// print the last node of each level
				if (n == 0) {
					document.write(x.data + " ");
				}
				// if left child is not null push it into the
				// queue
				if (x.left != null)
					q.push(x.left);
				// if right child is not null push it into the
				// queue
				if (x.right != null)
					q.push(x.right);
			}
		}
	}
	
	// Let's construct the tree as
	// shown in example

	let root = newNode(1);
	root.left = newNode(2);
	root.right = newNode(3);
	root.left.left = newNode(4);
	root.left.right = newNode(5);
	root.right.left = newNode(6);
	root.right.right = newNode(7);
	root.right.left.right = newNode(8);

	printRightView(root);
	


```
<aside>
💡 Question-4:

Given a Binary Tree, The task is to print the **bottom view** from left to right. A node **x** is there in output if x is the bottommost node at its horizontal distance. The horizontal distance of the left child of a node x is equal to a horizontal distance of x minus 1, and that of a right child is the horizontal distance of x plus 1.

**Examples:**

**Input:**

             20

           /     \

        8         22

    /      \         \

5         3        25

        /    \

   10       14

**Output:** 5, 10, 3, 14, 25.

**Input:**

             20

           /     \

        8         22

    /      \      /   \

 5         3    4     25

         /    \

     10       14

**Output:**

5 10 4 14 25.

**Explanation:**

If there are multiple bottom-most nodes for a horizontal distance from the root, then print the later one in the level traversal.

**3 and 4** are both the bottom-most nodes at a horizontal distance of 0, we need to print 4.

Solution :

```
class Node {
constructor(key = null, left = null, right = null) {
	this.data = key;
	this.left = left;
	this.right = right;
}
}

function printBottomView(root) {
// Create a dictionary where
// key -> relative horizontal distance
// of the node from root node and
// value -> pair containing node's
// value and its level
const d = {};

printBottomViewUtil(root, d, 0, 0);

// Traverse the dictionary in sorted
// order of their keys and print
// the bottom view
for (const i of Object.keys(d).sort(function(a, b)
{
	return a - b
	}
	)) {
	process.stdout.write(d[i][0] + " ");
}
}

function printBottomViewUtil(root, d, hd, level) {
// Base case
if (!root) {
	return;
}

// If current level is more than or equal
// to maximum level seen so far for the
// same horizontal distance or horizontal
// distance is seen for the first time,
// update the dictionary
if (hd in d) {
	if (level >= d[hd][1]) {
	d[hd] = [root.data, level];
	}
} else {
	d[hd] = [root.data, level];
}

// recur for left subtree by decreasing
// horizontal distance and increasing
// level by 1
printBottomViewUtil(root.left, d, hd - 1, level + 1);

// recur for right subtree by increasing
// horizontal distance and increasing
// level by 1
printBottomViewUtil(root.right, d, hd + 1, level + 1);
}

// Driver Code
if (require.main === module) {
const root = new Node(20);
root.left = new Node(8);
root.right = new Node(22);
root.left.left = new Node(5);
root.left.right = new Node(3);
root.right.left = new Node(4);
root.right.right = new Node(25);
root.left.right.left = new Node(10);
root.left.right.right = new Node(14);

console.log("Bottom view of the given binary tree :");

printBottomView(root);
}


```
 Question-1

Given a binary tree, your task is to find subtree with maximum sum in tree.

Examples:

Input1 :       

       1

     /   \

   2      3

  / \    / \

4   5  6   7

Output1 : 28

As all the tree elements are positive, the largest subtree sum is equal to sum of all tree elements.

Input2 :

       1

     /    \

  -2      3

  / \    /  \

4   5  -6   2

Output2 : 7

Subtree with largest sum is :

 -2

 / \

4   5

Also, entire tree sum is also 7.

Solution :


```
class Result {
  constructor(sum, isBST, low, high) {
    this.sum = sum
    this.isBST = isBST
    this.low = low
    this.high = high
  }
}

const maxSumBST = function(root) {
  let maxSum = 0

  const search = root => {
    if (!root) {
      return new Result(
        0,
        true,
        Number.MAX_SAFE_INTEGER,
        Number.MIN_SAFE_INTEGER
      )
    }

    const left = search(root.left)
    const right = search(root.right)

    if (left.isBST && right.isBST && root.val > left.high && root.val < right.low) {
      const sum = root.val + left.sum + right.sum
      maxSum = Math.max(maxSum, sum)

      return new Result(
        sum,
        true,
        Math.min(root.val, left.low),
        Math.max(root.val, right.high)
      )
    }

    return new Result(0, false, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)
  }

  search(root)

  return maxSum
}
```

Question-2

Construct the BST (Binary Search Tree) from its given level order traversal.

Example:

Input: arr[] = {7, 4, 12, 3, 6, 8, 1, 5, 10}

Output: BST:

            7

         /    \

       4     12

     /  \     /

    3   6  8

   /    /     \

 1    5      10

Solution :

```
// Javascript code for the above approach
class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

function constructBst(arr) {
	if (arr.length === 0) return null;

	// Create root node and store a copy of it in head
	let root = new Node(arr[0]), head = root;

	// Create queue to store the tree nodes
	let queue = [{ node: root, range: { min: Number.MIN_SAFE_INTEGER, max: Number.MAX_SAFE_INTEGER } }];

	for (let i = 1; i < arr.length; i++) {
		let { node, range } = queue[0];

		// Check if arr[i] can be a child of the temp node
		if (arr[i] > range.min && arr[i] < range.max) {
			// Check if arr[i] can be left child
			if (arr[i] < node.data) {
				// Set the left child and range
				node.left = new Node(arr[i]);
				queue.push({ node: node.left, range: { min: range.min, max: node.data } });
			}
			// Check if arr[i] can be left child
			else {
				// Pop the temp node from queue, set the right child and new range
				queue.shift();
				node.right = new Node(arr[i]);
				queue.push({ node: node.right, range: { min: node.data, max: range.max } });
			}
		}
		else {
			queue.shift();
			i--;
		}
	}

	return head;
}

function inorderTraversal(root) {
	if (!root) return;
	inorderTraversal(root.left);
	console.log(root.data+" ");
	inorderTraversal(root.right);
}

let arr = [7, 4, 12, 3, 6, 8, 1, 5, 10];
let root = constructBst(arr);

console.log("Inorder Traversal: ");
inorderTraversal(root);



```

<aside>
💡 Question-3

Given an array of size n. The problem is to check whether the given array can represent the level order traversal of a Binary Search Tree or not.

Examples:

Input1 : arr[] = {7, 4, 12, 3, 6, 8, 1, 5, 10}

Output1 : Yes

For the given arr[], the Binary Search Tree is:

            7

         /    \

       4     12

     /  \     /

    3   6  8

   /    /     \

 1    5      10

Input2 : arr[] = {11, 6, 13, 5, 12, 10}

Output2 : No

The given arr[] does not represent the level order traversal of a BST.

Solution :

```


// Javascript implementation to check if
// the given array can represent Level
// Order Traversal of Binary Search Tree

// To store details of a node like node's
// data, 'min' and 'max' to obtain the
// range of values where node's left and
// right child's should lie
class NodeDetails
{
	constructor()
	{
	this.min;
	this.max;
	this.data;
	}
}

// Function to check if the given array
// can represent Level Order Traversal
// of Binary Search Tree
function levelOrderIsOfBST(arr, n)
{
	
	// If tree is empty
	if (n == 0)
		return true;

	// Queue to store NodeDetails
	let q = [];

	// Index variable to access array elements
	let i = 0;

	// Node details for the
	// root of the BST
	let newNode = new NodeDetails();
	newNode.data = arr[i++];
	newNode.min = Number.MIN_VALUE;
	newNode.max = Number.MAX_VALUE;
	q.push(newNode);

	// Until there are no more elements
	// in arr[] or queue is not empty
	while (i != n && q.length > 0)	
	{
		
		// Extracting NodeDetails of a
		// node from the queue
		let temp = q[0];
		q.shift();
		newNode = new NodeDetails();

		// Check whether there are more elements
		// in the arr[] and arr[i] can be left child
		// of 'temp.data' or not
		if (i < n && (arr[i] < temp.data &&
					arr[i] > temp.min))
		{
			
			// Create NodeDetails for newNode
			// and add it to the queue
			newNode.data = arr[i++];
			newNode.min = temp.min;
			newNode.max = temp.data;
			q.push(newNode);			
		}

		newNode = new NodeDetails();

		// Check whether there are more elements
		// in the arr[] and arr[i] can be right child
		// of 'temp.data' or not
		if (i < n && (arr[i] > temp.data &&
					arr[i] < temp.max))
		{
			
			// Create NodeDetails for newNode
			// and add it to the queue
			newNode.data = arr[i++];
			newNode.min = temp.data;
			newNode.max = temp.max;
			q.push(newNode);		
		}	
	}

	// Given array represents level
	// order traversal of BST
	if (i == n)
		return true;

	// Given array do not represent
	// level order traversal of BST
	return false;	
}

// Driver code
let arr = [ 7, 4, 12, 3, 6, 8, 1, 5, 10 ];
let n = arr.length;

if (levelOrderIsOfBST(arr, n))
	document.write("Yes");
else
	document.write("No");
	

```
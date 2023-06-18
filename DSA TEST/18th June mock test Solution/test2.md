You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.


Example 1:

Input: l1 = [2,4,3], l2 = [5,6,4] Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:

Input: l1 = [0], l2 = [0] Output: [0]

Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9] Output: [8,9,9,9,0,0,0,1]

Solution:

```
function Node(val){
    this.val = val;
    this.next = null;
};

function LinkedList(){
    this.head = null;
    this.insert = function(val){
        let node = new Node(val);
        if(this.head === null){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
    }
}

var addToArrayForm = function(num, num2) {
    return String(BigInt(num.join('')) + BigInt(num2.join(''))).split('');
};

var addTwoNumbers = function(l1, l2) {
    const number1 = [];
    const number2 = [];
    const output = new LinkedList();
    
    const loop = (list, arr) => {
        arr.push(list.val);
        if (list?.next) {
            loop(list.next, arr);
        }
    }

    loop(l1, number1);
    loop(l2, number2);

    number1.reverse();
    number2.reverse();

    const newNumber = addToArrayForm(number1, number2).reverse();

    while(newNumber.length) {
        output.insert(newNumber.pop());
    }

    return output.head;
};

```
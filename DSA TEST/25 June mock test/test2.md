Implement a queue using an array in JavaScript. Include the necessary methods such as enqueue, dequeue, and isEmpty.


```
class Queue {

    constructor() {
        this.items = [];
        this.front = 0;
        this.rear = 0;
    }

    enqueue(item) {
        this.items[this.rear] = item;
        this.rear++;
    }

    dequeue() {
        const item = this.items[this.front];
        this.items[this.front] = null;
        this.front++;
        return item;
    }

    isEmpty() {
        return this.front === this.rear;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
console.log(queue.dequeue()); // 3
console.log(queue.isEmpty()); // true

```
# Linked List

**Node Class Structure:**

```typescript
class Node<T> {
  data: T;
  next: Node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}
```

**Utility Function**

```typescript
function printList(head: Node<number> | null) {
  while (head !== null) {
    process.stdout.write(head.data + " -> ");
    head = head.next;
  }
  console.log(null);
}
```

**Travesal Linked List**

```typescript
const head = new Node(5);
const secondNode = new Node(10);
const thirdNode = new Node(15);

head.setNext(secondNode);
secondNode.setNext(thirdNode);

let currentNode: Node<number> | null = head;

let res = [];

while (currentNode !== null) {
  res.push(currentNode.getValue() + " > ");
  currentNode = currentNode.getNext();
}
console.log(res.join("") + "null");

/* 
  Output: 
    5 > 10 > 15 > null
*/
```

**Traversal Search Linked List**

```typescript
const head = new Node(5);
const secondNode = new Node(10);
const thirdNode = new Node(15);

head.setNext(secondNode);
secondNode.setNext(thirdNode);

let currentNode: Node<number> | null = head;

let res = [];

while (currentNode !== null) {
  if (currentNode.getValue() === target) {
    console.log("find node: ", currentNode.getValue());
    break;
  }

  currentNode = currentNode.getNext();
  console.log("search node");
}
/* 
  Output:
    Search node
    find node: 10
*/
```

**Delete Node**

```typescript
let head: Node<number> | null = new Node(1);
let secondNode = new Node(2);
let thirdNode = new Node(3);
let lastNode = new Node(4);

let currentNode: Node<number> | null = head;
currentNode.next = secondNode;
secondNode.next = thirdNode;
thirdNode.next = lastNode;

let targetNode = 3;
let previousNode: Node<number> | null = null;

console.log("original list");
printList(head);

while (currentNode !== null) {
  if (currentNode.data === targetNode) {
    if (previousNode === null) {
      head = currentNode.next;
    } else {
      previousNode.next = currentNode.next;
    }

    break;
  }

  previousNode = currentNode;
  currentNode = currentNode.next;
}

console.log("edited list");
printList(head);
```

**Insert Node**

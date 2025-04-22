import { Node } from './node';



function printList(head: Node<number> | null) {
  while(head !== null) {
    process.stdout.write(head.data + ' -> ');
    head = head.next;
  }
  console.log(null);
}


let head: Node<number> | null = new Node(1);
let secondNode = new Node(2);
let lastNode = new Node(4);

let currentNode: Node<number> | null = head;
currentNode.next = secondNode;
secondNode.next = lastNode;

let previousNode: Node<number> | null = null;
let target = 2;
let newNode = new Node(3);

// console.log("original list");
// printList(head);
// printList(previousNode);


while(currentNode !== null) {

  if(currentNode.data === target) {
    newNode.next = currentNode.next; // [3] -> [4]
    currentNode.next = newNode; // [2] -> [3]
    
  } 

  previousNode = currentNode; // [1]
  currentNode = currentNode.next; // [2]
} 

console.log("edited list");
printList(head);
printList(previousNode);
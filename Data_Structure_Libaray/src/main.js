const{ArrayStack, LinkedListStack, SinglyLinkedList}=require('./index.js');

const stack = new ArrayStack();
const ll = new SinglyLinkedList();

stack.push(10);
stack.push(10);
stack.print();

ll.insertLast(2000);
ll.insertLast(3000);

ll.print();
console.log(ll.head.value);

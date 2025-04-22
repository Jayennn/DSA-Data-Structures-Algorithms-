class Node<T> {
   data: T;
   next: Node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }

  // public getValue(): T {
  //   return this.value;
  // }

  // public setValue(value: T): void {
  //   this.value = value;
  // }

  // public getNext(): Node<T> | null {
  //   return this.next;
  // }

  // public setNext(next: Node<T> | null): void {
  //   this.next = next;
  // }

}

export { Node };
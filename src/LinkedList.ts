import { Sorter } from './Sorter';

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;
  // constructor(public data: number[]) {}

  add(value: number): void {
    const node = new Node(value);

    // If list is empty, new element will be the head
    if (!this.head) {
      this.head = node;
      return;
    }

    // tail: last element of the list
    let tail = this.head;

    // loop throught elements of the list until we find the tail
    while (tail.next) {
      tail = tail.next;
    }

    // Append new node to the tail
    tail.next = node;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds!');
    }

    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        // we found the node
        return node;
      }
      // continue iterating through the list
      counter++;
      node = node.next;
    }

    throw new Error('Index out of bounds!');
  }

  swap(leftIndex: number, rightIndex: number): void {
    /* instead of swapping nodes, we're gonna swap only their values */
    let leftNode = this.at(leftIndex);
    let rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty');
    }
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }

    return length;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}

export default class Node {
  key: number;
  left: Node | null | undefined = null;
  right: Node | null | undefined = null;
  constructor(key: number, left?: Node | null, right?: Node | null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }
  getCount() {
    const rec = (node: Node | null | undefined): number => {
      if (node == null) return 0;
      return 1 + rec(node.left) + rec(node.right);
    };
    return rec(this);
  }
  getSum() {
    const rec = (node: Node | null | undefined): number => {
      if (node == null) return 0;
      return node.key + rec(node.left) + rec(node.right);
    };
    return rec(this);
  }
  toArray() {
    const rec = (node: Node | null | undefined, acc: number[]): number[] => {
      if (node == null) return [];
      return [
        ...acc,
        node.key,
        ...rec(node.left, acc),
        ...rec(node.right, acc),
      ];
    };
    return rec(this, []);
  }
  toString() {
    return `(${this.toArray().join(", ")})`;
  }
  some(foo: (value: number, index: number, array: number[]) => boolean) {
    return this.toArray().some(foo);
  }
  every(foo: (value: number, index: number, array: number[]) => boolean) {
    return this.toArray().every(foo);
  }
}

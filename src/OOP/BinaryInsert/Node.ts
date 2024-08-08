export default class Node {
  key: number | null;
  left: Node | null;
  right: Node | null;
  constructor(key?: number, left?: Node | null, right?: Node | null) {
    this.key = key ?? null;
    this.left = left ?? null;
    this.right = right ?? null;
  }
  getKey() {
    return this.key;
  }
  getLeft() {
    return this.left;
  }
  getRight() {
    return this.right;
  }
  insert(key: number) {
    const nodeKey = this.getKey();
    if (nodeKey === null) {
      this.key = key;
      return;
    }
    const left = this.getLeft();
    const right = this.getRight();
    if (key < nodeKey) {
      if (left) {
        left.insert(key);
      } else {
        this.left = new Node(key);
      }
    }
    if (key > nodeKey) {
      if (right) {
        right.insert(key);
      } else {
        this.right = new Node(key);
      }
    }
  }
}

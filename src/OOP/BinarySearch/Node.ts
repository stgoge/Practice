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
  search(key: number): Node | null {
    let found = false;
    let node: Node | null = this;
    do {
      if (node === null) return null;
      const nodeKey = node.getKey();
      if (nodeKey === null) return null;
      if (nodeKey === key) return node;
      if (node.getLeft() === null && node.getRight() === null) return null;
      node = key < nodeKey ? node.getLeft() : node.getRight();
    } while (found === false);
    return node;
  }
}

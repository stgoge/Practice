const RAND_MAX = 32767;
export default class Random {
  start: number;
  current: number;
  constructor(start: number) {
    this.start = start;
    this.current = start;
  }
  getNext(): number {
    this.current = this.current * 1103515245 + 12345;
    return (this.current / 65535) % (RAND_MAX + 1);
  }
  reset(): void {
    this.current = this.start;
  }
}

const INTERVAL = 100;

export class Timer {
  _timeout: number;
  _cb: Timer.Callback;
  _startTime: number = Date.now();
  _intervalId: NodeJS.Timeout;
  constructor(timeout: number, cb: Timer.Callback) {
    this._timeout = timeout;
    this._cb = cb;
  }
  start() {
    setTimeout(() => {
      clearInterval(this._intervalId);
      return this._cb({
        state: "finished",
      });
    }, this._timeout);
    this._startTime = Date.now();
    this._intervalId = setInterval(() => {
      return this._cb({
        state: "working",
        elapsedTime: Date.now() - this._startTime,
      });
    }, INTERVAL);
  }
}

export namespace Timer {
  export type Lap = {
    state: "working" | "finished";
    elapsedTime?: number;
  };
  export type Callback = (lap: Lap) => void;
}

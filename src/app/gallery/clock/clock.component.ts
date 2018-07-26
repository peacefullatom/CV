import { Component, OnInit } from '@angular/core';

const BLOCKS = 4;
const COLUMNS = 2;
const CELLS = 4;

const ARR = (n: number) => (Array.apply(null, { length: n }).map(Number.call, Number));

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.less']
})
export class ClockComponent implements OnInit {

  tick;
  now: number[] = new Array(33).join('0').split('').map(parseFloat);
  blocks = ARR(BLOCKS);
  columns = ARR(COLUMNS);
  cells = ARR(CELLS);

  constructor() { }

  private _rightNow() {
    const zero = (n: number | string, l?: number) => {
      l = typeof l != "number" || !isFinite(l) || l < 0 ? 2 : Math.round(l);
      const z = new Array(l).join("0");
      return (z + n.toString()).slice(-l);
    };
    const cut = (n: number) => (n >= 100 ? n.toString().substr(0, 2) : n.toString());
    const bin = (n: string) => ((parseInt(n) >>> 0).toString(2));
    const stamp = new Date();
    const now =
      [
        zero(stamp.getHours()),
        zero(stamp.getMinutes()),
        zero(stamp.getSeconds()),
        zero(cut(stamp.getMilliseconds()))
      ].join('');
    this.now = now
      .split('')
      .map(e => zero(bin(e), 4))
      .join('')
      .split('')
      .map(e => parseInt(e));
  }

  position = (block: number, column: number, cell: number) => (block * BLOCKS * 2 + column * COLUMNS * 2 + cell);

  ngOnInit() {
    this.tick = setInterval(() => this._rightNow(), 133)
  }

}

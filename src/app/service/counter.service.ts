import { Injectable, signal } from "@angular/core";

@Injectable()
export class CounterService {
  private _count = signal(0);
  count = this._count.asReadonly();

  add = () => {
    this._count.update(c => c + 1);
  }

  substract = () => {
    this._count.update(c => c - 1);
  }

}

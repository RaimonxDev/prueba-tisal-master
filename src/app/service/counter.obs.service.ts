import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class CounterObsService {
  private _count = new BehaviorSubject(0);
  count = this._count.asObservable();

  add = () => {
    this._count.next(this._count.value + 1);
  }

  substract = () => {
    this._count.next(this._count.value - 1);
  }

}

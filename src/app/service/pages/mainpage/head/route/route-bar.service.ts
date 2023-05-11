import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RouteBarService {

  constructor() { }

  private _data = new BehaviorSubject<string>('discount');
  data$ = this._data.asObservable();

  setData(value: string): void {
    this._data.next(value);
  }

}

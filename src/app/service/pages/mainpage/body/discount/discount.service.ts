import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiscountService{

  count: number = 0;
  containerName: string = 'discount';
  items: Array<String> = [];

  constructor() {}

  loadMoreData(loadNumber: number): Array<String> {
    return Array(loadNumber).fill(this.containerName + 'Item ' + this.count++);
  }

  fillItems(Items: Array<String>): void {
    this.items = Items;
  }

}

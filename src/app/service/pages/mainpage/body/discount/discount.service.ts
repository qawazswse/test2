import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  count: number = 0;
  containerName: string = 'discount';
  items: Array<String> = [];

  constructor() {
    this.loadMoreData();
  }

  loadMoreData() {
    this.items.push(...Array(10).fill(this.containerName + 'Item ' + this.count++));
  }

}

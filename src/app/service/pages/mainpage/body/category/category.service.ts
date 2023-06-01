import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  count: number = 0;
  containerName: string = 'category';
  items: Array<String> = [];

  constructor() {
    this.loadMoreData();
  }

  loadMoreData(): Array<String> {
    return Array(1).fill(this.containerName + 'Item ' + this.count++);
  }

  fillItems(Items: Array<String>): void {
    this.items.push(...Items);
  }

}

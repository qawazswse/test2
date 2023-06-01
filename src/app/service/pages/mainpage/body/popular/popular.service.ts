import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopularService {

  count: number = 0;
  containerName: string = 'popular';
  items: Array<String> = [];

  constructor() {
    this.loadMoreData();
  }

  loadMoreData(): Array<String> {
    return Array(10).fill(this.containerName + 'Item ' + this.count++);
  }

  fillItems(Items: Array<String>): void {
    this.items.push(...Items);
  }

}

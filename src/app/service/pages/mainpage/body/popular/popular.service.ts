import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopularService {

  count: number = 0;
  containerName: string = 'popular';
  items: Array<String> = [];

  constructor() {}

  loadMoreData(): Array<String> {
    return Array(1).fill(this.containerName + 'Item ' + this.count++);
  }

  fillItems(Items: Array<String>): void {
    this.items = Items;
  }

}

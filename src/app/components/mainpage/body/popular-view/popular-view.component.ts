import { Component } from '@angular/core';
import {PopularService} from "../../../../service/pages/mainpage/body/popular/popular.service";

@Component({
  selector: 'app-popular-view',
  templateUrl: './popular-view.component.html',
  styleUrls: ['./popular-view.component.css']
})
export class PopularViewComponent{

  items: Array<String> = [];
  popularService: PopularService;

  constructor(popularService: PopularService) {
    this.popularService = popularService;
    this.items = this.popularService.items;
  }

  loadMoreData() {
    this.items.push(...this.popularService.loadMoreData());
  }

  OnClose() {
    this.popularService.fillItems(this.items);
  }

}

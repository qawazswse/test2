import {Component, OnDestroy, OnInit} from '@angular/core';
import {PopularService} from "../../../../service/pages/mainpage/body/popular/popular.service";

@Component({
  selector: 'app-popular-view',
  templateUrl: './popular-view.component.html',
  styleUrls: ['./popular-view.component.scss']
})
export class PopularViewComponent implements OnInit, OnDestroy{
  items: Array<String> = [];
  popularService: PopularService;

  constructor(popularService: PopularService) {
    this.popularService = popularService;
  }

  loadMoreData() {
    this.items.push(...this.popularService.loadMoreData());
  }

  ngOnInit(): void {
    this.items = this.popularService.items;
  }

  ngOnDestroy() {
    this.popularService.fillItems(this.items);
  }
}

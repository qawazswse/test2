import { Component } from '@angular/core';
import {DiscountService} from "../../../../service/pages/mainpage/body/discount/discount.service";

@Component({
  selector: 'app-discount-view',
  templateUrl: './discount-view.component.html',
  styleUrls: ['./discount-view.component.css']
})
export class DiscountViewComponent {
  items: Array<String> = [];
  discountService: DiscountService;

  constructor(discountService: DiscountService) {
    this.discountService = discountService;
  }

  loadMoreData() {
    this.items.push(...this.discountService.loadMoreData(1));
  }

  ngOnInit(): void {
    this.items = this.discountService.items;
  }

  ngOnDestroy() {
    this.discountService.fillItems(this.items);
  }
}

import { Component } from '@angular/core';
import {CategoryService} from "../../../../service/pages/mainpage/body/category/category.service";

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent {
  items: Array<String> = [];
  categoryService: CategoryService;

  constructor(categoryService: CategoryService) {
    this.categoryService = categoryService;
  }

  loadMoreData() {
    this.items.push(...this.categoryService.loadMoreData());
  }

  ngOnInit(): void {
    this.items = this.categoryService.items;
    this.loadMoreData();
  }

  ngOnDestroy() {
    this.categoryService.fillItems(this.items);
  }
}

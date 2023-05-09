import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouteBarService} from "../../service/head/route/route-bar.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit, OnDestroy{
  showContainer: string = 'discount';
  private subscription: Subscription = new Subscription();

  constructor(private routeBarService: RouteBarService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.routeBarService.data$.subscribe(
      (data) => { this.showContainer = data;  }
    );
  }


}

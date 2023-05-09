import {Component, EventEmitter, Output} from '@angular/core';
import {RouteBarService} from "../../../service/head/route/route-bar.service";

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent {

  constructor(private routeBarService: RouteBarService) {}
  //click event function count
  showPopover: boolean = false;

  setContainer(container: string): void {
    this.routeBarService.setData(container);
  }

}

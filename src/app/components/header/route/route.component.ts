import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent {
  //click event function count
  showPopover: boolean = false;

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-String',
  templateUrl: './String.component.html',
  styleUrls: ['./String.component.scss']
})
export class StringComponent {

  title: string = 'test2';

  constructor() {
    this.title = 'test2';
  }

  onClick($event: MouseEvent) {
    console.log("onClick");
  }

}

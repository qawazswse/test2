import {Component} from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent {
  showAbout = false;
  showContact = false;

  onClickAbout() {
    this.showAbout = true;
    this.showContact = false;
  }

  onClickContact() {
    this.showContact = true;
    this.showAbout = false;
  }
}

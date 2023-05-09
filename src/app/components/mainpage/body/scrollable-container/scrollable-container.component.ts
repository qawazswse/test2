import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-scrollable-container',
  templateUrl: './scrollable-container.component.html',
  styleUrls: ['./scrollable-container.component.scss']
})
export class ScrollableContainerComponent {
  // Generate an array of numbers from 1 to 100
  numbers: number[] = Array.from({length: 100}, (_, i) => i + 1);
  @Input() containerName: string = 'scrollable-container';
}

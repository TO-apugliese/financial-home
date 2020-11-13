import {Component, Input} from '@angular/core';

export enum IconPostion {
  LEFT = 'left',
  RIGHT = 'right',
}

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html'
})
export class IconComponent {
  @Input() position;
  @Input() name: string;
}

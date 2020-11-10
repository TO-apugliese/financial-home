import {Component, Input} from '@angular/core';
import {switchMapTo} from "rxjs/operators";

export enum MessageType {
  INFO = 'info',
  ERROR = 'error',
  SUCCESS = 'check',
  WARNING = 'warning',
}

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  @Input()
  type: MessageType;

  get containerClass(): string | undefined {
    if (!this.type) {
      return;
    }

    switch (this.type) {
      case MessageType.INFO:
        return 'blue lighten-2';
      case MessageType.ERROR:
        return 'red lighten-2';
      case MessageType.SUCCESS:
        return 'green lighten-2';
      case MessageType.WARNING:
        return 'amber lighten-2';
    }
  }
}

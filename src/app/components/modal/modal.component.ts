import { v4 as uuidv4 } from 'uuid';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

declare var M: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {
  private _id = uuidv4();

  @Input()
  headlineKey: string;

  @Input()
  descriptionKey: string;

  @Input()
  triggerKey: string;

  @Input()
  triggerColor: string;

  @Input()
  agreeKey: string;

  @Input()
  disagreeKey: string;

  @Output()
  confirm = new EventEmitter();

  @Output()
  cancel = new EventEmitter();

  ngOnInit(): void {
      const elems = document.querySelectorAll('.modal');
      const instances = M.Modal.init(elems);
  }

  get controlId() {
    return `app-modal-${this._id}`;
  }

  onConfirm() {
    this.confirm.emit();
  }

  onCancel() {
    this.cancel.emit();
  }
}

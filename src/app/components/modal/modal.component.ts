import {v4 as uuidv4} from 'uuid';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavigationService} from '../../services';

declare var M: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  private id = uuidv4();

  @Input()
  headlineKey: string;

  @Input()
  descriptionKey: string;

  @Input()
  triggerKey: string;

  @Input()
  triggerColor: string;

  @Input()
  confirmKey: string;

  @Input()
  cancelKey: string;

  @Output()
  confirm = new EventEmitter();

  @Output()
  cancel = new EventEmitter();

  constructor(private navigationSrv: NavigationService) {
  }

  ngOnInit(): void {
      const elems = document.querySelectorAll('.modal');
      const instances = M.Modal.init(elems);
  }

  get controlId(): string {
    return `app-modal-${this.id}`;
  }

  onConfirm(): void {
    this.confirm.emit();
  }

  onCancel(): void {
    this.cancel.emit();
  }

  openModal(): void {
    this.navigationSrv.hash = this.controlId;
  }
}

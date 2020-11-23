import * as moment from 'moment';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormComponent } from '../form.component';

declare var M: any;

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html'
})
export class DatePickerComponent extends FormComponent implements OnChanges {
  initialDate: Date;
  instance: any;

  constructor() {
    super();
  }

  ngOnChanges(changes: SimpleChanges): void {
    var elem = document.querySelector(`.datepicker-${this.id}`);

    this.instance = M.Datepicker.init(elem, {
      defaultDate: this.date,
      setDefaultDate: true,
      format: 'dd.mm.yyyy',
      autoClose: true,
      onSelect: (select) => this.value = moment(select).format(),
    });

    if (!!this.instance)
      setTimeout(() => this.instance.setDate(this.date), 50);
  }

  get date(): Date {
    return !!this.value
      ? moment(this.value).toDate()
      : moment().toDate();
  }
}

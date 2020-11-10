import {Component, Input, OnInit} from '@angular/core';
import {Collections, DataService} from '../../services';

declare var M: any;

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html'
})
export class CollectionListComponent implements OnInit {
  @Input() collection: Collections;
  instance: any;
  collections: any[];
  allSelected = false;
  checkedIds = [];

  constructor(private db: DataService) {

  }

  ngOnInit(): void {
    this.db.get(this.collection).then(res => this.collections = res);
    this.db.instance(this.collection).then(res => this.instance = res);
  }

  get headers(): string[] {
    if (!this.instance) {
      return [];
    }

    return Object.keys(this.instance);
  }

  get rows(): any[] {
    if (!this.collections) {
      return [];
    }

    return this.collections;
  }

  toggle(id): void {
    this.allSelected = false;

    if (this.isChecked(id)) {
      this.checkedIds.splice(this.checkedIds.indexOf(id), 1);
    } else {
      this.checkedIds.push(id);
    }
  }

  toggleAll(): void {
    if (this.allSelected) {
      this.checkedIds = this.collections.map(c => c._id);
    } else {
      this.checkedIds = [];
    }
  }

  isChecked(id: string): boolean {
    return this.checkedIds.indexOf(id) > -1;
  }
}

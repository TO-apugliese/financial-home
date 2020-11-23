import { ModelService } from './../../services/model.service';
import { SelectService } from './../../services/select.service';
import { HostListener, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Collections, DataService } from '../../services';
import { FlyoutComponent } from '..';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html'
})
export class CollectionListComponent implements OnInit {
  @Input() collection: Collections;
  @ViewChild('flyout') flyout: FlyoutComponent;

  //#region FIELDS
  instance: any;
  selected: any;
  collections: any[];
  allSelected = false;
  checkedIds = [];
  //#endregion

  constructor(
    private db: DataService,
    private selectSrv: SelectService,
    private modelSrv: ModelService,
  ) { }

  public isChecked(id: string): boolean {
    return this.checkedIds.indexOf(id) > -1;
  }

  //#region LIFECYCLE HOOKS
  ngOnInit(): void {
    this.db.get(this.collection).then(res => this.collections = res);
    this.db.instance(this.collection).then(res => this.instance = res);
  }
  //#endregion

  //#region GETTER
  get headers(): string[] {
    if (!this.instance) {
      return [];
    }

    return Object
      .keys(this.instance)
      .filter(k => !k.startsWith('_'));
  }

  get rows(): any[] {
    if (!this.collections) {
      return [];
    }

    return this.collections;
  }
  //#endregion

  //#region HANDLERS
  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(evt: KeyboardEvent): void {
    this.flyout.close();
  }

  toggleOne(id: string): void {
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

  openFlyout(): void {
    this.flyout.open();
  }

  create(): void {
    this.selected = this.modelSrv.createEmptyObject(this.instance);
    this.openFlyout();
  }

  edit(id: string): void {
    this.selected = this.modelSrv.clone(
      this.collections
        .find(c => c._id === id)
    );

    this.openFlyout();
  }

  delete(id: string): void {
    if (!id) {
      return;
    }

    this.collections.splice(this.collections.indexOf(id), 1);
    this.db.delete(this.collection, id);
  }

  async store(): Promise<void> {
    const isNewItem = !this.collections.find(c => c._id === this.selected._id);

    if (isNewItem) {
      const res = await this.db.post(this.collection, this.selected);
      this.collections.push(res);
    }
    else {
      this.db.put(this.collection, this.selected);
      this.collections.splice(this.collections.findIndex(c => c._id === this.selected._id), 1, this.selected);
    }
  }
  //#endregion
}

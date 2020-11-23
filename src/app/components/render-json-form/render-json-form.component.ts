import { SelectService } from './../../services/select.service';
import { Component, Input } from '@angular/core';
import { ModelService } from '../../services';
import { DropdownItem } from '../forms';

enum PropertyType {
  OBJECT = 'object',
  ARRAY = 'array',
  STRING = 'string',
  TEXT = 'text',
  NUMBER = 'number',
  DATE = 'date',
  SELECT = 'select'
}

interface MetaData {
  name: string;
  type: PropertyType;
  item: MetaData[];
  addButtonActive: boolean;
}

@Component({
  selector: 'app-render-json-form',
  styleUrls: ['./render-json-form.component.scss'],
  templateUrl: './render-json-form.component.html',
})
export class RenderJsonFormComponent {
  @Input() instance: any;
  @Input() data: any;
  @Input() disabled: boolean;

  propertyType = PropertyType;
  generatedMetaData: MetaData[] = [];

  constructor(private selectSrv: SelectService, private modelSrv: ModelService) {

  }

  get metaData(): MetaData[] {
    if (!this.instance) {
      return [];
    }
    if (this.generatedMetaData.length === 0) {
      this.generatedMetaData = this.handleJson(this.instance);
    }

    return this.generatedMetaData;
  }

  getSelectOptions(metaData: MetaData): DropdownItem[] {
    const type = this.instance[metaData.name]
    .split('<')[1]
    .split('>')[0];

    return this.selectSrv.get(type).map(el => new DropdownItem(el, el));
  }

  public getFieldValue(field: string): any {
    if (!this.data) {
      return;
    }

    return this.data[field];
  }

  public getFirstValueOfArray(field: string): any {
    if (!this.instance) {
      return;
    }

    return !!this.instance[field] &&  this.instance[field].length > 0 ? this.instance[field][0] : null;
  }

  public addItem(metaData: MetaData): void {
    this.data[metaData.name].push(this.modelSrv.clone(metaData.item));
  }

  public deleteItem(metaData: MetaData, index: number): void {
    this.data[metaData.name].splice(index, 1);
  }

  private handleJson(instance: any): MetaData[] {
    if (!instance) {
      return [];
    }

    const props = Object.keys(instance);
    return props
      .filter(k => !k.startsWith('_'))
      .map(name => {
        const type = this.getType(name, instance[name]);
        const value = instance[name];

        return {
          name,
          type,
          item: this.getMetaData(name, value, type as PropertyType),
          addButtonActive: false,
        };
      });
  }

  private getMetaData(name: string, obj: any, type: PropertyType): MetaData[] {
    if (type === PropertyType.ARRAY && obj.length > 0) {
      return this.handleJson(obj[0]);
    }

    return null;
  }

  private contains(value: string, search: string): boolean {
    return value.toLowerCase().indexOf(search) > -1;
  }

  private getType(name: string, value: any): PropertyType {
    const type = typeof value;
    const dateDetectors = ['until', 'from', 'timestamp', 'date'];
    const isDate = !!dateDetectors.find(d => this.contains(name, d));

    if (type === PropertyType.OBJECT && Array.isArray(value)) {
      return PropertyType.ARRAY;
    }
    if (type === PropertyType.STRING && isDate) {
      return PropertyType.DATE;
    }
    if (type === PropertyType.STRING && this.contains(value, PropertyType.SELECT)) {
      return PropertyType.SELECT;
    }
    if (type === PropertyType.STRING) {
      return PropertyType.TEXT;
    }

    return type as PropertyType;
  }
}

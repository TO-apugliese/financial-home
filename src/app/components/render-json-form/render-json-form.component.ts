import { Component, Input, OnInit } from '@angular/core';

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
  name: string,
  type: PropertyType,
  item: MetaData[],
}

@Component({
  selector: 'app-render-json-form',
  templateUrl: './render-json-form.component.html',
})
export class RenderJsonFormComponent {
  @Input() instance: any;
  @Input() data: any;

  propertyType = PropertyType;
  generatedMetaData: MetaData[] = [];

  get metaData(): MetaData[] {
    if (!this.instance) return [];
    if (this.generatedMetaData.length === 0) this.generatedMetaData = this.handleJson(this.instance);

    return this.generatedMetaData;
  }

  private handleJson(instance: any): MetaData[] {
    if (!instance) return [];

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
        }
      });
  }

  private getMetaData(name: string, obj: any, type: PropertyType): MetaData[] {
    if (type === PropertyType.ARRAY && obj.length > 0) return this.handleJson(obj[0]);

    return null;
  }

  private contains(value: string, search: string) {
    return value.toLowerCase().indexOf(search) > -1;
  }

  private getType(name: string, value: any): PropertyType {
    const type = typeof value;
    const dateDetectors = ['until', 'from', 'timestamp', 'date'];
    const isDate = !!dateDetectors.find(d => this.contains(name, d));

    if (type === PropertyType.OBJECT && Array.isArray(value)) return PropertyType.ARRAY;
    if (type === PropertyType.STRING && isDate) return PropertyType.DATE;
    if (type === PropertyType.STRING && this.contains(value, PropertyType.SELECT)) return PropertyType.SELECT;
    if (type === PropertyType.STRING) return PropertyType.TEXT;

    return type as PropertyType;
  }
}

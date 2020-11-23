import { Injectable } from '@angular/core';

@Injectable()
export class ModelService {
  createEmptyObject(instance: any): any {
    const copy = this.clone(instance);
    Object.keys(copy).forEach(k => {
      copy[k] = typeof copy[k] === 'object' && Array.isArray(instance[k])
        ? copy[k].map((item: any) => this.createEmptyObject(item))
        : null;
    });
    return copy;
  }

  clone(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
  }
}

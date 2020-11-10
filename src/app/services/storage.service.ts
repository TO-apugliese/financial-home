export class StorageService {
  read(key: string): any {
    const value = window.localStorage.getItem(key);
    if (!!value) {
      return value.startsWith('{') ? JSON.parse(value) : value;
    }
  }

  write(key: string, value: any): void {
    window.localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value);
  }

  delete(key: string): void {
    window.localStorage.removeItem(key);
  }
}

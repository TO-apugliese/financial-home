import {Injectable} from '@angular/core';
import {AuthService} from './auth.services';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {of} from "rxjs";

export enum Collections {
  FIX_COSTS = 'fix-costs',
  VARIABLE_COSTS = 'variable-costs',
}

@Injectable()
export class DataService {
  baseUrl = 'http://localhost:3000/v1/data';

  constructor(private http: HttpClient, private auth: AuthService) {
  }

  async instance(collection: Collections): Promise<any[]> {
    return new Promise<any[]>(async (resolve) => {
      const accessToken = this.auth.token.accessToken;
      this.http
        .get(`${this.baseUrl}/${collection}/instance`, {observe: 'response', headers: new HttpHeaders().set('access-token', accessToken)})
        .pipe(
          catchError((s) => of(s)),
        )
        .subscribe((data: HttpResponse<any>) => {
          if (data.status === 200) {
            resolve(data.body);
          }
          return resolve([]);
        });
    });
  }

  async get(collection: Collections): Promise<any[]> {
    return new Promise<any[]>(async (resolve) => {
      const accessToken = this.auth.token.accessToken;

      this.http
        .get(`${this.baseUrl}/${collection}`, {observe: 'response', headers: new HttpHeaders().set('access-token', accessToken)})
        .pipe(
          catchError((s) => of(s)),
        )
        .subscribe((data: HttpResponse<any>) => {
          if (data.status === 200) {
            resolve(data.body);
          }
          return resolve([]);
        });
    });
  }
}

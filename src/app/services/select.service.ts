import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.services';

@Injectable()
export class SelectService {
  selectTypes: any;

  constructor(private http: HttpClient, private auth: AuthService) {
    if (!this.selectTypes) {
      this.loadSelectTypes()
        .then(r => {
          this.selectTypes = r;
        });
    }
  }

  private async loadSelectTypes(): Promise<any> {
    return new Promise<any>(async (resolve) => {
      const url = 'http://localhost:3000/v1/enums';
      const accessToken = this.auth.token.accessToken;

      this.http.get(
        url,
        {
          observe: 'response',
          headers: new HttpHeaders()
            .set('access-token', accessToken)
        }
      )
        .pipe(
          catchError((s) => of(s)),
        )
        .subscribe((data: HttpResponse<any>) => {
          if (data.status === 200) {
            resolve(data.body);
          }
          return resolve(null);
        });
    });
  }

  public get(type: string): string[] {
    if (!this.selectTypes) {
      return;
    }

    return this.selectTypes[type];
  }
}

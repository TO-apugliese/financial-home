import {of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import * as moment from 'moment';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {StorageService} from './storage.service';

interface OAuthToken {
  userId: string;
  accessToken: string;
  refreshToken: string;
  timeStamp: string;
  validUntil: string;
}

@Injectable()
export class AuthService {
  baseUrl = 'http://localhost:3000';
  token: OAuthToken;
  refreshInterval;

  constructor(private http: HttpClient, private storage: StorageService) {
    const token = this.storage.read('token');

    if (token) {
      this.token = token;
      this.startRefreshInterval();
    }
  }

  async login(email: string, password: string): Promise<number> {
    return new Promise((resolve) => {
      this.http
        .post(`${this.baseUrl}/auth/login`, {email, password}, {observe: 'response'})
        .pipe(
          catchError((s) => of(s)),
        )
        .subscribe((data: HttpResponse<any>) => {
          if (data.status === 200) {
            this.storeToken(data.body);
            this.startRefreshInterval();
          }
          return resolve(data.status);
        });
    });
  }

  async logout(): Promise<void> {
    return new Promise((resolve) => {
      if (!this.isLoggedIn) {
        resolve();
      }

      this.http
        .get(`${this.baseUrl}/auth/logout/${this.token.userId}`)
        .subscribe(() => {
          this.storage.delete('token');
          this.token = null;
          resolve();

          clearInterval(this.refreshInterval);
        });
    });
  }

  register(email: string, password: string): void {
    this.http
      .post(`${this.baseUrl}/register`, {})
      .subscribe();
  }

  async refreshToken(): Promise<any> {
    return new Promise<any>((resolve) => {
      const isNotValid = this.validFor <= 0;
      if (isNotValid) {
        this.http
          .get(`${this.baseUrl}/auth/refresh/${this.token.refreshToken}`, {})
          .subscribe((res: any) => {
            resolve(res);
            this.storeToken(res);
          });
      } else {
        resolve({});
      }
    });
  }

  get isLoggedIn(): boolean {
    return !!this.token;
  }

  get validFor(): number {
    return moment(this.token.validUntil).diff(moment(), 'minutes');
  }

  private startRefreshInterval(): void {
    this.refreshInterval = setInterval(() => {
      this.refreshToken();
    }, 1000);
  }

  private storeToken(token: OAuthToken): void {
    if (!this.token) {
      this.token = {} as OAuthToken;
    }

    this.token = Object.assign(this.token, token);
    this.storage.write('token', this.token);
  }
}

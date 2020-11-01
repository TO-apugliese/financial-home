import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

interface oAuthToken {
    userId: string;
    accessToken: string;
    refreshToken: string;
    timeStamp: string;
}

@Injectable()
export class AuthService {
    baseUrl = 'http://localhost:3000';
    token: oAuthToken;

    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
        this.http
            .post(`${this.baseUrl}/auth/login`, { email, password })
            .pipe(
                map((token: oAuthToken) => {
                    this.token = token;
                }),
                catchError(error => {
                    return of([error]);
                }),
            ).subscribe();
    }

    logout() {
        if (!this.isLoggedIn) return;

        this.http
            .get(`${this.baseUrl}/auth/logout/${this.token.userId}`)
            .subscribe(() => this.token = null);
    }

    register(email: string, password: string) {
        this.http
            .post(`${this.baseUrl}/register`, {})
            .subscribe()
    }

    get isLoggedIn() {
        return !!this.token;
    }
}
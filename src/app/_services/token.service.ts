import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private TOKEN_KEY = 'currentUser';
  constructor() { }

  setAccessToken(jwt: string) {
    localStorage.setItem(this.TOKEN_KEY, jwt);
  }
  getAccessToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }
}

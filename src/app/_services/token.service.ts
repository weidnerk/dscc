import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private TOKEN_KEY = 'currentUser';
  constructor() { }

  setAccessToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  getAccessToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }
}

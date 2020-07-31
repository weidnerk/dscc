import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { TokenService } from 'src/app/_services/token.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private tokenService: TokenService) { }

    canActivate() {
        if (this.tokenService.getAccessToken()) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }
}
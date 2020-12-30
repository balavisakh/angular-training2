import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MoviesService } from '../services/movies.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements CanActivate {
  constructor(private authService: MoviesService){}
  canActivate(): boolean {
    if (this.authService.isUserLoggedIn()) {
    return true;
    }
    else {
      return false;
    }
  }
  
}

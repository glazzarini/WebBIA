import { AuthService } from './../login/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private authService: AuthService,
              private router: Router) 
  { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean {
    
    if(this.authService.usuarioEstaAutenticado())
    {
      console.log("Usuário Logado!");
      return true;
    }

    console.log("Usuário Deslogado!");
    this.router.navigate(['/login']);

    return false;
  }
}

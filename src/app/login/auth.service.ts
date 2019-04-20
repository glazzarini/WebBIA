import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { tap } from 'rxjs/operators';
import { Login } from './login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioAutenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();
  list: Login[];

  constructor(private router: Router, private http: HttpClient) { }

  getAll()
  {
    return this.http.get<Login[]>(environment.API + '/login/PesMetros/2').pipe(tap(console.log));
  }

  fazerLogin(usuario: Usuario)
  {
    if(usuario.nome == 'glazzarini' && usuario.senha == 'admin')
    {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);

      localStorage.setItem('ls-usuarioAutenticado', 'LOG');

      this.router.navigate(['/']);
    }
    else
    {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);

      localStorage.setItem('ls-usuarioAutenticado', 'DESLOG');

      alert('Usuário ou senha inálidos!');
    }
  }

  usuarioEstaAutenticado()
  {
    console.log(localStorage['ls-usuarioAutenticado']);

    if(localStorage['ls-usuarioAutenticado'] == 'LOG')
    {
      this.mostrarMenuEmitter.emit(true);
      return true;
    }
    else
    {
      this.mostrarMenuEmitter.emit(false);
      return false;
    }
  }

  deslogarUsuario()
  {
    localStorage.setItem('ls-usuarioAutenticado', 'DESLOG');
  }
}

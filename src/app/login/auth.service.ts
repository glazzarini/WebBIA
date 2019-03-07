import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioAutenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

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

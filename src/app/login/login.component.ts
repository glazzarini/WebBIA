import { Component, OnInit, EventEmitter } from '@angular/core';
import { Usuario } from './usuario';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  usuario: Usuario = new Usuario();
  login: Login[];

  constructor(private authService: AuthService) { }

  ngOnInit() 
  {
    
  }

  fazerLogin()
  {
    this.authService.getAll().subscribe(dados => this.login = dados);
    console.log(this.login);

    this.authService.fazerLogin(this.usuario);
  }
}

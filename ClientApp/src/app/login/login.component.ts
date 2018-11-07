import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })
  export class LoginComponent 
  {
    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private router: Router){ }

    public fazerLogin()
    {
      this.router.navigate(['/']);
    }
  }
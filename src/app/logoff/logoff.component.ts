import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoff',
  templateUrl: './logoff.component.html',
  styleUrls: ['./logoff.component.css']
})
export class LogoffComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() 
  {
    this.authService.deslogarUsuario();
    this.router.navigate(['/login']);
  }

}
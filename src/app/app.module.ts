import { AppRoutingModule } from './app.routing.module';
import { AuthGuard } from './guards/auth.guard.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroPessoasComponent } from './cadastro-pessoas/cadastro-pessoas.component';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './login/auth.service';
import { LogoffComponent } from './logoff/logoff.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CadastroPessoasComponent,
    LogoffComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

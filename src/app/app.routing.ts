import { AuthGuard } from './guards/auth.guard.service';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoffComponent } from './logoff/logoff.component';
import { CadastroPessoasComponent } from './cadastro-pessoas/cadastro-pessoas.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const APP_ROUTES: Routes = [
    { 
        path: 'cadastro-pessoas', 
        component: CadastroPessoasComponent
    },    
    { 
        path: 'login', 
        component: LoginComponent 
    },
    { 
        path: 'logoff', 
        component: LogoffComponent 
    },
    { 
        path: '', 
        component: HomeComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
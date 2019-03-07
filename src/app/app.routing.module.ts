import { NgModule } from '@angular/core';

import { AuthGuard } from './guards/auth.guard.service';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoffComponent } from './logoff/logoff.component';
import { CadastroPessoasComponent } from './cadastro-pessoas/cadastro-pessoas.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const appRoutes: Routes = [
    { 
        path: 'cadastro-pessoas', 
        component: CadastroPessoasComponent,
        canActivate: [AuthGuard]
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
        component: HomeComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
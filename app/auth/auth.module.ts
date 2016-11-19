import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Auth } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { LoginComponent } from './login.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ LoginComponent ],
    providers: [
        Auth,
        AuthGuard
    ]
})
export class AuthModule { }

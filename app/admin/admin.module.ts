import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth/auth-guard.service';

import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home.component';

const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [ AuthGuard ],
        children: [
            {
                path: '',
                component: AdminHomeComponent
            },
        ]
    }
];

@NgModule({
    imports: [ RouterModule, RouterModule.forChild(routes) ],
    exports: [],
    declarations: [
        AdminComponent,
        AdminHomeComponent
    ],
    providers: [
    ],
})
export class AdminModule { }

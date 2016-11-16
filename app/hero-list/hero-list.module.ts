import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeroListComponent }   from './hero-list.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: 'list', component: HeroListComponent}
        ])
    ],
    declarations: [
        HeroListComponent
    ]
})
export class HeroListModule { }

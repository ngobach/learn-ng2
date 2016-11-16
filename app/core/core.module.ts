import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar.component';
import { FooterComponent } from './footer.component';

import { HeroService } from '../hero/hero.service';

const DIRECTIVES = [
    NavbarComponent,
    FooterComponent
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        ...DIRECTIVES
    ],
    exports: [
        CommonModule,
        HttpModule,
        ...DIRECTIVES
    ],
    providers: [
        HeroService
    ]
})
export class CoreModule { }

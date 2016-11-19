import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroResolver } from './hero-resolver.service';

@NgModule({
    imports: [
        CommonModule, FormsModule,
        RouterModule.forChild([
            {
                path: 'detail/:id',
                resolve: {
                    hero: HeroResolver
                },
                component: HeroDetailComponent
            },
        ])
    ],
    providers: [
        HeroResolver
    ],
    declarations: [HeroDetailComponent]
})
export class HeroDetailModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent }   from './hero-detail.component';

@NgModule({
    imports: [
        CommonModule, FormsModule,
        RouterModule.forChild([
            { path: 'detail/:id', component: HeroDetailComponent },
        ])
    ],
    declarations: [HeroDetailComponent]
})
export class HeroDetailModule { }

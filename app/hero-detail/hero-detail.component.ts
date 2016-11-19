import { Component, OnInit, trigger, transition, style, state, animate } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';

@Component({
    moduleId: module.id,
    selector: 'app-hero-detali',
    templateUrl: 'hero-detail.component.html',
    styleUrls: ['hero-detail.component.css'],
    animations: [
        trigger('fade', [
            state('in', style({height: '*'})),
            transition(':enter', [
                style({height: 0}),
                animate('300ms ease-in')
            ]),
            transition(':leave', [
                animate('300ms ease-out', style({height: 0}))
            ])
        ])
    ]
})
export class HeroDetailComponent implements OnInit {
    private hero: Hero;
    private edit: Hero;

    constructor(private heroService: HeroService, private route: ActivatedRoute, private location: Location) { }

    ngOnInit() {
        this.route.data.subscribe(({hero}: { hero: Hero }) => {
            this.hero = hero;
        });
    }

    toggleEdit(save = false) {
        if (!this.edit) {
            this.edit = Object.assign({}, this.hero);
            return;
        }
        if (save) {
            this.hero = this.edit;
            this.heroService.update(this.hero);
        }
        this.edit = void 0;
    }
    goBack(): void {
        this.location.back();
    }
}
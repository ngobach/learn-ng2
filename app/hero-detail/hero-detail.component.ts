import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';

@Component({
    moduleId: module.id,
    selector: 'app-hero-detali',
    templateUrl: 'hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
    private hero: Hero;
    private edit: Hero;

    constructor(private heroService: HeroService, private route: ActivatedRoute, private location: Location) { }

    ngOnInit() {
        this.route.params.subscribe((param: Params) => {
            this.heroService.getHero(+param['id']).then(hero => this.hero = hero);
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
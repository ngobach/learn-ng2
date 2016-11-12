import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'app-hero-list',
    templateUrl: 'hero-list.component.html'
})
export class HeroListComponent implements OnInit {
    private heroes: Hero[];
    constructor(private heroService: HeroService) { }

    ngOnInit() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(0, 4));
    }
}
import { Component, OnInit } from '@angular/core';

import { HeroService } from './hero.service';
import { Hero } from './hero';
import { Subject } from 'rxjs/subject';
import './rxjs';

@Component({
    moduleId: module.id,
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    heroes: Hero[];
    selected: Hero;
    name: string;
    searchTerm: Subject<string>;

    constructor(private heroService: HeroService) {
        this.name = '';
        this.searchTerm = new Subject<string>();
        this.searchTerm
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(x => this.heroService.getHeroes(x))
            .subscribe(x => this.heroes = x);
    }

    ngOnInit() {
        this.searchTerm.next();
    }

    onSelect(hero: Hero) {
        this.selected = hero;
    }

    get nameValid(): boolean {
        return this.name.length > 0;
    }

    createHero() {
        if (this.name.trim().length === 0) {
            return;
        }
        this.heroService.create(this.name).then((hero: Hero) => {
            this.heroes.push(hero);
            this.selected = hero;
        });
        this.name = '';
    }

    setFilter(x: string) {
        this.searchTerm.next(x);
    }

    removeHero() {
        this.heroService
            .remove(this.selected)
            .then(() => {
                this.heroes = this.heroes.filter((hero: Hero) => hero.id !== this.selected.id);
                this.selected = null;
            });
    }
}
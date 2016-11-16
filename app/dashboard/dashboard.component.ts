import { Component, OnInit, trigger, animate, transition, state, style } from '@angular/core';

import { HeroService } from '../hero/hero.service';
import { Hero } from '../hero/hero';
import { Subject } from 'rxjs/subject';
import '../rxjs';

@Component({
    moduleId: module.id,
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html',
    animations: [
        trigger('rowAnim', [
            transition(':enter', [
                style({opacity: 0}),
                animate('250ms ease-in')
            ]),
            transition(':leave', [
                animate('250ms ease-out', style({opacity: 0}))
            ])
        ])
    ]
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
            .startWith('')
            .switchMap(x => this.heroService.getHeroes(x))
            .subscribe(x => this.heroes = x);
    }

    ngOnInit() {
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
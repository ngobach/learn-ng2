import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Hero } from './hero';

const HEROES = [
    new Hero(1, 'Batman'),
    new Hero(2, 'Spider man'),
    new Hero(3, 'Iron man'),
    new Hero(4, 'No man'),
    new Hero(5, 'Black widow'),
    new Hero(6, 'Thor'),
    new Hero(7, 'Loki'),
];

@Injectable()
export class HeroService {

    constructor(private http: Http) { }
    getHeroes(query?: string): Promise<Hero[]> {
        if (!query) {
            return Promise.resolve(HEROES);
        }
        return Promise.resolve(HEROES.filter(hero => hero.name.indexOf(query) >= 0));
    }

    getHero(id: number): Promise<Hero> {
        return Promise.resolve(HEROES.find(hero => hero.id === id));
    }

    update(hero: Hero): Promise<boolean> {
        let item = HEROES.find(h => h.id === hero.id);
        if (item) {
            Object.assign(item, hero);
            return Promise.resolve(true);
        } else {
            return Promise.resolve(false);
        }
    }
}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Hero } from './hero';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

@Injectable()
export class HeroService {
    private readonly heroPath = `app/heroes`;

    constructor(private http: Http) { }
    getHeroes(query?: string): Promise<Hero[]> {
        return this.http
            .get(this.heroPath)
            .map((r: Response) => r.json().data as Hero[])
            .map((heroes: Hero[]) => heroes.filter(hero => !query || (hero.name.toLowerCase().indexOf(query.toLowerCase()) >= 0)) as Hero[])
            .delay(500)
            .toPromise()
            .catch(this.handleError);
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    }

    update(hero: Hero): Promise<boolean> {
        return this.http
            .put(`${this.heroPath}/${hero.id}`, JSON.stringify(hero))
            .toPromise().then(x => true)
            .catch(this.handleError);
    }

    create(name: string): Promise<Hero>{
        return this.http
            .post(this.heroPath, JSON.stringify({name}))
            .toPromise()
            .then((r: Response) => r.json().data as Hero)
            .catch(this.handleError);
    }

    remove(hero: Hero): Promise<Boolean> {
        return this.http
            .delete(`${this.heroPath}/${hero.id}`)
            .toPromise()
            .then((r: Response) => true)
            .catch(this.handleError);
    }

    private handleError(e: Error) {
        console.log('Failed', e);
        return Promise.reject(e.message || e);
    }
}

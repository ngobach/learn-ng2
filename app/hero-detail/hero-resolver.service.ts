import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';

@Injectable()
export class HeroResolver implements Resolve<Hero> {
    constructor(private heroService: HeroService) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this.heroService.getHero(+route.params['id']).then(hero => {
            if (hero) {
                return hero;
            } else {
                return false;
            }
        });
    }
}
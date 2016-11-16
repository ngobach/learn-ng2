import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../hero/hero';


const HEROES = [
    new Hero(1, 'Batman'),
    new Hero(2, 'Spider man'),
    new Hero(3, 'Iron man'),
    new Hero(4, 'No man'),
    new Hero(5, 'Black widow'),
    new Hero(6, 'Thor'),
    new Hero(7, 'Loki'),
];

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        return {
            heroes: HEROES
        }
    }
}
"use strict";
var hero_1 = require('../hero/hero');
var HEROES = [
    new hero_1.Hero(1, 'Batman'),
    new hero_1.Hero(2, 'Spider man'),
    new hero_1.Hero(3, 'Iron man'),
    new hero_1.Hero(4, 'No man'),
    new hero_1.Hero(5, 'Black widow'),
    new hero_1.Hero(6, 'Thor'),
    new hero_1.Hero(7, 'Loki'),
];
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        return {
            heroes: HEROES
        };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map
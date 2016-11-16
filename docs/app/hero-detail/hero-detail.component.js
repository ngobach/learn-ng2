"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var hero_service_1 = require('../hero/hero.service');
var HeroDetailComponent = (function () {
    function HeroDetailComponent(heroService, route, location) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            _this.heroService.getHero(+param['id']).then(function (hero) { return _this.hero = hero; });
        });
    };
    HeroDetailComponent.prototype.toggleEdit = function (save) {
        if (save === void 0) { save = false; }
        if (!this.edit) {
            this.edit = Object.assign({}, this.hero);
            return;
        }
        if (save) {
            this.hero = this.edit;
            this.heroService.update(this.hero);
        }
        this.edit = void 0;
    };
    HeroDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    HeroDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-hero-detali',
            templateUrl: 'hero-detail.component.html',
            styleUrls: ['hero-detail.component.css'],
            animations: [
                core_1.trigger('fade', [
                    core_1.state('in', core_1.style({ height: '*' })),
                    core_1.transition(':enter', [
                        core_1.style({ height: 0 }),
                        core_1.animate('300ms ease-in')
                    ]),
                    core_1.transition(':leave', [
                        core_1.animate('300ms ease-out', core_1.style({ height: 0 }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.ActivatedRoute, common_1.Location])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map
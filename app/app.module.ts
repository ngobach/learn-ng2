import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AppRouter } from './app-router.module';

import { DashboardModule } from './dashboard/dashboard.module';
import { HeroListModule } from './hero-list/hero-list.module';
import { HeroDetailModule } from './hero-detail/hero-detail.module';
import { CoreModule } from './core/core.module';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './core/in-memory-data.service';

const myModules = [
  DashboardModule,
  HeroListModule,
  HeroDetailModule,
  AdminModule,
  AuthModule
];

@NgModule({
  imports: [
    BrowserModule,
    ...myModules,
    AppRouter,
    CoreModule,
    SharedModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 0}) // DEBUG
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

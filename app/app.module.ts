import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRouter, routedComponents } from './app-router.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AppComponent }  from './app.component';
import { HeroService } from './hero.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRouter,
    HttpModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 0})
  ],
  declarations: [
    AppComponent,
    ...routedComponents
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    HeroService
  ]
})
export class AppModule { }

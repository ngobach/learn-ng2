import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { AppRouter, routedComponents } from './app-router.module';
import { HeroService } from './hero.service';

@NgModule({
  imports:      [ BrowserModule, AppRouter, HttpModule, FormsModule ],
  declarations: [ AppComponent, ...routedComponents  ],
  bootstrap:    [ AppComponent ],
  providers: [
    HeroService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class AppModule { }

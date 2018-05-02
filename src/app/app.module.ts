import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JoinComponent } from './join/join.component';
import { GameComponent } from './game/game.component';
import { FinaleComponent } from './finale/finale.component';
import { AppRouterModule } from './/app-router.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JoinComponent,
    GameComponent,
    FinaleComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

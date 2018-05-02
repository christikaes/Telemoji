import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { JoinComponent } from './join/join.component';
import { GameComponent } from './game/game.component';
import { FinaleComponent } from './finale/finale.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'join', component: JoinComponent },
  { path: 'join/:gameId', component: JoinComponent },
  { path: 'game/:gameId', component: GameComponent },
  { path: 'game/:gameId/:playerId', component: GameComponent },
  { path: 'finale/:gameId', component: FinaleComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRouterModule { }

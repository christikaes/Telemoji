import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select } from '@angular-redux/store';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  public gameId;
  public playerId;
  public joinUrl;

  @select() players$;
  @select() timeLeft$;
  @select() state$;
  @select() currentStep$;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.gameId = this.route.snapshot.paramMap.get('gameId');
    this.playerId = this.route.snapshot.paramMap.get('playerId');
    this.joinUrl = `${window.location.host}/join/${this.gameId}`;
  }
}

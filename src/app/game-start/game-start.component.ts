import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-start',
  templateUrl: './game-start.component.html',
  styleUrls: ['./game-start.component.scss']
})
export class GameStartComponent implements OnInit {
  @Input() players;
  @Input() gameId;
  @Input() playerId;
  @Input() joinUrl;

  constructor() { }

  ngOnInit() {
  }

}

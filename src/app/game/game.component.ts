import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  public gameId;
  public playerId;
  public joinUrl;
  // TODO:
  public players = [
    {
      playerId: '1', name: 'foooooooooo', emoji: '🦄', messages: [
        'Golden Retriever',
        // '🏖🎊💃',
        // 'Tiger'
      ]
    },
    {
      playerId: '2', name: 'foo', emoji: '💩', messages: [
        'Nyan Cat',
        // '💛🐶',
        // 'Going to the beach'
      ]
    },
    {
      playerId: '3', name: 'foo', emoji: '🍌', messages: [
        'Beach party',
        '🌈🐱',
        // 'Good Boi',
      ]
    },
  ];
  public timeLeft = 20;
  public state: 'start' | 'progress' | 'end' = 'progress';
  public currentStep = 1;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.gameId = this.route.snapshot.paramMap.get('gameId');
    this.playerId = this.route.snapshot.paramMap.get('playerId');
    this.joinUrl = `${window.location.host}/join/${this.gameId}`;
  }
}

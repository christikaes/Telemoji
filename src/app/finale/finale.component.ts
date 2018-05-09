import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select } from '@angular-redux/store';

@Component({
  selector: 'app-finale',
  templateUrl: './finale.component.html',
  styleUrls: ['./finale.component.scss']
})
export class FinaleComponent implements OnInit {
  public gameId;

  @select() players$;

  public messageChains = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.gameId = this.route.snapshot.paramMap.get('gameId');

    this.players$.subscribe(players => {
      // Get a message chain for this player's messages
      const sortedPlayers = players.sort((a, b) => a.playerId.localeCompare(b.playerId));
      sortedPlayers.forEach((startingPlayer, i) => {
        const messageChain = [];
        sortedPlayers.forEach((player, j) => {
          // For each starting player's game find the messages from other players:
          const step = (j - i) >= 0 ? (j - i) : (sortedPlayers.length + (j - i));
          const playerMessage = player.messages[step];
          messageChain[step] = { emoji: player.emoji, message: player.messages[step], step: step };
        });
        this.messageChains[i] = messageChain;
      });
    });

  }
}

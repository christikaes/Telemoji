import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-game-progress',
  templateUrl: './game-progress.component.html',
  styleUrls: ['./game-progress.component.scss']
})
export class GameProgressComponent implements OnInit, OnChanges {
  @Input() players;
  @Input() gameId;
  @Input() playerId;
  @Input() timeLeft;
  @Input() currentStep;
  public previousMessage;
  public playersProgress;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['players']) {
      const players = changes['players'].currentValue;
      const sortedPlayers = players.sort((a, b) => a.playerId - b.playerId);

      // Get the current player
      const currentPlayerIndex = sortedPlayers.findIndex(player => player.playerId === this.playerId);
      const currentPlayer = sortedPlayers[currentPlayerIndex];

      // Get the previous player
      const previousPlayerIndex = currentPlayerIndex > 0 ? (currentPlayerIndex - 1) : (sortedPlayers.length - 1);
      const previousPlayer = sortedPlayers[previousPlayerIndex];

      // Get the previous message
      if (previousPlayer.messages.length > this.currentStep - 1) {
        this.previousMessage = {
          'message': previousPlayer.messages[this.currentStep - 1],
          'emoji': previousPlayer.emoji
        };
      } else {
        this.previousMessage = null; // There is no previous message set
      }

      // Get the progress state for each player
      this.playersProgress = sortedPlayers.map(player => ({
        emoji: player.emoji,
        progress: player.messages.length > this.currentStep ? 100 : this.timeLeft
      })).filter(player => currentPlayer && player.playerId !== currentPlayer.playerId);
    }
  }
}

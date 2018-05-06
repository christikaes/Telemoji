import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-message',
  templateUrl: './game-message.component.html',
  styleUrls: ['./game-message.component.scss']
})
export class GameMessageComponent implements OnInit {
  @Input() avatar;
  @Input() message;
  @Input() direction: 'from' | 'to';

  constructor() { }

  ngOnInit() {
  }

}

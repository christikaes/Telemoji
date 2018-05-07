import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {
  public gameId;
  public name;
  public emoji;
  public spectator;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.gameId = this.route.snapshot.paramMap.get('gameId');
  }

  join() {
    // TODO create a new player and get the playerId
    const playerId = '1';

    this.router.navigateByUrl(`/game/${this.gameId}/${playerId}`);
  }
}

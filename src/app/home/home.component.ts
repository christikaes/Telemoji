import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  newGame() {
    // TODO: Create a new game and get the gameId
    console.log('New Game');
    const gameId = 'foo';

    this.router.navigateByUrl(`/join/${gameId}`);
  }

}

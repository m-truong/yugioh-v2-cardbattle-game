import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

    // note: rxjs is used for async- data operations from a backend server
  // it's used inside an mfe to work on data
  // utilize operators to perform some sort of filtering of the emitted observable
  // must store the subscription inside a private variable 
  // then use .next to manually listen and respond to async events or emitted data 

  // use @output when listening between events parent/child hierarchy of components
  
  // component fields
  title = 'yugioh-v2-cardbattle-game';
  private activatedSub: Subscription;

  // internal state
  isUserActivated = false;

  // lifecycle hooks
  ngOnInit(): void {
    this.activatedSub = this.userService.activa
  }

}

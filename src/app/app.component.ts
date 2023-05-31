import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CardPlayerService } from 'src/services/card-player.service';

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
  private activatedCardSub: Subscription = new Subscription;

  // internal state
  isCardPlayerActivated = false;

  // add the CardPlayerService to the constructor
  constructor(private cardPlayerService: CardPlayerService) {}

  // lifecycle hooks
  ngOnInit(): void {
    // 1) store returned subscription onInit
    // 2) add subscribe event to the cardPlayerService's Subject<>
    this.activatedCardSub = this.cardPlayerService.activatedCardEmitter.subscribe( (data: any) => {
      this.isCardPlayerActivated = data;
    })
  }

  // always unsubscribe from any active Subscriptions at the end of Angular lifecycle
  ngOnDestroy(): void {
    this.activatedCardSub.unsubscribe();
  }

}

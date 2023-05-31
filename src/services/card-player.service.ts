import { EventEmitter, Injectable } from "@angular/core"; 
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class CardPlayerService {

  // use EventEmitters as well
  // activatedCardEmitter = new EventEmitter<boolean>();

  // create an rxjs Subject to use as PART of the service
  activatedCardEmitter = new Subject<boolean>();
}
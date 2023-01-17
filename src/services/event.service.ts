import { Injectable } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { GameObjectsService } from './game-objects.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  subscription : Subscription;

  bearPoints = 0;

  constructor(public gameObjectService : GameObjectsService) {
    this.subscription = interval(1000).subscribe(val => {
      this.doDailyChecks()
    })
  }

  doDailyChecks(){
    this.gameObjectService.produceResources();
    this.checkNewBears();
    this.checkDailyEvents();
  }

  checkNewBears(){
    if(this.gameObjectService.bears.amount < this.gameObjectService.bears.maximum &&
      this.bearPoints >= (this.gameObjectService.bears.amount * 5 + 10)){

      this.gameObjectService.addBear();
      this.bearPoints = 0;
    }
    else if(this.gameObjectService.bears.amount < this.gameObjectService.bears.maximum){
      this.bearPoints++;
    }
  }

  checkDailyEvents(){
    let random = Math.random() * 100;
    
    // TODO
  }

  stop() {
    this.subscription && this.subscription.unsubscribe();
  }
}

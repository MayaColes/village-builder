import { Injectable } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Resource } from 'src/game-objects/resource/resource';
import { GameObjectsService } from './game-objects.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  subscription : Subscription;

  bearPoints = 0;

  deathPoints = 0;

  constructor(public gameObjectService : GameObjectsService) {
    this.subscription = interval(1000).subscribe(val => {
      this.doDailyChecks()
    })
  }

  doDailyChecks(){
    this.gameObjectService.produceResources();
    this.checkBearsStatus();
    this.checkDailyEvents();
  }

  checkBearsStatus(){
    // Add bears
    if(this.gameObjectService.bears.amount < this.gameObjectService.bears.maximum &&
      this.bearPoints >= (this.gameObjectService.bears.amount * 5 + 10)){

      this.gameObjectService.addBear();
      this.bearPoints = 0;
    }
    else if(this.gameObjectService.bears.amount < this.gameObjectService.bears.maximum){
      this.bearPoints++;
    }

    // Kill bears (murderer!))
    if(this.gameObjectService.bears.amount && 
      !(this.gameObjectService.berries.amount || this.gameObjectService.water.amount)){

      this.deathPoints++;
    }

    if(this.deathPoints >= 15){
      this.gameObjectService.removeBear();
      this.deathPoints = 0;
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

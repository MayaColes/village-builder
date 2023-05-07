import { Injectable } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { GameObjectsService } from './game-objects.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  readonly tickLength = 250;

  readonly ticksPerSecond = (1000 / this.tickLength)

  readonly ticksPerDay = this.ticksPerSecond * 2;

  readonly saveInterval = this.ticksPerSecond * 15;

  subscription : Subscription;

  events : {time: number, text: string}[] = [];

  date : number

  bearPoints = 0;

  deathPoints = 0;

  constructor(public gameObjectService : GameObjectsService) {
    this.subscription = interval(this.tickLength).subscribe(val => {
      if (val % this.ticksPerDay === (this.ticksPerDay - 1)){
        this.date++;
      }
      if(val % this.saveInterval === (this.saveInterval - 1)){
        this.gameObjectService.saveObjects();
      }
      this.doDailyChecks()
    })
  }

  doDailyChecks(){
    this.gameObjectService.produceResources(this.ticksPerSecond);
    this.checkBearsStatus();
    this.checkDailyEvents();
  }

  checkBearsStatus(){
    if(this.gameObjectService.bears.amount && 
      !(this.gameObjectService.berries.amount && this.gameObjectService.water.amount)){

      this.deathPoints++;
    }
    else if(this.gameObjectService.bears.amount < this.gameObjectService.bears.maximum ){
      this.bearPoints++;
    }

    // Kill bears (murderer!))
    if(this.deathPoints >= 15){
      this.gameObjectService.removeBear();
      this.deathPoints = 0;
      this.events.unshift({ time: this.date, text: "The village has lost a bear..." })
    }

    // Add bears
    if(this.gameObjectService.bears.amount < this.gameObjectService.bears.maximum &&
      this.bearPoints >= (this.gameObjectService.bears.amount * 5 + 10)){

      this.gameObjectService.addBear();
      this.bearPoints = 0;
      this.events.unshift({ time: this.date, text: "A new bear has joined the village" })
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

import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { EventService } from 'src/services/event.service';
import { GameObjectsService } from 'src/services/game-objects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Polar-Bear-Game-V2';

  events : {time: number, text: string}[] = [];

  subscription : Subscription;

  constructor (public gameObjectService : GameObjectsService, public eventService : EventService) {}

  ngOnInit(){
    this.gameObjectService.initFromLocalStorage();
    this.gameObjectService.calculateInitialValues();
  }

  gather(){
    let random = Math.random() * 100;
    let affectedResourceName = '';

    if(random < 70){
      affectedResourceName = 'Berries';
    }
    else if(random < 90){
      affectedResourceName = 'Ice';
    }
    else{
      affectedResourceName = 'Wood';
    }

    let resource = this.gameObjectService.resources.find(obj => obj.name === affectedResourceName)

    if(resource){
      resource.changeAmount(1);
    }
  }

  ngOnDestroy() {
    this.eventService.stop();
  }
}

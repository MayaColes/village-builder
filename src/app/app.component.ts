import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
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

  constructor (public gameObjectService : GameObjectsService) {}

  ngOnInit(){
    this.gameObjectService.initFromLocalStorage();
    this.gameObjectService.calculateInitialValues();
    this.subscription = interval(1000).subscribe(val => {
      this.doOnTick();
    })
  }

  doOnTick(){
    this.gameObjectService.produceResources();
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }
}

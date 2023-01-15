import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Building } from 'src/game-objects/building/building';
import { CraftableResource } from 'src/game-objects/craftable-resource/craftable-resource';
import { Resource } from 'src/game-objects/resource/resource';
import { StorageService } from 'src/services/storage.service';
import { buildings, resources, craftableResources, jobs, sciences, upgrades, magic, spells, civilizations } from './game-object-data'
import { InitializationHelper } from './initialization-helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Polar-Bear-Game-V2';

  events : {time: number, text: string}[] = [];

  buildings : Building[] = [];

  resources : Resource[] = [];

  craftableResources : CraftableResource[] = [];

  jobs = jobs;

  sciences = sciences;

  upgrades = upgrades;

  magic = magic;

  spells = spells;

  civilizations = civilizations;

  subscription : Subscription;

  constructor (private storageService : StorageService) {}

  ngOnInit(){
    this.initFromLocalStorage();
    this.calculateInitialValues();
    this.subscription = interval(1000).subscribe(val => {
      this.doOnTick();
    })
  }

  initFromLocalStorage(){
    buildings.map((building) => {
      let gameObjectInfo = localStorage.getItem(building.name);

      if(gameObjectInfo){
        let gameObjectValues = JSON.parse(gameObjectInfo);
        this.buildings.push(new Building(building, gameObjectValues.numberBuilt, gameObjectValues.numberEnabled, gameObjectValues.isVisible));
      }
      else{
        this.buildings.push(new Building(building, 0, 0, false));
      }
    })

    resources.forEach((resource) => {
      let gameObjectInfo = localStorage.getItem(resource.name);

      if(gameObjectInfo){
        let gameObjectValues = JSON.parse(gameObjectInfo);
        this.resources.push(new Resource(resource, gameObjectValues.amount, gameObjectValues.isVisible));
      }
      else {
        this.resources.push(new Resource(resource, 0, false));
      }
    })

    craftableResources.forEach((craftableResource) => {
      let gameObjectInfo = localStorage.getItem(craftableResource.name);

      if(gameObjectInfo){
        let gameObjectValues = JSON.parse(gameObjectInfo);
        this.craftableResources.push(new CraftableResource(craftableResource, gameObjectValues.amount, gameObjectValues.isVisible));
      }
      else {
        this.craftableResources.push(new CraftableResource(craftableResource, 0, false));
      }
    })

    this.jobs.forEach((job) => {
      let didInit = this.storageService.initObjFromLocalStorage(job, job.name);

      if(!didInit) {
        job.numberWorking = 0;
        job.isVisible = false;
      }
    })

    this.sciences.forEach((science) => {
      let didInit = this.storageService.initObjFromLocalStorage(science, science.name);

      if(!didInit){
        science.isResearched = false;
        science.isVisible = false;
      }
    })

    this.upgrades.forEach((upgrade) => {
      let didInit = this.storageService.initObjFromLocalStorage(upgrade, upgrade.name);

      if(!didInit){
        upgrade.isResearched = false;
        upgrade.isVisible = false;
      }
    })
  }

  calculateInitialValues() {
    this.upgrades.forEach((upgrade) => {
    //  InitializationHelper.updateUpgradeEffects(upgrade, this.buildings, this.jobs)
    })

    //InitializationHelper.updateEffectBonuses(this.buildings, this.jobs);

    //InitializationHelper.calculateResourceProduction(this.resources, this.buildings, this.jobs);
  };

  doOnTick(){
    this.resources.forEach((resource) => {
      resource.addCurrentProduction();
    })
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }
}

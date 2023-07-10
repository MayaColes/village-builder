import { Injectable } from '@angular/core';
import { Effect } from 'src/app/data-interfaces';
import { resources, buildings, craftableResources, jobs, sciences, upgrades, magic, spells, civilizations } from 'src/app/game-object-data';
import { InitializationHelper } from 'src/services/initialization-helper';
import { Building } from 'src/game-objects/building/building';
import { CraftableResource } from 'src/game-objects/craftable-resource/craftable-resource';
import { Resource } from 'src/game-objects/resource/resource';
import { StorageService } from './storage.service';
import { Job } from 'src/game-objects/job/job';
import { Researchable } from 'src/game-objects/researchable/researchable';
import { gameEventBus } from 'src/utils/game-event-bus';

@Injectable({
  providedIn: 'root'
})
export class GameObjectsService {

  buildings : Building[] = [];

  resources : Resource[] = [];

  craftableResources : CraftableResource[] = [];

  jobs : Job[] = [];

  sciences : Researchable[] = [];

  upgrades = upgrades;

  magic : Researchable[] = [];

  spells = spells;

  civilizations = civilizations;

  bears : Resource;

  berries: Resource;

  water: Resource;

  constructor (private storageService : StorageService) {
    gameEventBus.on(
      `effects.add`,
      this.addEffects.bind(this)
    );
  }

  initFromLocalStorage(){
    let freeBears = 0;

    resources.forEach((resource) => {
      let gameObjectInfo = localStorage.getItem(resource.name);
      let newResource = undefined;

      if(gameObjectInfo){
        let gameObjectValues = JSON.parse(gameObjectInfo);
        newResource = new Resource(resource, gameObjectValues.amount, gameObjectValues.isVisible)
      }
      else {
        newResource = new Resource(resource, 0, false);
      }

      if(resource.name === 'Bears'){
        freeBears = newResource.amount;
        this.bears = newResource
      }
      else if(resource.name === 'Berries') {
        this.berries = newResource;
      }
      else if(resource.name === 'Water') {
        this.water = newResource;
      }
      this.resources.push(newResource);
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

    this.craftableResources.forEach((craftableResource) => craftableResource.initializeUsedResources(this.resources, this.craftableResources));

    sciences.forEach((science) => {
      let gameObjectInfo = localStorage.getItem(science.name);
      let newScience = null;

      if(gameObjectInfo){
        let gameObjectValues = JSON.parse(gameObjectInfo);
        newScience = new Researchable(science, gameObjectValues.isResearched, gameObjectValues.isVisible, this.resources, this.craftableResources);
      }
      else{
        newScience = new Researchable(science, false, false, this.resources, this.craftableResources);
      }

      this.sciences.push(newScience)
    })

    buildings.forEach((building) => {
      let gameObjectInfo = localStorage.getItem(building.name);
      let newBuilding = null;

      if(gameObjectInfo){
        let gameObjectValues = JSON.parse(gameObjectInfo);
        newBuilding = new Building(building, gameObjectValues.numberBuilt, 
                                  gameObjectValues.numberEnabled, gameObjectValues.isVisible,
                                  this.resources, this.craftableResources);
      }
      else{
        newBuilding = new Building(building, 0, 0, false, this.resources, this.craftableResources);
      }

      this.buildings.push(newBuilding)
    })

    jobs.forEach((job) => {
      let gameObjectInfo = localStorage.getItem(job.name);
      let newJob = null;

      if(gameObjectInfo){
        let gameObjectValues = JSON.parse(gameObjectInfo);
        newJob = new Job(job, gameObjectValues.numberWorking, gameObjectValues.isVisible);
        freeBears -= gameObjectValues.numberWorking;
      }
      else {
        newJob = new Job(job, 0, false);
      }
      
      this.jobs.push(newJob)
    })

    Job.freeBears = freeBears;

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
      InitializationHelper.updateUpgradeEffects(upgrade, this.buildings, this.jobs)
    })

    InitializationHelper.updateEffectBonuses(this.buildings, this.jobs);

    InitializationHelper.calculateResourceProduction(this.resources, this.buildings, this.jobs);
console.log(this.bears.amount)
    this.addBear(this.bears.amount)
  };

  produceResources(ticksPerSecond : number){
    this.resources.forEach((resource) => {
      resource.addCurrentProduction(ticksPerSecond);
    })
  }

  addBear(numBears = 1) {
    this.bears.changeAmount(numBears);
    this.berries.changeConsumption(-4 * numBears);
    this.water.changeConsumption(-0.5 * numBears);
    Job.freeBears += numBears;
  }

  removeBear(){
    if(!this.bears.amount) return;

    Job.freeBears--;

    if(Job.freeBears == 0){
      for(let job of this.jobs){
        if(job.numberWorking > 0){
          job.changeWorking(-1);
          break;
        }
      }
    }
    this.bears.changeAmount(-1);
    this.berries.changeConsumption(4);
    this.water.changeConsumption(0.5);
  }

  addEffects(event : {effects: Effect[], amount: number}){
    const {effects, amount : timesApplied} = event;
    for(let effect of effects){
      if(effect.objectType === 'resource'){
        let affectedGameObject = this.resources.find(obj => {
          return obj.name === effect.object
        })

        if(affectedGameObject && effect.type === 'production'){
          if(effect.amount > 0) {
            affectedGameObject.changeProduction(effect.amount * timesApplied);
          }
          else {
            affectedGameObject.changeConsumption(effect.amount * timesApplied);
          }
        }
        else if(affectedGameObject && effect.type === 'maximum'){
          affectedGameObject.maximum += effect.amount * timesApplied;
        }
      }
      else{
        let affectedGameObject = effect.objectType === 'building' ? 
            this.buildings.find(obj => {
              return obj.name === effect.object
            }) :
            this.jobs.find(obj => {
              return obj.name === effect.object
            })
      
        if(!affectedGameObject) continue;

        let affectedGameObjectEffect = affectedGameObject.effects.find((eff : Effect) => {
          return eff.object === effect.resource;
        })

        if(!affectedGameObjectEffect){
          affectedGameObject.effects.push({
              type: "production",
              amount: effect.type === 'bonus' ? 0 : effect.amount * timesApplied,
              objectType: 'resource',
              object: effect.resource || '',
              bonus: effect.type === 'bonus' ? effect.amount * timesApplied : 0
          })
        }
        else{
          if(effect.type === 'production'){
            affectedGameObjectEffect.amount += effect.amount * timesApplied;
          }
          else if(effect.type === 'bonus'){
            if(!affectedGameObjectEffect.bonus){
                affectedGameObjectEffect['bonus'] = 0;
            }
            affectedGameObjectEffect.amount += effect.amount * timesApplied;
          }
        }
      }
    }
  }

  saveObjects(){
    this.resources.forEach((resource) => {
      this.storageService.saveObjToLocalStorage(resource, resource.name);
    })

    this.craftableResources.forEach((craftableResource) => {
      this.storageService.saveObjToLocalStorage(craftableResource, craftableResource.name);
    })

    this.sciences.forEach((science) => {
      this.storageService.saveObjToLocalStorage(science, science.name);
    })

    this.buildings.forEach((building) => {
      this.storageService.saveObjToLocalStorage(building, building.name);
    })

    this.jobs.forEach((job) => {
      this.storageService.saveObjToLocalStorage(job, job.name);
    })

    /*this.upgrades.forEach((upgrade) => {
      this.storageService.saveObjToLocalStorage(upgrade, upgrade.name);
    })*/
  }
}

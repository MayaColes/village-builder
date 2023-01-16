import { Injectable } from '@angular/core';
import { Effect } from 'src/app/data-interfaces';
import { resources, buildings, craftableResources, jobs, sciences, upgrades, magic, spells, civilizations } from 'src/app/game-object-data';
import { InitializationHelper } from 'src/services/initialization-helper';
import { Building } from 'src/game-objects/building/building';
import { CraftableResource } from 'src/game-objects/craftable-resource/craftable-resource';
import { Resource } from 'src/game-objects/resource/resource';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class GameObjectsService {

  buildings : Building[] = [];

  resources : Resource[] = [];

  craftableResources : CraftableResource[] = [];

  jobs = jobs;

  sciences = sciences;

  upgrades = upgrades;

  magic = magic;

  spells = spells;

  civilizations = civilizations;

  constructor (private storageService : StorageService) {}

  initFromLocalStorage(){
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

    buildings.forEach((building) => {
      let gameObjectInfo = localStorage.getItem(building.name);
      let newBuilding = null;

      if(gameObjectInfo){
        let gameObjectValues = JSON.parse(gameObjectInfo);
        newBuilding =new Building(building, gameObjectValues.numberBuilt, 
                                  gameObjectValues.numberEnabled, gameObjectValues.isVisible,
                                  this.resources, this.craftableResources);
      }
      else{
        newBuilding = new Building(building, 0, 0, false, this.resources, this.craftableResources);
      }
      
      newBuilding.subject.subscribe(({
        next: (effects) => this.addEffects(effects)
      }))

      this.buildings.push(newBuilding)
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
      InitializationHelper.updateUpgradeEffects(upgrade, this.buildings, this.jobs)
    })

    InitializationHelper.updateEffectBonuses(this.buildings, this.jobs);

    InitializationHelper.calculateResourceProduction(this.resources, this.buildings, this.jobs);
  };

  produceResources(){
    this.resources.forEach((resource) => {
      resource.addCurrentProduction();
    })
  }

  addEffects(effects : Effect[]){
    for(let effect of effects){
      if(effect.objectType === 'resource'){
        let affectedGameObject = this.resources.find(obj => {
          return obj.name === effect.object
        })

        if(affectedGameObject && effect.type === 'production'){
          affectedGameObject.currentProduction += effect.amount;
        }
        else if(affectedGameObject && effect.type === 'maximum'){
          affectedGameObject.maximum += effect.amount;
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
              amount: effect.type === 'bonus' ? 0 : effect.amount,
              objectType: 'resource',
              object: effect.resource || '',
              bonus: effect.type === 'bonus' ? effect.amount : 0
          })
        }
        else{
          if(effect.type === 'production'){
            affectedGameObjectEffect.amount += effect.amount;
          }
          else if(effect.type === 'bonus'){
            if(!affectedGameObjectEffect.bonus){
                affectedGameObjectEffect['bonus'] = 0;
            }
            affectedGameObjectEffect.amount += effect.amount;
          }
        }
      }
    }
  }
}
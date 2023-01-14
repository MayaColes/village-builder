import { Component, OnInit } from '@angular/core';
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

  buildings = buildings

  resources = resources;

  craftableResources = craftableResources;

  jobs = jobs;

  sciences = sciences;

  upgrades = upgrades;

  magic = magic;

  spells = spells;

  civilizations = civilizations;

  ngOnInit(){
    this.initFromLocalStorage();
    this.calculateInitialValues();
  }

  initFromLocalStorage(){
    this.buildings.forEach((building) => {
      let buildingInfo = localStorage.getItem(building.name);

      if(!buildingInfo){
        building.numberBuilt = 0;
        building.numberEnabled = 0;
        building.isVisible = false;
      }
      else{
        let buildingObject = JSON.parse(buildingInfo);

        building.numberBuilt = buildingObject.numberBuilt;
        building.numberEnabled = buildingObject.numberEnabled;
        building.isVisible = buildingObject.isVisible;
      }
    })
    this.resources.forEach((resource) => {
      let resourceInfo = localStorage.getItem(resource.name);

      resource.currentProduction = 0;
      resource.maximum = resource.defaultMaximum;
      if(!resourceInfo){
        resource.amount = 0;
        resource.isVisible = false;
      }
      else{
        let resourceObject = JSON.parse(resourceInfo);
        resource.amount = resourceObject.amount;
        resource.isVisible = resourceObject.isVisible;
      }
    })

    this.craftableResources.forEach((craftableResource) => {
      let craftableResourceInfo = localStorage.getItem(craftableResource.name);

      if(!craftableResourceInfo){
        craftableResource.amount = 0;
        craftableResource.isVisible = false;
      }
      else{
        let craftableResourceObject = JSON.parse(craftableResourceInfo);
        craftableResource.amount = craftableResourceObject.amount;
        craftableResource.isVisible = craftableResourceObject.isVisible;
      }
    })

    this.jobs.forEach((job) => {
      let jobInfo = localStorage.getItem(job.name);

      if(!jobInfo) {
        job.numberWorking = 0;
        job.isVisible = false;
      }
      else{
        let jobObject = JSON.parse(jobInfo);
        job.numberWorking = jobObject.numberWorking;
        job.isVisible = jobObject.isVisible;
      }
    })

    this.sciences.forEach((science) => {
      let scienceInfo = localStorage.getItem(science.name);

      if(!scienceInfo){
        science.isResearched = false;
        science.isVisible = false;
      }
      else{
        let scienceObject = JSON.parse(scienceInfo);
        science.isResearched = scienceObject.isResearched;
        science.isVisible = scienceObject.isVisible;
      }
    })

    this.upgrades.forEach((upgrade) => {
      let upgradeInfo = localStorage.getItem(upgrade.name);

      if(!upgradeInfo){
        upgrade.isResearched = false;
        upgrade.isVisible = false;
      }
      else{
        let upgradeObject = JSON.parse(upgradeInfo);
        upgrade.isResearched = upgradeObject.isResearched;
        upgrade.isVisible = upgradeObject.isVisible;
      }
    })
  }

  calculateInitialValues() {
    this.upgrades.forEach((upgrade) => {
      InitializationHelper.updateUpgradeEffects(upgrade, this.buildings, this.jobs)
    })

    InitializationHelper.updateEffectBonuses(this.buildings, this.jobs);

    InitializationHelper.calculateResourceProduction(this.resources, this.buildings, this.jobs);
    console.log(this.resources)
  };
}

import { Component, Input } from '@angular/core';
import { Building, CraftableResource, Resource } from 'src/app/data-interfaces';

@Component({
  selector: 'building-button',
  templateUrl: './building-button.component.html',
  styleUrls: ['./building-button.component.css']
})
export class BuildingButtonComponent {
  @Input() building : Building;

  @Input() allResources : (Resource | CraftableResource)[]

  showTooltip = false;

  buildBuilding(){
if(this.building.numberBuilt){
  this.building.numberBuilt++;
}
    let canBuild = true;
    let usedResources : (CraftableResource | Resource)[] = [];
    this.building.resourcesRequired.forEach((required) => {
      let resource;
      resource = this.allResources.find((obj) => {
        return obj.name === required.name;
      })

      if(resource?.amount !== undefined && (resource.amount < required.price)){
        canBuild = false;
      }
      if(resource){
        usedResources.push(resource)
      }
    })

    if(canBuild){
      this.building.resourcesRequired.forEach((required, index) => {
        let resource = usedResources[index];
        if(resource.amount){
          resource.amount -= required.price;
        }
      })

      if(this.building.numberBuilt){
        this.building.numberBuilt++;
      }
    }
  }
}

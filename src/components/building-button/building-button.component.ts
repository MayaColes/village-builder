import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { Building } from 'src/game-objects/building/building';
import { CraftableResource } from 'src/game-objects/craftable-resource/craftable-resource';
import { Resource } from 'src/game-objects/resource/resource';

@Component({
  selector: 'building-button',
  templateUrl: './building-button.component.html',
  styleUrls: ['./building-button.component.css']
})
export class BuildingButtonComponent {
  @Input() building : Building;

  @Input() allResources : (Resource | CraftableResource)[]

  showTooltip = false;

  buildingSubject : Subject<Building>;

  updateFlag = false;

  constructor(private ref: ChangeDetectorRef) {}

  /*buildBuilding(){
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

      if(this.building.numberBuilt !== undefined){
        this.building.numberBuilt++;
      }
      this.buildingSubject.next(this.building)
    }
  }*/
}

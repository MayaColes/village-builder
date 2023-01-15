import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CraftableResource, Resource } from 'src/app/data-interfaces';
import { Building } from 'src/game-objects/building/building';

@Component({
  selector: 'building-button',
  templateUrl: './building-button.component.html',
  styleUrls: ['./building-button.component.css']
})
export class BuildingButtonComponent implements OnInit{
  @Input() building : Building;

  @Input() allResources : (Resource | CraftableResource)[]

  showTooltip = false;

  buildingSubject : Subject<Building>;

  updateFlag = false;

  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit(){

    this.building.subject.subscribe({
      next: () => {this.ref.markForCheck()}
    })
  }

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

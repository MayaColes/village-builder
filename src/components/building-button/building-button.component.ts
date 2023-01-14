import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Building, CraftableResource, Resource } from 'src/app/data-interfaces';

@Component({
  selector: 'building-button',
  templateUrl: './building-button.component.html',
  styleUrls: ['./building-button.component.css']
})
export class BuildingButtonComponent {
  @Input() building : Building;

  @Input() allResources : (Resource | CraftableResource)[]

  @Output() addBuilding = new EventEmitter<void>();

  showTooltip = false;

  doAddBuilding() {
    this.addBuilding.emit();
  }
}

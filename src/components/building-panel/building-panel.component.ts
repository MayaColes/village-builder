import { Component, Input } from '@angular/core';
import { CraftableResource, Resource } from 'src/app/data-interfaces';
import { Building } from 'src/game-objects/building/building';

@Component({
  selector: 'building-panel',
  templateUrl: './building-panel.component.html',
  styleUrls: ['./building-panel.component.css']
})
export class BuildingPanelComponent {
  @Input() buildings : Building[];

  @Input() resources : Resource[];

  @Input() craftableResources : CraftableResource[];

  getAllResources(){
    return [...this.resources, ...this.craftableResources]
  }
}

import { Component, Input } from '@angular/core';
import { Building, CraftableResource, Resource } from 'src/app/data-interfaces';

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

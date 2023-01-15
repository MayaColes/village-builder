import { Component, Input } from '@angular/core';
import { Building } from 'src/game-objects/building/building';
import { CraftableResource } from 'src/game-objects/craftable-resource/craftable-resource';
import { Resource } from 'src/game-objects/resource/resource';

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

import { Component, Input } from '@angular/core';
import { CraftableResource } from 'src/game-objects/craftable-resource/craftable-resource';
import { Resource } from 'src/game-objects/resource/resource';
@Component({
  selector: 'resource-panel',
  templateUrl: './resource-panel.component.html',
  styleUrls: ['./resource-panel.component.css']
})
export class ResourcePanelComponent {
  @Input() resources : Resource[];

  @Input() craftableResources : CraftableResource[];
}

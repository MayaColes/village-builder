import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Building } from 'src/game-objects/building/building';
import { CraftableResource } from 'src/game-objects/craftable-resource/craftable-resource';
import { Job } from 'src/game-objects/job/job';
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

  @Input() jobs : Job[];

  @Output() gather = new EventEmitter<void>();

  currentTab = 0;

  showGatherTooltip = false;

  getAllResources(){
    return [...this.resources, ...this.craftableResources]
  }

  doGather(){
    this.gather.emit();
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Building } from 'src/game-objects/building/building';
import { Job } from 'src/game-objects/job/job';
import { Researchable } from 'src/game-objects/researchable/researchable';

@Component({
  selector: 'building-panel',
  templateUrl: './building-panel.component.html',
  styleUrls: ['./building-panel.component.css']
})
export class BuildingPanelComponent {
  @Input() buildings : Building[];

  @Input() jobs : Job[];

  @Input() sciences : Researchable[];

  @Output() gather = new EventEmitter<void>();

  currentTab = 0;

  showGatherTooltip = false;

  doGather(){
    this.gather.emit();
  }
}

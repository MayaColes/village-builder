import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Building } from 'src/game-objects/building/building';
import { Job } from 'src/game-objects/job/job';
import { Researchable } from 'src/game-objects/researchable/researchable';
import { gameEventBus } from 'src/utils/game-event-bus';

@Component({
  selector: 'building-panel',
  templateUrl: './building-panel.component.html',
  styleUrls: ['./building-panel.component.css']
})
export class BuildingPanelComponent implements OnInit {
  @Input() buildings : Building[];

  @Input() jobs : Job[];

  @Input() sciences : Researchable[];

  @Output() gather = new EventEmitter<void>();

  currentTab = 0;

  showGatherTooltip = false;

  visibleBuildings : Building[] = [];

  ngOnInit(){
    this.filterVisibleBuildings()
    
    gameEventBus.on(
      `building.*.visible`,
      this.filterVisibleBuildings
    );
  }

  filterVisibleBuildings(){
    this.visibleBuildings = this.buildings.filter(building => { return building.isVisible})
  }

  doGather(){
    this.gather.emit();
  }
}

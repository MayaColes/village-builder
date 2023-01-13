import { Component, Input } from '@angular/core';
import { Building } from 'src/app/data-interfaces';

@Component({
  selector: 'building-panel',
  templateUrl: './building-panel.component.html',
  styleUrls: ['./building-panel.component.css']
})
export class BuildingPanelComponent {
  @Input() buildings : Building[];
}

import { Component, Input } from '@angular/core';
import { Building } from 'src/game-objects/building/building';

@Component({
  selector: 'building-button',
  templateUrl: './building-button.component.html',
  styleUrls: ['./building-button.component.css']
})
export class BuildingButtonComponent {
  @Input() building : Building;

  showTooltip = false;
}

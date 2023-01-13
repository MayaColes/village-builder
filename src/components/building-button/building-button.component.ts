import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Building } from 'src/app/data-interfaces';

@Component({
  selector: 'building-button',
  templateUrl: './building-button.component.html',
  styleUrls: ['./building-button.component.css']
})
export class BuildingButtonComponent {
  @Input() building : Building;

  @Output() getBuilding = new EventEmitter<void>();

  doGetBuilding() {
    this.getBuilding.emit();
  }
}

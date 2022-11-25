import { Component, Input } from '@angular/core';

@Component({
  selector: 'building-button',
  templateUrl: './building-button.component.html',
  styleUrls: ['./building-button.component.css']
})
export class BuildingButtonComponent {
  @Input() name = '';
  @Input() numberBuilt : number = 0;
}

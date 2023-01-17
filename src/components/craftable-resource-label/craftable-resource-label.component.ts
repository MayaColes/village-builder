import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CraftableResource } from 'src/game-objects/craftable-resource/craftable-resource';

@Component({
  selector: 'craftable-resource-label',
  templateUrl: './craftable-resource-label.component.html',
  styleUrls: ['./craftable-resource-label.component.css']
})
export class CraftableResourceLabelComponent {
  @Input() craftableResource : CraftableResource;
}

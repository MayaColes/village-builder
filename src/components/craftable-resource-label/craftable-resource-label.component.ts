import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CraftableResource } from 'src/app/data-interfaces';

@Component({
  selector: 'craftable-resource-label',
  templateUrl: './craftable-resource-label.component.html',
  styleUrls: ['./craftable-resource-label.component.css']
})
export class CraftableResourceLabelComponent {
  @Input() craftableResource : CraftableResource;
  
  @Output() craftResource = new EventEmitter<number>();

  doCraftResource(crafts : number){
    this.craftResource.emit(crafts);
  }
}
import { Component, Input } from '@angular/core';
import { CraftableResource } from 'src/game-objects/craftable-resource/craftable-resource';
import { Resource } from 'src/game-objects/resource/resource';

@Component({
  selector: 'tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent {
  @Input() type : string = 'none';

  @Input() gameObject : any;

  @Input() resources : (Resource | CraftableResource)[];

  findResource(name : string){
    return this.resources.find(obj => {
      return obj.name === name;
    }) || this.resources[0];
  }
}

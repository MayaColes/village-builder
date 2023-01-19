import { Component, Input } from '@angular/core';
import { CraftableResource } from 'src/game-objects/craftable-resource/craftable-resource';
import { Resource } from 'src/game-objects/resource/resource';
import { FormatService } from 'src/services/format.service';

@Component({
  selector: 'tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent {
  @Input() type : string = 'none';

  @Input() gameObject : any;

  constructor(public formatService : FormatService) {}
}

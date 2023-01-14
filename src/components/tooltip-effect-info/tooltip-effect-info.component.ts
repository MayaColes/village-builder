import { Component, Input } from '@angular/core';
import { Effect } from 'src/app/data-interfaces';

@Component({
  selector: 'tooltip-effect-info',
  templateUrl: './tooltip-effect-info.component.html',
  styleUrls: ['./tooltip-effect-info.component.css']
})
export class TooltipEffectInfoComponent {
  @Input() effect : Effect;
}

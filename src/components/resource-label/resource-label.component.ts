import { Component, Input } from '@angular/core';
import { Resource } from 'src/game-objects/resource/resource';
import { FormatService } from 'src/services/format.service';

@Component({
  selector: 'resource-label',
  templateUrl: './resource-label.component.html',
  styleUrls: ['./resource-label.component.css']
})
export class ResourceLabelComponent {
  @Input() resource : Resource;

  showTooltip = false;

  constructor(public formatService : FormatService){}
}

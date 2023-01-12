import { Component, Input } from '@angular/core';
import { Resource } from 'src/app/data-interfaces';

@Component({
  selector: 'resource-label',
  templateUrl: './resource-label.component.html',
  styleUrls: ['./resource-label.component.css']
})
export class ResourceLabelComponent {
  @Input() resource : Resource;
}

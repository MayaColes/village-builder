import { Component, Input } from '@angular/core';

@Component({
  selector: 'resource-label',
  templateUrl: './resource-label.component.html',
  styleUrls: ['./resource-label.component.css']
})
export class ResourceLabelComponent {
  @Input() name = '';
  @Input() amount = 0;
  @Input() color = 'gray'
}

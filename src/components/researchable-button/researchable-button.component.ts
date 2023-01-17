import { Component, Input } from '@angular/core';
import { Researchable } from 'src/game-objects/researchable/researchable';

@Component({
  selector: 'researchable-button',
  templateUrl: './researchable-button.component.html',
  styleUrls: ['./researchable-button.component.css']
})
export class ResearchableButtonComponent {
  @Input() researchable : Researchable;

  showTooltip = false;
}

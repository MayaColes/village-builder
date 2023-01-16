import { Component, Input } from '@angular/core';
import { Job } from 'src/game-objects/job/job';

@Component({
  selector: 'job-button',
  templateUrl: './job-button.component.html',
  styleUrls: ['./job-button.component.css']
})
export class JobButtonComponent {
  @Input() job : Job;
}

import { Component, Input } from '@angular/core';
import { Job } from 'src/app/data-interfaces';

@Component({
  selector: 'job-button',
  templateUrl: './job-button.component.html',
  styleUrls: ['./job-button.component.css']
})
export class JobButtonComponent {
  @Input() job : Job;

  changeWorking(amount : number){
    if(this.job.numberWorking !== undefined){
      this.job.numberWorking += amount;
    }
  }
}

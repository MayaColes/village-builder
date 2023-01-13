import { Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'event-panel',
  templateUrl: './event-panel.component.html',
  styleUrls: ['./event-panel.component.css']
})
export class EventPanelComponent implements OnInit, DoCheck {
  @Input() events : {time : number, text : string}[] = [];

  eventsCopy : {time : number, text : string}[];

  eventString = "";

  ngOnInit(){
    // create deep copy for comparison
    this.eventsCopy = JSON.parse(JSON.stringify(this.events))
  }

  ngDoCheck(){
    if(this.events.length != this.eventsCopy.length){
      this.eventsCopy = JSON.parse(JSON.stringify(this.events))
      this.updateEventString()
    }
  }

  updateEventString(){
    this.eventString = this.eventString.concat(this.events[0].text.concat('\n\n'))
  }

}

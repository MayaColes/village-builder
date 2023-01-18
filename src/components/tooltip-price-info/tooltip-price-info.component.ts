import { Component, Input, OnInit } from '@angular/core';
import { CraftableResource } from 'src/game-objects/craftable-resource/craftable-resource';
import { Resource } from 'src/game-objects/resource/resource';

@Component({
  selector: 'tooltip-price-info',
  templateUrl: './tooltip-price-info.component.html',
  styleUrls: ['./tooltip-price-info.component.css']
})
export class TooltipPriceInfoComponent implements OnInit {
  @Input() resourceInfo : {resource : Resource | CraftableResource, price: number};

  isCraftable = false;

  ngOnInit(){
    if(this.resourceInfo.resource instanceof CraftableResource){
      this.isCraftable = true;
    }
  }
}

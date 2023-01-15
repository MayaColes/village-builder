import { Component, Input, OnInit } from '@angular/core';
import { CraftableResource } from 'src/game-objects/craftable-resource/craftable-resource';
import { Resource } from 'src/game-objects/resource/resource';

@Component({
  selector: 'tooltip-price-info',
  templateUrl: './tooltip-price-info.component.html',
  styleUrls: ['./tooltip-price-info.component.css']
})
export class TooltipPriceInfoComponent implements OnInit {
  @Input() resource : Resource | CraftableResource;

  @Input() allResources : (Resource | CraftableResource)[];

  @Input() price : number;

  isCraftable : boolean;

  resourcesToCraft: any[] = [];

  ngOnInit(){
    this.isCraftable = ('resourcesRequired' in this.resource);
    if(this.isCraftable){
      this.resourcesToCraft = (this.resource as CraftableResource).resourcesRequired;
    }
  }

  findResource(name : string){
    return this.allResources.find(obj => {
      return obj.name === name;
    }) || this.allResources[0];
  }
}

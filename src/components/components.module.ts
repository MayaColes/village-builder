import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildingButtonComponent } from './building-button/building-button.component';
import { ResourceLabelComponent } from './resource-label/resource-label.component';
import { EventPanelComponent } from './event-panel/event-panel.component';
import { ResourcePanelComponent } from './resource-panel/resource-panel.component';
import { CraftableResourceLabelComponent } from './craftable-resource-label/craftable-resource-label.component';
import { BuildingPanelComponent } from './building-panel/building-panel.component';
import { FormsModule } from '@angular/forms';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipPriceInfoComponent } from './tooltip-price-info/tooltip-price-info.component';
import { TooltipEffectInfoComponent } from './tooltip-effect-info/tooltip-effect-info.component';
import { JobButtonComponent } from './job-button/job-button.component';
import { ResearchableButtonComponent } from './researchable-button/researchable-button.component';



@NgModule({
  declarations: [
    BuildingButtonComponent,
    ResourceLabelComponent,
    EventPanelComponent,
    ResourcePanelComponent,
    CraftableResourceLabelComponent,
    BuildingPanelComponent,
    TooltipComponent,
    TooltipPriceInfoComponent,
    TooltipEffectInfoComponent,
    JobButtonComponent,
    ResearchableButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    EventPanelComponent,
    ResourcePanelComponent,
    BuildingPanelComponent,
    TooltipComponent
  ]
})
export class ComponentsModule { }

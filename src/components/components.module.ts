import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildingButtonComponent } from './building-button/building-button.component';
import { ResourceLabelComponent } from './resource-label/resource-label.component';
import { EventDisplayComponent } from './event-display/event-display.component';
import { ResourcePanelComponent } from './resource-panel/resource-panel.component';
import { CraftableResourceLabelComponent } from './craftable-resource-label/craftable-resource-label.component';



@NgModule({
  declarations: [
    BuildingButtonComponent,
    ResourceLabelComponent,
    EventDisplayComponent,
    ResourcePanelComponent,
    CraftableResourceLabelComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BuildingButtonComponent,
    ResourceLabelComponent,
    EventDisplayComponent,
    ResourcePanelComponent
  ]
})
export class ComponentsModule { }

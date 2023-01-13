import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildingButtonComponent } from './building-button/building-button.component';
import { ResourceLabelComponent } from './resource-label/resource-label.component';
import { EventPanelComponent } from './event-panel/event-panel.component';
import { ResourcePanelComponent } from './resource-panel/resource-panel.component';
import { CraftableResourceLabelComponent } from './craftable-resource-label/craftable-resource-label.component';
import { BuildingPanelComponent } from './building-panel/building-panel.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BuildingButtonComponent,
    ResourceLabelComponent,
    EventPanelComponent,
    ResourcePanelComponent,
    CraftableResourceLabelComponent,
    BuildingPanelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    BuildingButtonComponent,
    ResourceLabelComponent,
    EventPanelComponent,
    ResourcePanelComponent,
    BuildingPanelComponent
  ]
})
export class ComponentsModule { }

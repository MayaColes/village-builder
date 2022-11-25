import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildingButtonComponent } from './building-button/building-button.component';
import { ResourceLabelComponent } from './resource-label/resource-label.component';
import { EventDisplayComponent } from './event-display/event-display.component';



@NgModule({
  declarations: [
    BuildingButtonComponent,
    ResourceLabelComponent,
    EventDisplayComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BuildingButtonComponent,
    ResourceLabelComponent
  ]
})
export class ComponentsModule { }

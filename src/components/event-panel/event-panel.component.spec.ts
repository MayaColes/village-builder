import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPanelComponent } from './event-panel.component';

describe('EventDisplayComponent', () => {
  let component: EventPanelComponent;
  let fixture: ComponentFixture<EventPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceLabelComponent } from './resource-label.component';

describe('ResourceLabelComponent', () => {
  let component: ResourceLabelComponent;
  let fixture: ComponentFixture<ResourceLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

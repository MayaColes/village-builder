import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchableButtonComponent } from './researchable-button.component';

describe('ResearchableButtonComponent', () => {
  let component: ResearchableButtonComponent;
  let fixture: ComponentFixture<ResearchableButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchableButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchableButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

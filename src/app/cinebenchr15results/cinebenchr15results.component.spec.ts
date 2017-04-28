import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cinebenchr15resultsComponent } from './cinebenchr15results.component';

describe('Cinebenchr15resultsComponent', () => {
  let component: Cinebenchr15resultsComponent;
  let fixture: ComponentFixture<Cinebenchr15resultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cinebenchr15resultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cinebenchr15resultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

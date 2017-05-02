import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinebenchR15ResultsComponent } from './cinebenchr15results.component';

describe('CinebenchR15ResultsComponent', () => {
  let component: CinebenchR15ResultsComponent;
  let fixture: ComponentFixture<CinebenchR15ResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinebenchR15ResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinebenchR15ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

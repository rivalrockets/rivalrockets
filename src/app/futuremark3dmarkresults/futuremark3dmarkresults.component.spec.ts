import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Futuremark3dmarkresultsComponent } from './futuremark3dmarkresults.component';

describe('Futuremark3dmarkresultsComponent', () => {
  let component: Futuremark3dmarkresultsComponent;
  let fixture: ComponentFixture<Futuremark3dmarkresultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Futuremark3dmarkresultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Futuremark3dmarkresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

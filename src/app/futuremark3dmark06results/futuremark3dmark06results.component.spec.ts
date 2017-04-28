import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Futuremark3dmark06resultsComponent } from './futuremark3dmark06results.component';

describe('Futuremark3dmark06resultsComponent', () => {
  let component: Futuremark3dmark06resultsComponent;
  let fixture: ComponentFixture<Futuremark3dmark06resultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Futuremark3dmark06resultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Futuremark3dmark06resultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

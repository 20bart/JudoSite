import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NageWazaComponent } from './nage-waza.component';

describe('NageWazaComponent', () => {
  let component: NageWazaComponent;
  let fixture: ComponentFixture<NageWazaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NageWazaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NageWazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

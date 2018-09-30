import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KatameWazaComponent } from './katame-waza.component';

describe('KatameWazaComponent', () => {
  let component: KatameWazaComponent;
  let fixture: ComponentFixture<KatameWazaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KatameWazaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KatameWazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

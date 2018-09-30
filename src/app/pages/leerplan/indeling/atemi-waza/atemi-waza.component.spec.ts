import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtemiWazaComponent } from './atemi-waza.component';

describe('AtemiWazaComponent', () => {
  let component: AtemiWazaComponent;
  let fixture: ComponentFixture<AtemiWazaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtemiWazaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtemiWazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

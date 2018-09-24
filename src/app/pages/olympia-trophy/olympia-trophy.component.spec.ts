import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlympiaTrophyComponent } from './olympia-trophy.component';

describe('OlympiaTrophyComponent', () => {
  let component: OlympiaTrophyComponent;
  let fixture: ComponentFixture<OlympiaTrophyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlympiaTrophyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlympiaTrophyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JudoContentComponent } from './judo-content.component';

describe('JudoContentComponent', () => {
  let component: JudoContentComponent;
  let fixture: ComponentFixture<JudoContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JudoContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JudoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

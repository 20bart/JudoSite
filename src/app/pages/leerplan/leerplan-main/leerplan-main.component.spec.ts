import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerplanMainComponent } from './leerplan-main.component';

describe('LeerplanMainComponent', () => {
  let component: LeerplanMainComponent;
  let fixture: ComponentFixture<LeerplanMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeerplanMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeerplanMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

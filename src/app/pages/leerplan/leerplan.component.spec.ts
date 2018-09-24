import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerplanComponent } from './leerplan.component';

describe('LeerplanComponent', () => {
  let component: LeerplanComponent;
  let fixture: ComponentFixture<LeerplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeerplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeerplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

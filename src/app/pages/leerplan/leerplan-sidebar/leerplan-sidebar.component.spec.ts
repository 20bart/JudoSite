import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerplanSidebarComponent } from './leerplan-sidebar.component';

describe('LeerplanSidebarComponent', () => {
  let component: LeerplanSidebarComponent;
  let fixture: ComponentFixture<LeerplanSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeerplanSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeerplanSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

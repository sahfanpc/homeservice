import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincallComponent } from './admincall.component';

describe('AdmincallComponent', () => {
  let component: AdmincallComponent;
  let fixture: ComponentFixture<AdmincallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

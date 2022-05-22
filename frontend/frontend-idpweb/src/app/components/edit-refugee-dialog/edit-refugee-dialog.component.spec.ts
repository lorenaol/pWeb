import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRefugeeDialogComponent } from './edit-refugee-dialog.component';

describe('EditRefugeeDialogComponent', () => {
  let component: EditRefugeeDialogComponent;
  let fixture: ComponentFixture<EditRefugeeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRefugeeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRefugeeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

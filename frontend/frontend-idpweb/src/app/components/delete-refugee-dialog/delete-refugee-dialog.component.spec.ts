import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRefugeeDialogComponent } from './delete-refugee-dialog.component';

describe('DeleteRefugeeDialogComponent', () => {
  let component: DeleteRefugeeDialogComponent;
  let fixture: ComponentFixture<DeleteRefugeeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRefugeeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRefugeeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

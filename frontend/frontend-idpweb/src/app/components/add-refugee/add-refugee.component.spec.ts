import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRefugeeComponent } from './add-refugee.component';

describe('AddRefugeeComponent', () => {
  let component: AddRefugeeComponent;
  let fixture: ComponentFixture<AddRefugeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRefugeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRefugeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

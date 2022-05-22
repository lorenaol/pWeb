import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefugeeListComponent } from './refugee-list.component';

describe('RefugeeListComponent', () => {
  let component: RefugeeListComponent;
  let fixture: ComponentFixture<RefugeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefugeeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefugeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

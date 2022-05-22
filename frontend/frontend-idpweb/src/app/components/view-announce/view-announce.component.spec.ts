import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAnnounceComponent } from './view-announce.component';

describe('ViewAnnounceComponent', () => {
  let component: ViewAnnounceComponent;
  let fixture: ComponentFixture<ViewAnnounceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAnnounceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAnnounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedConnectionsComponent } from './saved-connections.component';

describe('SavedConnectionsComponent', () => {
  let component: SavedConnectionsComponent;
  let fixture: ComponentFixture<SavedConnectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedConnectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapBlockComponent } from './map-block.component';

describe('MapBlockComponent', () => {
  let component: MapBlockComponent;
  let fixture: ComponentFixture<MapBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

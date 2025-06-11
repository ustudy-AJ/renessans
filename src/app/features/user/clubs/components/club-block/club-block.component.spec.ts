import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubBlockComponent } from './club-block.component';

describe('ClubBlockComponent', () => {
  let component: ClubBlockComponent;
  let fixture: ComponentFixture<ClubBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

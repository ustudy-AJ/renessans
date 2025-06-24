import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonScheduleListComponent } from './lesson-schedule-list.component';

describe('LessonScheduleListComponent', () => {
  let component: LessonScheduleListComponent;
  let fixture: ComponentFixture<LessonScheduleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonScheduleListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonScheduleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

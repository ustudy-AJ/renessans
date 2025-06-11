import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonScheduleComponent } from './lesson-schedule.component';

describe('LessonScheduleComponent', () => {
  let component: LessonScheduleComponent;
  let fixture: ComponentFixture<LessonScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonScheduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

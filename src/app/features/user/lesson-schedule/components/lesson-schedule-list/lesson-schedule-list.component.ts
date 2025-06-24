import { Component, Input } from '@angular/core';
import { IClubs } from '../../../../../shared/models/clubs.model';
import { LessonBlockComponent } from '../lesson-block/lesson-block.component';
import { LessonScheduleComponent } from '../../../clubs/components/lesson-schedule/lesson-schedule.component';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-lesson-schedule-list',
  imports: [ LessonBlockComponent, LessonScheduleComponent, TranslocoPipe],
  templateUrl: './lesson-schedule-list.component.html',
  styleUrl: './lesson-schedule-list.component.scss'
})
export class LessonScheduleListComponent {

  @Input() clubs!: IClubs[];
  selectedLesson!: IClubs;

  ngOnInit(){
    this.selectedLesson = this.clubs[0];
  }

  selectLesson(clubId: number){
    this.selectedLesson = this.clubs.find(club => club.id == clubId) || this.clubs[0];
  }
}

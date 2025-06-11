import { Component, Input } from '@angular/core';
import { IHomeStatistic } from '../../../../../shared/models/statistic.model';
import { ILessons } from '../../../../../shared/models/lessons.model';

@Component({
  selector: 'app-lessons',
  imports: [],
  templateUrl: './lessons.component.html',
  styleUrl: './lessons.component.scss'
})
export class LessonsComponent {
  @Input() data!: ILessons;
}

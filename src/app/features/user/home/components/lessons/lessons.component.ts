import { Component, Input } from '@angular/core';
import { IClubs } from '../../../../../shared/models/clubs.model';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-lessons',
  imports: [TranslocoPipe],
  templateUrl: './lessons.component.html',
  styleUrl: './lessons.component.scss'
})
export class LessonsComponent {
  @Input() data!: IClubs;
}

import { Component, Input } from '@angular/core';
import { IClubs } from '../../../../../shared/models/clubs.model';
import { RouterLink } from '@angular/router';
import { DatePipe, NgClass } from '@angular/common';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-lesson-block',
  imports: [RouterLink, DatePipe,NgClass, TranslocoPipe],
  templateUrl: './lesson-block.component.html',
  styleUrl: './lesson-block.component.scss'
})
export class LessonBlockComponent {
  @Input() club!: IClubs;
  @Input() isSelected: boolean = false;
}

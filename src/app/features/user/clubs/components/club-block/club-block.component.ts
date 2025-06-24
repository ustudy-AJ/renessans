import { Component, Input } from '@angular/core';
import { IClubs } from '../../../../../shared/models/clubs.model';
import { RouterLink } from '@angular/router';
import { DatePipe, NgIf, NgOptimizedImage } from '@angular/common';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-club-block',
  imports: [RouterLink, DatePipe, TranslocoPipe],
  templateUrl: './club-block.component.html',
  styleUrl: './club-block.component.scss'
})
export class ClubBlockComponent {
  @Input() club!: IClubs;
  @Input() isVertical = false;
}

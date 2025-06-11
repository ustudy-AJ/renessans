import { Component, Input } from '@angular/core';
import { IClubs } from '../../../../../shared/models/clubs.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-club-block',
  imports: [RouterLink],
  templateUrl: './club-block.component.html',
  styleUrl: './club-block.component.scss'
})
export class ClubBlockComponent {
  @Input() club!: IClubs;
}

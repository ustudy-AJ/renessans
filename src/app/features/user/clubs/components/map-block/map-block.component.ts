import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IClubs } from '../../../../../shared/models/clubs.model';

@Component({
  selector: 'app-map-block',
  imports: [],
  templateUrl: './map-block.component.html',
  styleUrl: './map-block.component.scss'
})
export class MapBlockComponent {
  @Input() club!: IClubs;
  @Input() isOpenMap = false;
  @Output() closeMap = new EventEmitter<string>();

  closeMap1() {
    console.log('closeMap');

    this.closeMap.emit('close');
  }
}

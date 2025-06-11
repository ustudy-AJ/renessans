import { Component } from '@angular/core';
import { ClubBlockComponent } from '../club-block/club-block.component';
import { IClubs, ICLubsCategory } from '../../../../../shared/models/clubs.model';
import { ClubsCategorData, ClubsData } from '../../../../../shared/mock/clubs.mock';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { SelectModule } from 'primeng/select';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clubs-list',
  imports: [ClubBlockComponent, PaginatorModule, SelectModule, FormsModule,SliderModule],
  templateUrl: './clubs-list.component.html',
  styleUrl: './clubs-list.component.scss'
})
export class ClubsListComponent {
  clubsList: IClubs[] = ClubsData;
  currentData!: IClubs[];
  first: number = 0;
  rows: number = 6;
  rowsCount: number = 0;

  clubsCategory: ICLubsCategory[] = ClubsCategorData;
  setClubsCategory?: ICLubsCategory;

  ngOnInit() {
    this.rowsCount = this.clubsList.length;
    this.updateCurrentData();
  }

  onPageChange(event: PaginatorState) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 6;

    this.updateCurrentData();
  }

  updateCurrentData() {
    this.currentData = this.clubsList.slice(this.first, this.first + this.rows);
  }

  timeRange: number[] = [540, 1020];

  getTimeString(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
  }

}

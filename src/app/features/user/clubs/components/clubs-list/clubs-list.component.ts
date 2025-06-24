import { Component } from '@angular/core';
import { ClubBlockComponent } from '../club-block/club-block.component';
import { IClubs, ICLubsCategory, IClubsLocation, IClubsShift } from '../../../../../shared/models/clubs.model';
import { ClubsCategorData, ClubsData, ClubsLocationData, ClubsShiftData } from '../../../../../shared/mock/clubs.mock';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { SelectModule } from 'primeng/select';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { debounceTime, distinctUntilChanged, of, Subject } from 'rxjs';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-clubs-list',
  imports: [ClubBlockComponent, PaginatorModule, SelectModule, FormsModule,SliderModule,NgClass, TranslocoPipe],
  templateUrl: './clubs-list.component.html',
  styleUrl: './clubs-list.component.scss'
})
export class ClubsListComponent {
  clubsList: IClubs[] = ClubsData;
  filteredClubs: IClubs[] = [];
  currentData: IClubs[] = [];
  first: number = 0;
  rows: number = 6;
  rowsCount: number = 0;
  viewToggle: number = 1; // 1 - list, 4 - grid
  clubsShifts: IClubsShift[] = ClubsShiftData;

  clubsCategory: ICLubsCategory[] = ClubsCategorData;
  clubsLocation: IClubsLocation[] = ClubsLocationData;
  setClubsCategory?: ICLubsCategory;
  setClubsLocation?: IClubsLocation;

  selectedCategory: ICLubsCategory[] = [];
  selectedLocation: string[] = [];
  selectedShift: IClubsShift[] = [];
  searchText: string = '';
  timeRange: number[] = [540, 1020];

  private searchSubject = new Subject<string>();

  constructor() {
    this.searchSubject
      .pipe(debounceTime(500))
      .subscribe((searchTerm: string) => {
        this.searchText = searchTerm;
        this.updateFilter();
      });
  }

  ngOnInit() {
    this.filteredClubs = [...this.clubsList];
    this.rowsCount = this.filteredClubs.length;
    this.pageCahnge();
  }

  onPageChange(event: PaginatorState) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 6;
    this.pageCahnge();
  }

  pageCahnge() {
    this.currentData = this.filteredClubs.slice(this.first, this.first + this.rows);
  }

  changeViewToggle(viewToggle: number) {
    this.viewToggle = viewToggle;
    this.rows = viewToggle === 1 ? 6 : 8;
    this.pageCahnge();
  }

  onInput(event: any) {
    const inputEl = event.target as HTMLInputElement;
    this.searchSubject.next(inputEl.value);
  }

  getTimeString(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
  }

  onTimeRangeChange(): void {
    this.updateFilter();
  }

  onCategoryChange(category: ICLubsCategory, event: any) {
    if (event.target.checked) {
      this.selectedCategory.push(category);
    } else {
      this.selectedCategory = this.selectedCategory.filter(item => item.id !== category.id);
    }
    this.updateFilter();
  }

  onLocationChange(event: any) {
    const value = event.target.value;
    if (event.target.checked) {
      this.selectedLocation.push(value);
    } else {
      this.selectedLocation = this.selectedLocation.filter(item => item !== value);
    }
    this.updateFilter();
  }

  onShiftChange(shift: IClubsShift, event: any) {
    if (event.target.checked) {
      this.selectedShift.push(shift);
    } else {
      this.selectedShift = this.selectedShift.filter(item => item.id !== shift.id);
    }
    this.updateFilter();
  }

  updateFilter(): void {
    this.filteredClubs = this.clubsList.filter(club => {

      const categoryMatch =
        this.selectedCategory.length === 0 ||
        this.selectedCategory.some(cat => club.category && club.category.id === cat.id);

      const locationMatch =
        this.selectedLocation.length === 0 ||
        this.selectedLocation.some(loc => club.location && club.location.toLowerCase().includes(loc.toLowerCase()));

      const shiftMatch =
        this.selectedShift.length === 0 ||
        this.selectedShift.some(shift =>
          club.startTime &&
          club.endTime &&
          shift.startTime.getHours() <= club.startTime.getHours() &&
          shift.endTime.getHours() >= club.endTime.getHours()
        );


      const clubStart = club.startTime ? club.startTime.getHours() * 60 + club.startTime.getMinutes() : 0;
      const clubEnd = club.endTime ? club.endTime.getHours() * 60 + club.endTime.getMinutes() : 1440;
      const timeMatch =
        clubStart >= this.timeRange[0] && clubEnd <= this.timeRange[1];

      const searchMatch =
        !this.searchText ||
        club.title.toLowerCase().includes(this.searchText.toLowerCase());

      return categoryMatch && locationMatch && shiftMatch && timeMatch && searchMatch;
    });

    this.rowsCount = this.filteredClubs.length;
    this.first = 0;
    this.pageCahnge();
  }
}

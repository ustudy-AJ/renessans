import { Component } from '@angular/core';
import { FullBreadcrumbComponent } from '../../../../../shared/components/full-breadcrumb/full-breadcrumb.component';
import { Select } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { Calendar } from 'primeng/calendar';
import { LessonScheduleListComponent } from '../../components/lesson-schedule-list/lesson-schedule-list.component';
import { IClubs } from '../../../../../shared/models/clubs.model';
import { ClubsData } from '../../../../../shared/mock/clubs.mock';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-lesson-schedule',
  imports: [FullBreadcrumbComponent, Select, FormsModule, Calendar, LessonScheduleListComponent, TranslocoPipe],
  templateUrl: './lesson-schedule.component.html',
  styleUrl: './lesson-schedule.component.scss'
})
export default class LessonScheduleComponent {
  categories: string[] = ['Mathematics', 'Science', 'History', 'Language Arts'];
  provinces: string[] = ['Toshkent', 'Samarqand', 'Buxoro', 'Andijon'];
  regions: string[] = ['Olmazor', 'Yakkasaroy', 'Chilonzor', 'Shayhontohur'];
  selectedCategory?: string;

  range?: Date ;

  clubList: IClubs[] = ClubsData;
  clubs: IClubs[] = this.clubList;

  ngOnInit() {
    this.clubs = ClubsData;
  }

  search(event: any){
    let inputEl = event.target as HTMLInputElement;
    let text = inputEl.value;

    this.clubs = this.clubList.filter(v => v.title.toLocaleLowerCase().includes(text.toLocaleLowerCase()));

  }
}

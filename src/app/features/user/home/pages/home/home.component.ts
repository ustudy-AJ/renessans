import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { StatisticComponent } from '../../components/statistic/statistic.component';
import { LessonsComponent } from '../../components/lessons/lessons.component';
import { ClubsData } from '../../../../../shared/mock/clubs.mock';
import { IClubs } from '../../../../../shared/models/clubs.model';
import { IHomeStatistic } from '../../../../../shared/models/statistic.model';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, StatisticComponent, LessonsComponent, TranslocoPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {
  bamsStatistic: IHomeStatistic = {
    number: 100,
    text: 'BAM umumiy soni'
  };
  bamsPeopleStatistic: IHomeStatistic = {
    number: 15635,
    text: "BAMdagi jalb qilingan bolalar soni",
  };
  bamsClubStatistic: IHomeStatistic = {
    number: 5500,
    text: "BAMdagi mavjud to‘garaklar soni",
  };
  bamsEmployeesStatistic: IHomeStatistic = {
    number: 2500,
    text: "BAMdagi umumiy xodimlar soni",
  };
  lessons: IClubs[] = ClubsData;
}

import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { StatisticComponent } from '../../components/statistic/statistic.component';
import { LessonsComponent } from '../../components/lessons/lessons.component';
import { IHomeStatistic } from '../../../../../shared/models/statistic.model';
import { HomeStatisticData } from '../../../../../shared/mock/statistic.mock';
import { CommonModule } from '@angular/common';
import { ILessons } from '../../../../../shared/models/lessons.model';
import { LessonsData } from '../../../../../shared/mock/lessons.mock';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, StatisticComponent, LessonsComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {
  homeStatistic: IHomeStatistic[] = HomeStatisticData;
  lessons: ILessons[] = LessonsData;
}

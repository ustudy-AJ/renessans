import { Component, Input } from '@angular/core';
import { IHomeStatistic } from '../../../../../shared/models/statistic.model';

@Component({
  selector: 'app-statistic',
  imports: [],
  templateUrl: './statistic.component.html',
  styleUrl: './statistic.component.scss'
})
export class StatisticComponent {
  @Input() svgName: any;
  @Input() data!: IHomeStatistic;
}

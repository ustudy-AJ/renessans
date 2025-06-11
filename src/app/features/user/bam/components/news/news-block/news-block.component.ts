import { Component, Input } from '@angular/core';
import { INews } from '../../../../../../shared/models/news.model';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-news-block',
  imports: [DatePipe, RouterLink],
  templateUrl: './news-block.component.html',
  styleUrl: './news-block.component.scss'
})
export class NewsBlockComponent {
  @Input() data!: INews;
}

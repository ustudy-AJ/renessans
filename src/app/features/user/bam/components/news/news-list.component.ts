import { Component, Input } from '@angular/core';
import { NewsBlockComponent } from './news-block/news-block.component';
import { INews } from '../../../../../shared/models/news.model';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-news-list',
  imports: [NewsBlockComponent, CalendarModule, FormsModule, TranslocoPipe],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.scss'
})
export class NewsLsitComponent {
  @Input() newsData!: INews[];
  currentData!: INews[];
  range: Date[] = [new Date(2025, 3, 28), new Date(2025, 4, 28)];

  length = 4;

  ngOnInit(){
    this.currentData = this.newsData;
  }

  moreNews(){
    this.length+=4;
  }

  onInput(event: any){
    let inputEl = event.target as HTMLInputElement;
    let text = inputEl.value;

    this.currentData = this.newsData.filter(v => v.text.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
  }
  onRangeSelected(value: any) {
    if(this.range[0] && this.range[1]){
      let start = this.range[0];
      let end = this.range[1];

      this.currentData = this.newsData.filter(v => v.date.getTime()-start.getTime() > 0 && end.getTime()-v.date.getTime()>0);
    }
  }
}

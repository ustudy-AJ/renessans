import { Component, inject } from '@angular/core';
import { BreadcrumbComponent } from '../../../../../shared/components/breadcrumb/breadcrumb.component';
import { NewsLsitComponent } from '../../components/news/news-list.component';
import { NewsData } from '../../../../../shared/mock/news.mock';
import { INews } from '../../../../../shared/models/news.model';
import { NewsBlockComponent } from '../../components/news/news-block/news-block.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { filter } from 'rxjs';
import { BreadcrumbService } from '../../../../../shared/components/breadcrumb/breadcrumb.service';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-news',
  imports: [BreadcrumbComponent, NewsBlockComponent , DatePipe, TranslocoPipe],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export default class NewsComponent {
    newsData: INews[] = [];
    news?: INews;
    count = 0;

    private breadCrumbsService = inject(BreadcrumbService);
    private routerActive = inject(ActivatedRoute);
    private router = inject(Router);

    ngOnInit(){
      this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.setData();
      })
      this.setData();

      this.breadCrumbsService.addTitle(this.news?.text ?? "");
    }

    setData(){
      let id = this.routerActive.snapshot.params['id'];
      let count = 0;
      this.newsData = NewsData.filter((v) => count++<=4 && v.id != id)
      let cloneNews = NewsData.find(v=> v.id==id);

      if(cloneNews){
        this.news = {...cloneNews};
        this.news.imgUrl = this.news?.imgUrl.replace(".","");
      }else{
        console.error("Yangilik topilmadi");
        this.router.navigateByUrl("/home");
      }
      console.log(this.count++);

    }
}

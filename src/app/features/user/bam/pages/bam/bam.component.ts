import { Component } from '@angular/core';
import { FullBreadcrumbComponent } from '../../../../../shared/components/full-breadcrumb/full-breadcrumb.component';
import { INews } from '../../../../../shared/models/news.model';
import { NewsData } from '../../../../../shared/mock/news.mock';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { IGallery } from '../../../../../shared/models/gallery.model';
import { GalleryData, StudentWorksData } from '../../../../../shared/mock/gallery.mock';
import { NewsLsitComponent } from '../../components/news/news-list.component';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-bam',
  imports: [FullBreadcrumbComponent, NewsLsitComponent, GalleryComponent, TranslocoPipe],
  templateUrl: './bam.component.html',
  styleUrl: './bam.component.scss'
})
export default class BamComponent {
  newsData: INews[] = NewsData;
  studentWorksData: IGallery[] = StudentWorksData;
  galleryData: IGallery[] = GalleryData;
}

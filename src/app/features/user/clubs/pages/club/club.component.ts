import { Component, inject } from '@angular/core';
import { BreadcrumbComponent } from '../../../../../shared/components/breadcrumb/breadcrumb.component';
import { BreadcrumbService } from '../../../../../shared/components/breadcrumb/breadcrumb.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ClubsData } from '../../../../../shared/mock/clubs.mock';
import { IClubs } from '../../../../../shared/models/clubs.model';
import { ClubBlockComponent } from '../../components/club-block/club-block.component';
import { LessonScheduleComponent } from '../../components/lesson-schedule/lesson-schedule.component';
import { MapBlockComponent } from '../../components/map-block/map-block.component';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-club',
  imports: [BreadcrumbComponent, ClubBlockComponent, LessonScheduleComponent, MapBlockComponent, RouterLink, TranslocoPipe],
  templateUrl: './club.component.html',
  styleUrl: './club.component.scss'
})
export default class ClubComponent {
  private breadCrumbService = inject(BreadcrumbService);
  private routerActive = inject(ActivatedRoute);
  private router = inject(Router);
  club?: IClubs;
  currentData = ClubsData;
  isOpenMap = false;

  ngOnInit(){
    let id = this.routerActive.snapshot.params['id'];

    this.club = ClubsData.find(club=>club.id==id);

    if(this.club){
      this.breadCrumbService.addTitle(this.club?.title);
    }else{
      console.error("To`garak topilmadi");
      this.router.navigateByUrl("/home");
    }
  }

  openMap() {
    this.isOpenMap = !this.isOpenMap;
  }
}

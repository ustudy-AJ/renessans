import { Component, inject } from '@angular/core';
import { BreadcrumbComponent } from '../../../../../shared/components/breadcrumb/breadcrumb.component';
import { BreadcrumbService } from '../../../../../shared/components/breadcrumb/breadcrumb.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ClubsData } from '../../../../../shared/mock/clubs.mock';
import { IClubs } from '../../../../../shared/models/clubs.model';
import { ClubBlockComponent } from '../../components/club-block/club-block.component';
import { LessonScheduleComponent } from '../../components/lesson-schedule/lesson-schedule.component';

@Component({
  selector: 'app-club',
  imports: [BreadcrumbComponent, ClubBlockComponent, LessonScheduleComponent],
  templateUrl: './club.component.html',
  styleUrl: './club.component.scss'
})
export default class ClubComponent {
  private breadCrumbService = inject(BreadcrumbService);
  private routerActive = inject(ActivatedRoute);
  private router = inject(Router);
  club?: IClubs;
  currentData = ClubsData;

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

  currentMonth = 'May 2025';
  days = ['DUSH', 'SESH', 'CHOR', 'PAY', 'JUM', 'SHAN', 'YAK'];
  schedule = [
    { date: 1, time: '09:00 - 12:00' },
    { date: 2, time: '09:00 - 12:00' },
    { date: 6, time: '09:00 - 12:00' },
    { date: 8, time: '09:00 - 12:00' },
    { date: 9, time: '09:00 - 12:00' },
    { date: 10, time: '09:00 - 12:00' },
    { date: 14, time: '09:00 - 12:00' },
    { date: 15, time: '09:00 - 12:00' },
    { date: 16, time: '09:00 - 12:00' },
    { date: 17, time: '09:00 - 12:00' },
    { date: 20, time: '09:00 - 12:00' },
    { date: 22, time: '09:00 - 12:00' },
    { date: 23, time: '09:00 - 12:00' },
    { date: 24, time: '09:00 - 12:00' },
    { date: 27, time: '09:00 - 12:00' },
    { date: 29, time: '09:00 - 12:00' },
    { date: 30, time: '09:00 - 12:00' },
    { date: 31, time: '09:00 - 12:00' }
  ];

  timeSlots = [
    { start: '09:00', end: '12:00' },
    { start: '13:00', end: '15:00' },
    { start: '15:00', end: '18:00' },
    { start: '18:00', end: '21:00' }
  ];
}

  import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    inject,
    Input,
    OnInit,
  } from '@angular/core';
  import { FullCalendarModule } from '@fullcalendar/angular';
  import { CalendarOptions } from '@fullcalendar/core';
  import dayGridPlugin from '@fullcalendar/daygrid';
  import interactionPlugin from '@fullcalendar/interaction';
  import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
  import { switchMap, tap } from 'rxjs';
  import { IClubDate, IClubs } from '../../../../../shared/models/clubs.model';
  import { DatePipe, NgClass } from '@angular/common';

  @Component({
    selector: 'app-lesson-schedule',
    imports: [FullCalendarModule, DatePipe, NgClass, TranslocoPipe],
    templateUrl: './lesson-schedule.component.html',
    styleUrl: './lesson-schedule.component.scss',
    providers: [DatePipe]
  })
  export class LessonScheduleComponent implements OnInit {
    private readonly translocoService: TranslocoService =
      inject(TranslocoService);
    @Input() club!: IClubs;

    private readonly cdr: ChangeDetectorRef = inject(ChangeDetectorRef);
    private datePipe: DatePipe = inject(DatePipe);
    activeLessonsDate!: number;
    calendarIsLoaded: boolean = false;
    calendarOptions!: CalendarOptions;
    calendarEvents!: {title: string, date: string}[]


    handleDateClick(arg: any) {
      alert('date click! ' + arg.dateStr);
    }

    ngOnInit(): void {
      this.changeDays(this.club.lessonDates[0].id);
      this.translocoService.langChanges$
        .pipe(
          switchMap((lang) => {
            return this.translocoService.load(lang);
          }),
          tap(() => {
            this.loadCalendarOptions(this.calendarEvents);
          })
        )
        .subscribe();
    }

    loadCalendarOptions(calEvents: any): void {
      this.activeLessonsDate = this.club.lessonDates[0].id;
      this.calendarOptions = {
        firstDay: 1,
        initialView: 'dayGridMonth',
        dayHeaderContent: (args: any) => {
          let text = this.translocoService.translate("week." + args.text) || args.text;

          return text;
        },
        plugins: [dayGridPlugin, interactionPlugin],
        dateClick: this.handleDateClick.bind(this),
        events: [
          ...calEvents
        ],
        headerToolbar: {
          left: 'prev',
          center: 'title',
          right: 'next',
        },
        height: 'auto',
      };
      this.calendarIsLoaded = true;

    }

    dateMapping(lessonDate: IClubDate){
      let timesStr = this.datePipe.transform(lessonDate.times[0],"HH.mm") + " - " + this.datePipe.transform(lessonDate.times[1],"HH.mm");

      let currentDate = new Date();
      currentDate.setDate(0)
      let monthAfter = new Date();
      monthAfter.setMonth(monthAfter.getMonth()+1);
      let finalDates = [];
      while(currentDate.getDate() != monthAfter.getDate() || currentDate.getMonth() != monthAfter.getMonth()){
        for (let weekDay of lessonDate.weekDays) {
          if(currentDate.getDay() == (weekDay + 1)%7){
            let dateFormat = this.datePipe.transform(currentDate,"yyyy-MM-dd") + "";
            finalDates.push({ title: timesStr, date: dateFormat });
            break;
          }
        }
        currentDate.setDate(currentDate.getDate()+1);
      }
      return finalDates;
    }

    changeDays(lessonDateId: number) {
      this.activeLessonsDate = lessonDateId;
      let lessonDate = this.club.lessonDates.find(v=>v.id==lessonDateId);

      if(lessonDate){
        this.calendarEvents = this.dateMapping(lessonDate);
        this.calendarOptions = {
          ...this.calendarOptions,
          events: [
            ...this.calendarEvents
          ]
        };
      }
    }
  }

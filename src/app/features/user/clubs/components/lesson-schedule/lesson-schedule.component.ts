import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular'; // импорт FullCalendar модуля
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-lesson-schedule',
  imports: [FullCalendarModule],
  templateUrl: './lesson-schedule.component.html',
  styleUrl: './lesson-schedule.component.scss'
})
export class LessonScheduleComponent {
  calendarOptions: CalendarOptions = {
    locale: 'uz',
    firstDay: 1,
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    events: [
      { title: 'event 1', date: '2025-06-02' },
      { title: 'event 2', date: '2025-06-04' },
      { title: 'event 1', date: '2025-06-06' },
      { title: 'event 2', date: '2025-06-09' },
      { title: 'event 1', date: '2025-06-11' },
      { title: 'event 2', date: '2025-06-13' },
      { title: 'event 1', date: '2025-06-16' },
      { title: 'event 2', date: '2025-06-18' },
      { title: 'event 1', date: '2025-06-20' },
      { title: 'event 2', date: '2025-06-23' },
      { title: 'event 2', date: '2025-06-25' },
      { title: 'event 2', date: '2025-06-27' },
    ],
    headerToolbar: {
      left: 'prev',
      center: 'title',
      right: "next"
    },
  };

  handleDateClick(arg:any) {
    alert('date click! ' + arg.dateStr)
  }
}

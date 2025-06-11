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
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    events: [
      { title: 'event 1', date: '2025-06-01' },
      { title: 'event 2', date: '2025-06-02' }
    ]
  };

  handleDateClick(arg:any) {
    alert('date click! ' + arg.dateStr)
  }
}

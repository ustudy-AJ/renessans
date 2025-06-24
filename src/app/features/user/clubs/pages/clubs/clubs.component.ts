import { Component, inject } from '@angular/core';
import { FullBreadcrumbComponent } from '../../../../../shared/components/full-breadcrumb/full-breadcrumb.component';
import { ClubsListComponent } from '../../components/clubs-list/clubs-list.component';

@Component({
  selector: 'app-clubs',
  imports: [FullBreadcrumbComponent, ClubsListComponent],
  templateUrl: './clubs.component.html',
  styleUrl: './clubs.component.scss'
})
export default class ClubsComponent {
}

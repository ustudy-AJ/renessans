import { Component, inject } from '@angular/core';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { BreadcrumbService } from '../breadcrumb/breadcrumb.service';
import { AsyncPipe, NgIf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-full-breadcrumb',
  imports: [BreadcrumbComponent, AsyncPipe, NgIf, NgOptimizedImage],
  templateUrl: './full-breadcrumb.component.html',
  styleUrl: './full-breadcrumb.component.scss'
})
export class FullBreadcrumbComponent {
  breadCrumbService = inject(BreadcrumbService);
  breadCrumbTitle = this.breadCrumbService.breadcrumbs$;
}

import { Component, inject, Input } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { BreadcrumbService } from './breadcrumb.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  imports: [BreadcrumbModule, CommonModule, RouterLink],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
  breadcrumbService: BreadcrumbService = inject(BreadcrumbService);
  breadcrumbs$ = this.breadcrumbService.breadcrumbs$;

  @Input() color: string = "";
  @Input() isOneColor: boolean = false;

  ngOnInit(){
    this.isOneColor = this.color != "";
    this.breadcrumbs$.subscribe();
  }
}


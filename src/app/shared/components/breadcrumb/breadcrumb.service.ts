import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BreadcrumbService {
  private _breadcrumbs$ = new BehaviorSubject<MenuItem[]>([]);

  readonly breadcrumbs$: Observable<MenuItem[]> = this._breadcrumbs$.asObservable();

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.buildBreadcrumbs();
      });

    this.buildBreadcrumbs();
  }

  private buildBreadcrumbs(): void {
    const breadcrumbs: MenuItem[] = [];
    let currentRoute = this.route.root;
    let url = '';

    while (currentRoute.children.length > 0) {
      const child = currentRoute.children[0];
      const routeSnapshot = child.snapshot;

      if (routeSnapshot.data['breadcrumb']) {
        const path = routeSnapshot.url.map(segment => segment.path).join('/');
        url += '/' + path;

        breadcrumbs.push({
          label: routeSnapshot.data['breadcrumb'],
          routerLink: url
        });
      }
      currentRoute = child;
    }

    this._breadcrumbs$.next(breadcrumbs);
  }



  addTitle(title: string){
    this._breadcrumbs$.getValue().push({
              label: title,
              routerLink: ""
            })
  }
}

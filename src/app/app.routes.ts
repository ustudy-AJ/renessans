import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { BamRoutes } from './features/user/bam/bam.routes';
import { ClubsRoutes } from './features/user/clubs/clubs.routes';

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/home"
  },
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "home",
        data: {
          breadcrumb: 'Home'
        },
        loadComponent: ()=> import("./features/user/home/pages/home/home.component")
      },
      {
        path: "bam",
        data: {
          breadcrumb: 'BAM'
        },
        children: BamRoutes
      },
      {
        path: "clubs",
        data: {
          breadcrumb: 'To`garaklar'
        },
        children: ClubsRoutes
      }
    ]
  }
];

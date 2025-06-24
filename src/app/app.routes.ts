import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { BamRoutes } from './features/user/bam/bam.routes';
import { ClubsRoutes } from './features/user/clubs/clubs.routes';
import { ContactsRoutes } from './features/user/contacts/contacts.routes';

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
        path: "auth",
        data: {
          breadcrumb: 'Auth'
        },
        loadComponent: ()=> import("./features/user/auth/pages/auth/auth.component")
      },
      {
        path: "bam",
        data: {
          breadcrumb: 'BAM'
        },
        loadChildren: ()=> import("./features/user/bam/bam.routes").then(m => m.BamRoutes)
      },
      {
        path: "clubs",
        data: {
          breadcrumb: 'To`garaklar'
        },
        loadChildren: ()=> import("./features/user/clubs/clubs.routes").then(m => m.ClubsRoutes)
      },
      {
        path: "lessonSchedule",
        data: {
          breadcrumb: 'Dars Jadvali'
        },
        loadComponent: () => import("./features/user/lesson-schedule/pages/lesson-schedule/lesson-schedule.component")
      },
      {
        path: "contacts",
        data: {
          breadcrumb: 'Ko`ntatktlar'
        },
        loadChildren: () => ContactsRoutes
      },
    ]
  }
];

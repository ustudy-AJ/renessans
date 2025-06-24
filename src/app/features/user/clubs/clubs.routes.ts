import { Route } from "@angular/router";

export const ClubsRoutes: Route[] = [
  {
    path: "",
    data: {
      breadcrumb: ''
    },
    loadComponent: ()=> import("./pages/clubs/clubs.component")
  },
  {
    path: ":id",
    data: {
      breadcrumb: ''
    },
    loadComponent: ()=> import("./pages/club/club.component")
  },
  {
    path: "registration/:id",
    data: {
      breadcrumb: 'Yozilish'
    },
    loadComponent: ()=> import("./pages/club-registration/club-registration.component")
  },
]

import { Route } from "@angular/router";


export const BamRoutes: Route[] = [
  {
    path: "",
    data: {
      breadcrumb: ''
    },
    loadComponent: ()=> import("./pages/bam/bam.component")
  },
  {
    path: "news/:id",
    data: {
      breadcrumb: 'Yangiliklar'
    },
    loadComponent: ()=> import("./pages/news/news.component")
  },
]

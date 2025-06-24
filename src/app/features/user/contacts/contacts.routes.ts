import { Route } from "@angular/router";

export const ContactsRoutes: Route[] = [
  {
    path: "",
    data: {
      breadcrumb: ''
    },
    loadComponent: ()=> import("./pages/contact-categories/contact-categories.component")
  },
  {
    path: ":categoryId",
    data: {
      breadcrumb: ''
    },
    loadComponent: ()=> import("./pages/contact-categories/contact-categories.component")
  },
  {
    path: ":categoryId/:contactId",
    data: {
      breadcrumb: ''
    },
    loadComponent: ()=> import("./pages/contact/contact.component")
  },
]

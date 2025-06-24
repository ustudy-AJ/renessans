import { Component, inject } from '@angular/core';
import { FullBreadcrumbComponent } from '../../../../../shared/components/full-breadcrumb/full-breadcrumb.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsCategoriesData, ContactsData } from '../../../../../shared/mock/contact.mock';
import { IContact } from '../../../../../shared/models/contacts.model';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-contact',
  imports: [FullBreadcrumbComponent, TranslocoPipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export default class ContactComponent {
  contact: IContact | undefined;

  private router: Router = inject(Router);
  private activeRouter: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    let categoryId = this.activeRouter.snapshot.params['categoryId'];
    let contactId = this.activeRouter.snapshot.params['contactId'];
    let category = ContactsCategoriesData.find(category => {
      return category.id === +categoryId;
    });

    if (category && category.contact && category.contact.id === +contactId) {
      this.contact = category.contact;
    } else {
      this.router.navigate(['/not-found']);
    }


  }
}

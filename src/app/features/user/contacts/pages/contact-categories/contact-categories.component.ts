import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsCategoriesData } from '../../../../../shared/mock/contact.mock';
import { IContactCategory } from '../../../../../shared/models/contacts.model';
import { FullBreadcrumbComponent } from '../../../../../shared/components/full-breadcrumb/full-breadcrumb.component';
import { ContactCategoryBlockComponent } from '../../components/contact-category-block/contact-category-block.component';

@Component({
  selector: 'app-contact-categories',
  imports: [ContactCategoryBlockComponent, FullBreadcrumbComponent],
  templateUrl: './contact-categories.component.html',
  styleUrl: './contact-categories.component.scss'
})
export default class ContactCategoriesComponent {
  contactCategories: IContactCategory[] = ContactsCategoriesData;

  private activeRouter: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    let categories = ContactsCategoriesData.find(category => {
      return category.id === +this.activeRouter.snapshot.params['categoryId'];
    });
    console.log(categories);


    this.contactCategories = categories?.currentCategories || ContactsCategoriesData;
  }
}

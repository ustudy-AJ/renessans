import { Component, Input } from '@angular/core';
import { IContactCategory } from '../../../../../shared/models/contacts.model';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-contact-category-block',
  imports: [RouterLink, TranslocoPipe],
  templateUrl: './contact-category-block.component.html',
  styleUrl: './contact-category-block.component.scss'
})
export class ContactCategoryBlockComponent {
  @Input() category!: IContactCategory
}

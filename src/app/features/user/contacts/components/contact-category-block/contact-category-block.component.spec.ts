import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCategoryBlockComponent } from './contact-category-block.component';

describe('ContactCategoryBlockComponent', () => {
  let component: ContactCategoryBlockComponent;
  let fixture: ComponentFixture<ContactCategoryBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactCategoryBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactCategoryBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

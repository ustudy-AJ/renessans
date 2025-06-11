import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullBreadcrumbComponent } from './full-breadcrumb.component';

describe('FullBreadcrumbComponent', () => {
  let component: FullBreadcrumbComponent;
  let fixture: ComponentFixture<FullBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullBreadcrumbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

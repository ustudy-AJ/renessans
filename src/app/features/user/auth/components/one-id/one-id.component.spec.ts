import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneIdComponent } from './one-id.component';

describe('OneIdComponent', () => {
  let component: OneIdComponent;
  let fixture: ComponentFixture<OneIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

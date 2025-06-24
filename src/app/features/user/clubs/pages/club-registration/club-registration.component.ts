import { Component, inject } from '@angular/core';
import { BreadcrumbComponent } from '../../../../../shared/components/breadcrumb/breadcrumb.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClubsData } from '../../../../../shared/mock/clubs.mock';
import { ActivatedRoute } from '@angular/router';
import { IClubs } from '../../../../../shared/models/clubs.model';
import { CurrencyPipe, DatePipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-club-registration',
  imports: [BreadcrumbComponent, ReactiveFormsModule, NgClass, DatePipe, CurrencyPipe],
  templateUrl: './club-registration.component.html',
  styleUrl: './club-registration.component.scss'
})
export default class ClubRegistrationComponent {
  club: IClubs | undefined;
  registrForm!: FormGroup;
  activeLessonsDate: number = 1;
  private routerActive = inject(ActivatedRoute);

  constructor(private formBuilder: FormBuilder) {
    this.registrForm = this.formBuilder.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      middleName: ['',Validators.required],
      pinfl: ['',Validators.required],
      phoneNumber: ['',Validators.required],
      group: ['',Validators.required],
      child: ['',Validators.required],
      shift: ['',Validators.required],
      payment: ['',Validators.required],
    });

  }

  ngOnInit(){
    let id = this.routerActive.snapshot.params['id'];
    this.club = ClubsData.find(club => club.id == id);
    console.log(this.club);

  }
}

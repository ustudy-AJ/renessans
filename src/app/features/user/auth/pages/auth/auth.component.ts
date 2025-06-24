import { Component } from '@angular/core';
import { OneIdComponent } from '../../components/one-id/one-id.component';
import { LoginComponent } from '../../components/login/login.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-auth',
  imports: [OneIdComponent, LoginComponent, NgClass],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export default class AuthComponent {
  isOneId: boolean = true;
}

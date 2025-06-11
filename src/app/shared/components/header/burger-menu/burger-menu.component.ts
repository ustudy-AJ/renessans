import { CommonModule, NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { BurgerMenuService } from './burger.service';

@Component({
  selector: 'app-burger-menu',
  imports: [NgClass, CommonModule],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss'
})
export class BurgerMenuComponent {
  private _burgerMenuService = inject(BurgerMenuService);
  isShow = this._burgerMenuService.isShow.asObservable();

  toInversion(){
    this._burgerMenuService.toInversion();
  }
}

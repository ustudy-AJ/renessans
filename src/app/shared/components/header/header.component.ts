import { Component, inject } from '@angular/core';
import { UpHeaderComponent } from './up-header/up-header.component';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { BurgerMenuService } from './burger-menu/burger.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [UpHeaderComponent, FormsModule, SelectModule, ButtonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private _burgerMenuService = inject(BurgerMenuService);
  countries: any[] | undefined;

  selectedCountry: any | undefined = { name: 'O`z', code: 'UZ' };

  ngOnInit() {
      this.countries = [
          { name: 'O`z', code: 'UZ' },
          { name: 'Рус', code: 'RU' },
          { name: 'Eng', code: 'US' },
      ];
  }

  showBurgerMenu(){
    console.log("dsdsf");


    this._burgerMenuService.toInversion();
  }
}

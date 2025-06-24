import { Component, inject } from '@angular/core';
import { UpHeaderComponent } from './up-header/up-header.component';
import { SelectChangeEvent, SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [UpHeaderComponent, FormsModule, SelectModule, ButtonModule, RouterLink, UpperCasePipe, TranslocoPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  languages: any[] | undefined;

  selectedLanguage: any | undefined = { name: 'O`z', code: 'uz' };

  private readonly translocoService: TranslocoService = inject(TranslocoService)

  ngOnInit() {
      this.languages = [
          { name: 'O`z', code: 'uz' },
          { name: 'Рус', code: 'ru' },
          { name: 'Eng', code: 'us' },
      ];
  }

  onLanguageChange(event: SelectChangeEvent) {
    this.translocoService.setActiveLang(event.value.code != 'us' ? event.value.code : "en");
  }
}

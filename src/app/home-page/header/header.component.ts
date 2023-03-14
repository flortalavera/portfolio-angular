import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  languageSelected: string = 'es';
  @Output() languageSelectedChange = new EventEmitter<string>();
  showComponent: boolean = false;

  constructor(
    private _translateService: TranslateService
  ) { 
    this._translateService.setDefaultLang('es');
  }

  changeLanguage(language: string): void {
    this._translateService.use(language);
    this.languageSelected = language;
    this.languageSelectedChange.emit(this.languageSelected);
  }

}

import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private _translateService: TranslateService
  ) { 
    this._translateService.setDefaultLang('es');
  }

  changeLanguage(language: string): void {
    this._translateService.use(language);
  }

}

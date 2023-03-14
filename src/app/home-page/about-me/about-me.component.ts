import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  downloadLink: string = '';

  constructor(
    private _translateService: TranslateService,

  ) { 
    this._translateService.setDefaultLang('es');
    
  }

}

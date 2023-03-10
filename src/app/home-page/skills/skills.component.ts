import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  constructor(
    private _translateService: TranslateService
  ) { 
    this._translateService.setDefaultLang('es');
  }
}

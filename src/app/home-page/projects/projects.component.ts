import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent{
  @Input() isDarkMode: boolean = false;

  constructor(
    private _translateService: TranslateService
  ) { 
    this._translateService.setDefaultLang('es');
  }
}

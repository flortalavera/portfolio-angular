import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  @Input() languageSelected: string = 'es';
  @Output() languageSelectedChange = new EventEmitter<string>();

  constructor(
    private _translateService: TranslateService,

  ) { 
    this._translateService.setDefaultLang('es');
    
  }

  ngOnInit(){
    this._translateService.onLangChange.subscribe((event) => {
      this.languageSelected = event.lang;
    });
  }

}

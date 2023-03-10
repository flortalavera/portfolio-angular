import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() isDarkMode: boolean = false;
  showIconWhite: boolean = false;
  
  constructor() {}

  detectedTheme() {
    if (this.isDarkMode) {
      this.showIconWhite = true;
    } else {
      this.showIconWhite = false;
    }
  }
}
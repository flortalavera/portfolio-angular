import { Component } from '@angular/core';
import { ContactMeService } from './contact-me.service';
import { environment } from 'src/environments/environment.local';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  apiUrl = environment.apiUrl;

  constructor(
    private _contacServ: ContactMeService,
    private _snackBar: MatSnackBar,
    private fb: FormBuilder,
    private _translateService: TranslateService

  ) {
    this._translateService.setDefaultLang('es');
    
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
   }

  onSubmit() {
    const data = this.contactForm.value;
    this._contacServ.sendMessage(data, this.apiUrl).subscribe(
      (data) => {
        this._translateService.get('snackbar.messageOk').subscribe((message: string) => {
          this._snackBar.open(message, "OK").afterDismissed().subscribe(() => {
            location.reload();
          });
        });
      },
      (error) => {
        this._translateService.get('snackbar.messageError').subscribe((message: string) => {
          this._snackBar.open(message, "OK").afterDismissed().subscribe(() => {
            location.reload();
          });
        });
        console.log(error)
      }
    );
  }
}
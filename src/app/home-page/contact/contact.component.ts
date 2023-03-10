import { Component } from '@angular/core';
import { ContactMeService } from './contact-me.service';
import { environment } from 'src/environments/environment.local';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private fb: FormBuilder
  ) {
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
        this._snackBar.open("Mensaje enviado correctamente", "OK").afterDismissed().subscribe(() => {
          location.reload();
        });
      },
      (error) => {
        console.log(error)
      }
    );
  }
}
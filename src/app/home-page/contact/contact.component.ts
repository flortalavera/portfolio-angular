import { Component } from '@angular/core';
import { ContactMeService } from './contact-me.service';
import { environment } from 'src/environments/environment.local';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  apiUrl = environment.apiUrl;

  constructor(
    private contacServ: ContactMeService
  ) {}

  onSubmit() {
  const data = { name: this.name, email: this.email, message: this.message };
  this.contacServ.sendMessage(data, this.apiUrl).subscribe(
    (data) => {
      console.log(data)
    },
    (error) => {
      console.log(error)
    }
  )

}
}

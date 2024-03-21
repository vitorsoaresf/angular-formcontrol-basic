import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  name = new FormControl('');
  email = new FormControl('');
  message = new FormControl('');

  formSubmit(event: Event) {
    event.preventDefault();
    console.log({
      name: this.name.value,
      email: this.email.value,
      message: this.message.value,
    });

    this.name.setValue('');
    this.email.setValue('');
    this.message.setValue('');
  }
}

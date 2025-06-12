import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContactusService } from './contactus.service/contactus.service';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  contactForm: FormGroup;
  mEmail: string = 'alyankhan2717@gmail.com';

  constructor(private fb: FormBuilder, private contactService: ContactusService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: [''],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      console.log('Form Data:', formData);
      debugger
      this.contactService.submitContactUsForm(formData).subscribe({
        next: (response) => {
          console.log('Form submitted successfully', response);
        },
        error: (error) => {
          console.error('Error submitting form', error);
        }
      });

      // Reset form after submission
      this.contactForm.reset();
    } else {
      // Handle invalid form
      console.log('Form is invalid');
    }
  }
}

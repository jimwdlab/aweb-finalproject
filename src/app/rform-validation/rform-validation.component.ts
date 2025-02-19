import { Component } from '@angular/core';
import { FormControl, FormsModule, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rform-validation',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './rform-validation.component.html',
  styleUrl: './rform-validation.component.css'
})
export class RformValidationComponent {
  title = 'reactive-form'
  firstname: string = "";
  lastname: string = "";
  studnum: number = 0;
  email: string = "";
  password: string = "";
  formdata: FormGroup = new FormGroup({
    firstname: new FormControl("", [Validators.required]),
    lastname: new FormControl("", [Validators.required]),
    studnum: new FormControl(0, [Validators.required, Validators.min(9999999)]), // para 8 digits minimum
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(8)])
  });
  submitted: boolean = false;

  onSubmit(data: {firstname: string, lastname: string, studnum: number, email: string, password: string}) {
    console.log("submitted");
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.studnum = data.studnum;
    this.email = data.email;
    this.password = data.password;
    this.submitted = true;
  }
}

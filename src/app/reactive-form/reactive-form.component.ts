import { Component } from '@angular/core';
import { FormControl, FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  title = 'reactive-form'
  firstname: string = "";
  lastname: string = "";
  studnum: number = 0;
  email: string = "";
  password: string = "";
  formdata: FormGroup = new FormGroup({
    firstname: new FormControl(""),
    lastname: new FormControl(""),
    studnum: new FormControl(0),
    email: new FormControl(""),
    password: new FormControl("")
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

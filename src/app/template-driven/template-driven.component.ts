import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-driven',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css'
})
export class TemplateDrivenComponent {
  title = 'template-driven';
  firstname: string = "";
  lastname: string = "";
  studnum: number = 0;
  email: string = "";
  password: string = "";
  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
  }
}

import { Routes } from '@angular/router';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RformValidationComponent } from './rform-validation/rform-validation.component';

export const routes: Routes = [
    {path: '', component : TemplateDrivenComponent},
    {path: 'rform', component : ReactiveFormComponent},
    {path: 'rfval', component : RformValidationComponent},
];

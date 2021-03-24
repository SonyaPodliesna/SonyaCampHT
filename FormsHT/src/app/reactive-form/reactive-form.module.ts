import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from './reactive-form.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes = [
  {
    path: '',
    component: ReactiveFormComponent,
  }
];

@NgModule({
  declarations: [ReactiveFormComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes), 
    FormsModule, 
    ReactiveFormsModule, 
    MaterialModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ReactiveFormModule { }

//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//components
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';

//directives
import { ValidationDirective } from './validation.directive';
import { ColorCheckDirective } from './color-check.directive';
import { HoverColorDirective } from './hover-color.directive';

import { ReversePipe } from './reverse.pipe';

const routes: Routes = [

  {
    path: 'input-component',
    component: InputComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ValidationDirective,
    ColorCheckDirective,
    HoverColorDirective,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [RouterModule.forRoot(routes)],
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule, ValidationDirective],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

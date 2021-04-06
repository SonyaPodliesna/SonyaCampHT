import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserInputService } from '../user-input.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public form: FormGroup;
  public name;

  constructor(private service: UserInputService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      input: this.fb.control('')
    });
  }

  public passData() {
    this.service.userData$.next(this.form.controls.input.value);

    this.service.userData$.subscribe(data => {
      this.name = data;
    });
  }

}


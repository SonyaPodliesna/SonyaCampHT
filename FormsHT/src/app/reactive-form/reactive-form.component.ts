import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators, ValidationErrors, FormControl } from '@angular/forms';
import { User } from '../model/user.model';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  newUser: User = {
    userName: 'SonyaP',
    firstName: 'Sonya',
    lastName: 'Podliesna',
    emailaddress: 'sonya@gmail.com',
    password: 'psswrd',
    confirmpassword: 'psswrd',
    status: 'My Status'
  };
  createUser: FormGroup;
  private readonly _pswrd: RegExp = /^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/;

  constructor(private readonly formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createUser = this.formbuilder.group({
      firstName: this.formbuilder.control(this.newUser.firstName, Validators.required),
      lastName: this.formbuilder.control(this.newUser.lastName, Validators.required),
      emailaddress: this.formbuilder.control(this.newUser.emailaddress, [Validators.required, Validators.email]),
      password: this.formbuilder.control(this.newUser.password, [Validators.required, this.psswrdValidator.bind(this)]),
      confirmpassword: this.formbuilder.control(this.newUser.confirmpassword, [Validators.required, this.psswrdValidator.bind(this)]),
      status: this.formbuilder.control(this.newUser.status)
    },
      { validators: this.checkPasswords });

  }

  public submit(): void {
    if (this.createUser.valid) {
      this.newUser = { ...this.newUser, ...this.createUser.value };
      alert(
        `user name: ${this.newUser.userName}\n` +
        `first name: ${this.newUser.firstName}\n` +
        `last name: ${this.newUser.lastName}\n` +
        `email address: ${this.newUser.emailaddress}\n` +
        `password: ${this.newUser.password}\n` +
        `confirmpassword: ${this.newUser.confirmpassword}\n` +
        `status: ${this.newUser.status}\n`
      );
    } else {
      alert('Form not valid');
    }
  }

  private psswrdValidator(control: AbstractControl): ValidationErrors | null {
    if (control?.value) {
      const isValid = this._pswrd.test(control.value);
      return !isValid ? { invalidPassword: true } : null;

    }

    return null;
  }

  private checkPasswords(group: FormGroup) {
    const password = group.get('password').value;
    const confirmpassword = group.get('confirmpassword').value;

    return password === confirmpassword ? null : { notSame: true }
  }
}

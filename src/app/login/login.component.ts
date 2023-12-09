import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  UserForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.UserForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  get username() {
    return this.UserForm.get('username');
  }
  get password() {
    return this.UserForm.get('password');
  }
  ngOnInit(): void {}

  onSubmit() {
    // this.router.navigate(['/home']);
  }
}

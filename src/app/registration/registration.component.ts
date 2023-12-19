import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizeService } from '../Servise/authorize.service';
import { IUserRegister } from '../Shared-Interfase/IUserRegister';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  UserForm: FormGroup;
  enabled:boolean = false;
  
  constructor(private fb: FormBuilder,private rout:Router, private auth : AuthorizeService)
 {
  this.UserForm = this.fb.group({
    username: ['', Validators.required],
    name: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
}
get username() {
  return this.UserForm.get('username');
}
get password() {
  return this.UserForm.get('password');
}
get image() {
  return this.UserForm.get('image');
}
get name() {
  return this.UserForm.get('name');
}
get email() {
  return this.UserForm.get('email');
}
get phone() {
  return this.UserForm.get('phone');
}

onSubmit()
{
  const newUser:IUserRegister  = {
      name: this.UserForm.value.name,
      userName:this.UserForm.value.username, 
      email: this.UserForm.value.email,
      phone: this.UserForm.value.phone,
      password:this.UserForm.value.password,
      role: this.auth.userRole,
    };

    console.log(this.UserForm.value);
    console.log(newUser);

  if(this.UserForm.valid)
  {
    this.auth.register(newUser).subscribe((info) =>{
      if(info.message == "Success")
      {
        this.rout.navigate(['/login']);
      }else{
        this.enabled = true;
      }

    })
    
  }
}
}

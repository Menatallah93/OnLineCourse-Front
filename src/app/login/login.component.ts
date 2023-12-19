import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from '../Shared-Interfase/IUserRegister';
import { AuthorizeService } from '../Servise/authorize.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  UserForm: FormGroup;
  role:string = "";

  constructor(private fb: FormBuilder, private router: Router,private auth: AuthorizeService) {
    this.UserForm = this.fb.group({
      userName: ['', [Validators.required]],
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
    const newUser:ILogin  = {
      userName : this.UserForm.value.userName, 
      password : this.UserForm.value.password,
    };
    console.log(this.UserForm.value);
    console.log(newUser);

    if(this.UserForm.valid)
  {
    this.auth.login(newUser).subscribe((info) =>{
      if(info.message == "Success")
      {
        localStorage.setItem("userInfo", info.data);
        console.log(info.data);

        this.role = this.auth.getRole()
        console.log(this.role);
        if(this.role == "Instractur"){
          
          this.router.navigate(['/inshomepage']);
        }else{
          this.router.navigate(['/home']);
        }
      }
    })
    
  }

  }
}

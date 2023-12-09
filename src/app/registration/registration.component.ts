import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  UserForm: FormGroup;
  selectedFile!: File;
  photo:string="";
  constructor(private fb: FormBuilder,private rout:Router)
 {
      this.UserForm = this.fb.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
        image: ['', [Validators.required]],
        name: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        email: ['', [Validators.required]],
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
// uploadPhoto(event: any) {
//   this.imgserv.onFileSelected(event);
//   this.selectedFile = event.target.files[0];
//   if (this.selectedFile) {
//     const formData = new FormData();
//     formData.append('file', this.selectedFile);
//     this.imgserv.UploadImage(formData).subscribe({
//       next: data => {
//         this.photo=data.pathImage
//         this.UserForm.patchValue({
//           image: data.pathImage
//         })
//       },
//       error: err => console.error('Error during subscription:', err)
//     });
//   }}
onSubmit()
{
  // const Newuser:IUserRegister 
  // = {
  //     name: this.UserForm.value.name,
  //     password:this.UserForm.value.password, 
  //     phoneNumber: this.UserForm.value.phone,
  //     photo:this.photo,
  //     email: this.UserForm.value.email,
  //     username:this.UserForm.value.username 
  //   };
  if(this.UserForm.valid)
  {
  
    
  }
}
}

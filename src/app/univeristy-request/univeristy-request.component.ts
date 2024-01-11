import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UniveristyServicesService } from '../Servise/univeristy-services.service';
import { UploadImageService } from '../Servise/upload-image.service';
import { IUniveristyStudentRequest } from '../Shared-Interfase/Student';
import { AuthorizeService } from '../Servise/authorize.service';

@Component({
  selector: 'app-univeristy-request',
  templateUrl: './univeristy-request.component.html',
  styleUrls: ['./univeristy-request.component.scss']
})
export class UniveristyRequestComponent {
  
    courseForm: FormGroup;
    selectedFile!: File;
   Image:string=""

    constructor(private fb: FormBuilder, private authServ:AuthorizeService,
      private imageserv:UploadImageService
      ,private serv:UniveristyServicesService) 
    {
      this.courseForm = this.fb.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        file: ['', Validators.required],
      });
     }
     get name() { return this.courseForm.get('name'); }
    get description() { return this.courseForm.get('description'); }
     get file() { return this.courseForm.get('file'); }
     onFileChange(event: any) {
      this.selectedFile = event.target.files[0];
    
      if (this.selectedFile) {
        const formData = new FormData();
        formData.append('file', this.selectedFile);
    
        this.imageserv.UploadImage(formData).subscribe({
          next: (data: any) => {
            console.log(data);
            this.Image=data.pathImage
            this.courseForm.patchValue({
              file: data.pathImage

            });
          },
          error: (err) => console.error('Error during subscription:', err),
        });
        
    }}
     onSubmitCourse()
     {
      console.log(this.courseForm.value)

       if(this.courseForm.valid)
       {
        
          const request:IUniveristyStudentRequest=
          {
            id: 0,
            name: this.courseForm.value.name,
            description: this.courseForm.value.description,
            file: this.Image,
            // studentID:this.authServ.getTokenID(),
            studentID:"33f3bb63-2802-486b-935c-aa4469de75e3",
          }
          console.log(this.courseForm.value)
          console.log(request)

          this.serv.addStudent(request).subscribe(
            {
              next:data=>
              {
                console.log(data)
              },
              error(err) {
                console.log(err)
              },
            }
          )
        }
      }
  }
  


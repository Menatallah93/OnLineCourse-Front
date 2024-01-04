import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UploadImageService } from '../Servise/upload-image.service';
import { ConsultingService } from '../Servise/consulting.service';
import { CoursesServService } from '../Servise/courses-serv.service';
import { ICoursing } from '../Shared-Interfase/IConsulting';

@Component({
  selector: 'app-pro-ject-core',
  templateUrl: './pro-ject-core.component.html',
  styleUrls: ['./pro-ject-core.component.scss']
})
export class ProJectCoreComponent {
  modalForm: FormGroup;
  courseForm: FormGroup;

  imagePath:string="";
  selectedFile!: File;
  constructor(private fb: FormBuilder,private imageserv:UploadImageService
    ,private serv:ConsultingService,private courseServ:CoursesServService) 
  {
    this.modalForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      description: ['', Validators.required],
      file: [''], // You might want to add a custom validator for file uploads
      consultingHoures: ['', Validators.required],
    });

    this.courseForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
      description: ['', Validators.required],
      file: ['', Validators.required],
    });
   }
   onFileChange(event: any, type: string) {
    this.selectedFile = event.target.files[0];
  
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
  
      this.imageserv.UploadImage(formData).subscribe({
        next: (data: any) => {
          console.log(data);
  
          // Assuming the pathImage is the correct property from the response
          this.imagePath = data.pathImage;
                console.log(this.imagePath)
          if (type === "Coursing") {
            // Ensure 'file' is a valid control in courseForm
            this.courseForm.patchValue({
              file: this.imagePath,
            });
          } else if (type === "Consulting") {
            // Ensure 'file' is a valid control in modalForm
            this.modalForm.patchValue({
              file: this.imagePath,
            });
          }
  
          console.log("Form patched:", this.courseForm.value, this.modalForm.value);
        },
        error: (err) => console.error('Error during subscription:', err),
      });
    }
  }
  
  get name() { return this.courseForm.get('name'); }
get email() { return this.courseForm.get('email'); }
get phoneNumber() { return this.courseForm.get('phoneNumber'); }
get description() { return this.courseForm.get('description'); }
get file() { return this.courseForm.get('file'); }

onSubmitCourse() {
  if (this.courseForm.valid) {
    const course: ICoursing = {
      name: this.courseForm.value.name,
      email: this.courseForm.value.email,
      phoneNumber: this.courseForm.value.phoneNumber.toString(),
      description: this.courseForm.value.description,
      file: this.imagePath
    };

    this.courseServ.addCourse(course).subscribe(
      {
        next: (data) => {
          console.log('Course added successfully:', data);
          console.log('Form submitted:', this.courseForm.value);
          this.courseForm.reset();
        },
        error: (err) => {
          console.error('Error adding course:', err);
        }
      });
  } else {
    this.courseForm.markAllAsTouched();
  }
}

   onSubmit() {
    console.log(this.modalForm.value)

    if (this.modalForm.valid) {
      console.log(this.modalForm.value)
      this.serv.addConsulting(this.modalForm.value).subscribe(
        {
          next:data=>{
            console.log(data)
          },
          error:err=>console.log(err)
        }
      )
    } else {
      this.modalForm.markAllAsTouched();
    }
  }
}

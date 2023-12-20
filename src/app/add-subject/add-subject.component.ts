import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ISubject } from '../Shared-Interfase/ISubject';
import { SubjectService } from '../Servise/subject.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.scss']
})
export class AddSubjectComponent {
  SubjectId:any=0
  isUpdate = false;
  Editsubject!:ISubject;
  SubjectForm: FormGroup;
  selectedOption!: string;
  constructor(private fb: FormBuilder,private router: ActivatedRoute
   ,private route:Router,private subService:SubjectService) 
  {
    this.SubjectForm = this.fb.group({
      name: ['', [Validators.required]],
      grade: ['', [Validators.required]],

     } )}
     get Name() {
      return this.SubjectForm.get('name');
    }
    get Grade() {
      return this.SubjectForm.get('grade');
    }
    ngOnInit(): void {
      this.router.params.subscribe((params) => {
        this.SubjectId = +params['id']; 
    
        if (this.SubjectId) {
          this.isUpdate = true;
          
          this.subService.GetByID(this.SubjectId).subscribe({
            next: (data: ISubject) => {
              this.Editsubject = data;
    
              // Set form values for update
              this.SubjectForm.patchValue({
                name: data.name,
                grade: data.grade.toString(), // Assuming 'grade' is a string in your form
              });
            },
            error: (err) => {
              console.log(err);
            }
          });
        }
      });
    }
    
   
    onSubmit() {
    //   if (this.CategoryForm.valid) {
  const formData: ISubject = {
    id: this.SubjectId,
    name: this.SubjectForm.value.name,
    grade:Number(this.SubjectForm.value.grade)
  };

  if (this.isUpdate) {
    this.subService.UpdateSubject(this.SubjectId, formData).subscribe(
      () => {
        console.log('Subject updated successfully.');
        this.route.navigate(['/subjects']);
      },
      (error) => {
        console.error('Error during Subject update:', error);
      }
    );
  } else {
    this.subService.AddSubject(formData).subscribe({
      next: (data) => {
        // if (data.error === "This Category Is Found") {
        //   this.IsFound = data.error;
        //   console.log('Category already exists:', data.error);
        // } else {
        //   alert(data.response);
        //   console.log('Category added successfully:', data.response);
        //   this.route.navigate(['/Categories']);
        // }
        this.route.navigate(['/subjects']);

        console.log(data);
      },
      error: (err) => {
        console.error('Error during Subject creation:', err);
      }
    });
  }
}

    
}

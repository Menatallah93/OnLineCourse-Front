import { Component } from '@angular/core';
import { IStudentProfile } from '../Shared-Interfase/IUserRegister';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../Servise/student.service';
import { AuthorizeService } from '../Servise/authorize.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent {
  StudentId: string = '';
  StudentProfile!: IStudentProfile;
  form!: FormGroup;
  isEditing = false;

  constructor(
    private auth: AuthorizeService,
    private student: StudentService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
    });
  }

  ngOnInit(): void {
    this.StudentId = this.auth.getTokenID();
    this.student.GetStudentWithSubject(this.StudentId).subscribe(
      (data) => {
        this.StudentProfile = data;
        this.bindDataToForm();
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  private bindDataToForm(): void {
    this.form.patchValue({
      name: this.StudentProfile.name || '',
      email: this.StudentProfile.email || '',
      phone: this.StudentProfile.phone || '',
      numberofhours:this.StudentProfile.numberofhours || '',
    });
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  cancelEdit() {
    this.isEditing = false;
    // Rebind the data to the form when canceling edit
    this.bindDataToForm();
  }

  updateData() {
    if (this.isEditing) {
      const updatedData = {
        id: this.auth.getTokenID(),
        name: this.form.value.name,
        email: this.form.value.email,
        phone: this.form.value.phone,
      };

      this.student.UpdateStudent(this.StudentProfile.id, updatedData).subscribe(
        (updatedStudent) => {
          console.log('student updated successfully:', updatedStudent);
          this.StudentProfile = updatedStudent;
          this.bindDataToForm();
          this.isEditing = false;
        },
        (error) => {
          console.error('Error updating instructor:', error);
          // Handle error
        }
      );
    } else {
      this.isEditing = true;
    }
  }
}

import { Component } from '@angular/core';
import { AuthorizeService } from '../Servise/authorize.service';
import { InstructorService } from '../Servise/instructor.service';
import { IInstructor } from '../Shared-Interfase/IUserRegister';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  instructorID: string = '';
  Instractordata!: IInstructor;
  form!: FormGroup; 
  isEditing = false;

  constructor(
    private auth: AuthorizeService,
    private instr: InstructorService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
    });
  }

  ngOnInit(): void {
    this.instructorID = this.auth.getTokenID();
    this.instr.GetInstructorWithSubject(this.instructorID).subscribe(
      (data) => {
        this.Instractordata = data;
        this.bindDataToForm();
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  private bindDataToForm(): void {
    this.form.patchValue({
      name: this.Instractordata.name || '',
      email: this.Instractordata.email || '',
      phone: this.Instractordata.phone || '',
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

      this.instr.UpdateInstructor(this.Instractordata.id, updatedData).subscribe(
        (updatedInstructor) => {
          console.log('Instructor updated successfully:', updatedInstructor);
          this.Instractordata = updatedInstructor;
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
  
  // Toggle edit methods as before
}

import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import * as bootstrap from 'bootstrap';
import { ElementRef } from '@angular/core';
import { SubjectService } from '../Servise/subject.service';
import { ISubject } from '../Shared-Interfase/ISubject';
import { InstructorSubject } from '../Shared-Interfase/InstructorSubject';
import { AuthorizeService } from '../Servise/authorize.service';


@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.scss']
})

export class AddCoursesComponent {  
  myForm!: FormGroup;
  fullData!: FormGroup;
  allSubject: ISubject[] = [];
  subject!: string;

  constructor(private fb: FormBuilder, private sub: SubjectService, private auth: AuthorizeService, private cdr: ChangeDetectorRef) {
    this.fullData = this.fb.group({
      instructorId: [this.auth.getTokenID(), [Validators.required]],
      subjectId: ['', [Validators.required]],
      subjectName: ['', [Validators.required]],
      appoinstmentDTOs: this.fb.array([]),
    });
  }

  get subjectName() {
    return this.fullData.get('subjectName');
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      rows: this.fb.array([this.createRow()])
    });

    this.sub.GetAll().subscribe((info) => {
      this.allSubject = info;
    });
  }

  get rowsArray() {
    return this.myForm.get('rows') as FormArray;
  }

  createRow(): FormGroup {
    return this.fb.group({
      day: new FormControl(''),
      time: new FormControl(''),
    });
  }

  addRow() {
    this.rowsArray.push(this.createRow());
    this.cdr.detectChanges();
  }

  getSubjectName(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.subject = selectedValue;
  }

  submit() {
    const appointments = this.rowsArray.controls.map((row) => {
      return {
        lectureDate: new Date(), // Replace with the actual date
        dayOfWeek: row.get('day')?.value,
      };
    });
  
    const instructorsubject: InstructorSubject = {
      instructorId: this.auth.getTokenID(),
      subjectId: this.fullData.value.subjectId,
      subjectName: this.fullData.value.subjectName,
      appointmentsDTOs: appointments, // Corrected property name
    };
  
    console.log('InstructorSubject:', instructorsubject);
    // Now you can see the result in the console
  }

}
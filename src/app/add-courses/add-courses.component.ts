import { ChangeDetectorRef, Component, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import * as bootstrap from 'bootstrap';
import { ElementRef } from '@angular/core';
import { SubjectService } from '../Servise/subject.service';
import { ISubject } from '../Shared-Interfase/ISubject';
import { Appointment, InstructorSubject } from '../Shared-Interfase/InstructorSubject';
import { AuthorizeService } from '../Servise/authorize.service';
import { InstructorService } from '../Servise/instructor.service';


@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.scss']
})

export class AddCoursesComponent {  
  @ViewChild('exampleCalsultModal', { static: false }) exampleCalsultModal!: ElementRef<any>;

   myForm!: FormGroup;
  allSubject: ISubject[] = [];
  subject !: ISubject
  isAdded:Boolean = false;
  daytime : Appointment[] = [{
    lectureDate : '',
    dayOfWeek: 0,
  }];

  constructor(private fb: FormBuilder, private sub: SubjectService, 
    private auth: AuthorizeService, private ins:InstructorService,) {
    this.loadSubjects();
  }

  ngOnInit() {
    this.loadSubjects();
  }
  
  loadSubjects() {
    if (!this.allSubject.length) {
      this.sub.GetAll().subscribe((info) => {
        this.allSubject = info;
      });
    }
  }
  
  createRow() {
    this.daytime.push({
      lectureDate : '',
      dayOfWeek: 0,
    })
  }



  submit() {
    const instructorsubject: InstructorSubject = {
      instructorId: this.auth.getTokenID(),
      subjectId: this.subject.id,
      subjectName: this.subject.name,
      appoinstmentDTOs: this.daytime,
    };


    console.log('InstructorSubject:', instructorsubject);

    this.ins.addInstructorsubject(instructorsubject).subscribe({
        next: data => {
        console.log('add success:', data);
        this.isAdded = true;
        console.log(this.isAdded)
      },
        error: err=>console.log(this.isAdded)
        
        
    })
  }

}
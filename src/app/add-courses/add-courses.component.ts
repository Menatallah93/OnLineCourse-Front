import { ChangeDetectorRef, Component, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import * as bootstrap from 'bootstrap';
import { ElementRef } from '@angular/core';
import { SubjectService } from '../Servise/subject.service';
import { ISubject } from '../Shared-Interfase/ISubject';
import { Appointment, InstructorSubject } from '../Shared-Interfase/InstructorSubject';
import { AuthorizeService } from '../Servise/authorize.service';
import { InstructorService } from '../Servise/instructor.service';
import { CommonModule, DatePipe } from '@angular/common';


@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.scss']
})

export class AddCoursesComponent {  
   myForm!: FormGroup;
  allSubject: ISubject[] = [];
  subject !: ISubject
  isAdded!:Boolean ;
  daytime : Appointment[] = [{
    lectureDate : '',
    dayOfWeek: 0,
  }];

  constructor(private fb: FormBuilder, private sub: SubjectService, 
    private auth: AuthorizeService, private ins:InstructorService,private datePipe: DatePipe) {
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

  private formatTime(time: string): string {
    const today = new Date();
    const dateTimeString = `${today.toDateString()} ${time}`;
    return this.datePipe.transform(dateTimeString, 'shortTime') || '';
  }

async submit(){
  this.daytime.forEach(appointment => {
    appointment.lectureDate = this.formatTime(appointment.lectureDate);
  });

  const instructorsubject: InstructorSubject = {
    instructorId: this.auth.getTokenID(),
    subjectId: this.subject.id,
    subjectName: this.subject.name,
    appoinstmentDTOs: this.daytime,
  };
  console.log('InstructorSubject:', instructorsubject);

  await this.ins.addInstructorsubject(instructorsubject).subscribe({
    next: data => {
      console.log('add success:', data);
      this.isAdded = true;
      console.log(this.isAdded)
    },
      error: err=>{
        this.isAdded = false;
        console.log(this.isAdded)
      }
      
  })
}

}
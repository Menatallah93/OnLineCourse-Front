import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SubjectService } from '../Servise/subject.service';
import { ISubject } from '../Shared-Interfase/ISubject';
import { StudentService } from '../Servise/student.service';
import { StudentRequest } from '../Shared-Interfase/Student';
import { AuthorizeService } from '../Servise/authorize.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Appointment } from '../Shared-Interfase/InstructorSubject';
import { IInstructorDTO } from '../Shared-Interfase/Instructor';


@Component({
  selector: 'app-join-course',
  templateUrl: './join-course.component.html',
  styleUrls: ['./join-course.component.scss']
})
export class JoinCourseComponent implements OnInit {
  // defaultInstructorValue: number = 0;
  // selectedInstructorId: string = this.defaultInstructorValue.toString();
  
  allSubject: ISubject[] = [];
  secSubject: ISubject[] = [];
  level: string = "";
  numberOfHouers: number = 0;
  selectedSubject?: ISubject | null;
  selectedInstructorId!: IInstructorDTO | null;
  instructorSubject: IInstructorDTO[] = []
  rows: Appointment[] = [{
    lectureDate: '',
    dayOfWeek: 0,
  }];

  daytime?: Appointment[] = [{
    lectureDate: '',
    dayOfWeek: 0,
  }];

  constructor(
    private sub: SubjectService, private std: StudentService,
    private auth: AuthorizeService, private cdr: ChangeDetectorRef,
  ) {
  }

  ngOnInit(): void {
    this.clearData()

    this.level = localStorage.getItem('Level') || '';
    console.log("hiii : " + this.level);
    this.sub.GetAll().subscribe({
      next: data => {
        this.allSubject = [];
        this.secSubject = [];

        this.secSubject.push(...data)

        data.forEach(subject => {
          if (subject.grade === 1) {
            this.allSubject.push(subject);
          }
        });
      },
      error: err => console.log(err)
    });
  }

  getSelectedSubject(sub: ISubject) {
    this.std.selectedSubject(sub);

    const subString = JSON.stringify(sub);
    localStorage.setItem("selectedSubject", subString);
    this.instructorBySubjectID();
  }

  instructorBySubjectID() {
    const storedSubjectString = localStorage.getItem('selectedSubject');

    if (storedSubjectString) {
      this.selectedSubject = JSON.parse(storedSubjectString);
    } else {
      this.selectedSubject = null;
    }

    const selectedSubjectId = this.selectedSubject?.id;

    if (selectedSubjectId !== undefined) {
      this.std.getInstructorBySubjectID(selectedSubjectId).subscribe({
        next: (data: IInstructorDTO[]) => {
          this.instructorSubject = data;
          console.log(this.instructorSubject);
          console.log(this.selectedInstructorId);
        },
        error: (err) => console.log(err)
      });
    } else {
      console.error('Selected subject is undefined.');
    }
  }


  getInstructorAppoinstments() {
    console.log(this.instructorSubject)
    console.log(this.selectedInstructorId?.instructorID)
    this.daytime = [];
    const list = this.instructorSubject
      .find(r => r.instructorID === this.selectedInstructorId?.instructorID)

    this.daytime = list?.appointments

    // this.instructorSubject.forEach(appoint => {
    //   debugger
    //   if (appoint.instructorId === this.selectedInstructorId.instructorId) {
    //     this.daytime = appoint.appointments.filter();
    //     console.log(this.daytime);
    //     console.log(this.selectedInstructorId);
    //   }
    // });
  }

  addRow() {
    this.rows.push({
      lectureDate: '',
      dayOfWeek: 0
    });
  }

  submitRequest() {
    const storedSubjectString = localStorage.getItem('selectedSubject');

    if (storedSubjectString) {
      this.selectedSubject = JSON.parse(storedSubjectString);
    } else {
      this.selectedSubject = null;
    }

    const instructorsubject: StudentRequest = {
      grade: this.level,
      subjectName: this.selectedSubject?.name ?? '',
      subjectId: this.selectedSubject?.id ?? 0,
      studentId: this.auth.getTokenID(),
      numberOfHouers: this.numberOfHouers,
      instructorId: this.selectedInstructorId?.instructorID ?? '',
      appoinstments: this.rows,
    };

    console.log(instructorsubject);
    this.std.addRequestToTakeSubject(instructorsubject).subscribe({
      next: data => {
        console.log(data.response);
        this.clearData()
      },
      error: err => console.log(err)

    })
  }


  clearData() {
    this.selectedInstructorId = null;
    this.rows = [{
      lectureDate: '',
      dayOfWeek: 0,
    }];
    this.numberOfHouers = 0;
  }
}

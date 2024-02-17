import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Appointment, IInstructorProfile, IInstructorSubject } from '../Shared-Interfase/IUserRegister';
import { AuthorizeService } from '../Servise/authorize.service';
import { InstructorService } from '../Servise/instructor.service';

@Component({
  selector: 'app-allinstructor-subject',
  templateUrl: './allinstructor-subject.component.html',
  styleUrls: ['./allinstructor-subject.component.scss']
})
export class AllinstructorSubjectComponent {
  instructorID: string = '';
  Instractordata: IInstructorSubject = {
    name: '',
    id: '',
    subjectsAppointments:[]
  };

  constructor(
    private auth: AuthorizeService,
    private instr: InstructorService,
  ) {
    
  }
  
  ngOnInit(): void {
    this.instructorID = this.auth.getTokenID();
    this.instr.GetAllSubjectToInstructor(this.instructorID).subscribe(
      (data) => {
        this.Instractordata = data;
        console.log(this.Instractordata);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  toggleEditMode(appointment: Appointment) {
    appointment.isEditing = !appointment.isEditing;
   this.updateInstructorAppointment(appointment)
  }

  updateInstructorAppointment(appoint: Appointment) {
    if (!appoint.isEditing) {
        this.instr.updateAppointmentForInstructor(appoint.id, {
            lectureDate: appoint.lectureDate,
            dayOfWeek: appoint.dayOfWeek
        }).subscribe({
            next: data => {
                console.log(data);
                appoint.isUpdated = true;
                setTimeout(() => appoint.isUpdated = false, 3000);
            },
            error: error => {
                console.error('Error updating appointment:', error);
                appoint.isUpdated = false;
                setTimeout(() => appoint.isUpdated = false, 3000);
            }
        });
        appoint.isEditing = false;
    }
}
}

import { Component } from '@angular/core';
import { InstructorService } from '../Servise/instructor.service';
import { IRequestAppointmentDTO } from '../Shared-Interfase/RequestAppointment';
import { StudentService } from '../Servise/student.service';

@Component({
  selector: 'app-all-accepted-student-request',
  templateUrl: './all-accepted-student-request.component.html',
  styleUrls: ['./all-accepted-student-request.component.scss']
})
export class AllAcceptedStudentRequestComponent {
  requestAppointment: IRequestAppointmentDTO[] = [];
  displayedRequestAppointment: IRequestAppointmentDTO[] = [];
  itemsPerPage = 6;
  currentPage = 1;
  totalPages = 1;

  constructor(private serv: StudentService) { }

  ngOnInit(): void {
    this.serv.getAllAcceptedStudentRequest().subscribe({
      next: data => {
        this.requestAppointment = data;
        this.updateDisplayedInstructors(); // Call the function here
        console.log(data);
      },
      error: err => console.log(err)
    });
  }

  rejectedRequest(id: number = 0) {
    this.serv.rejectedStudentRequest(id).subscribe({
      next: data => {
        this.requestAppointment = this.requestAppointment.filter(x => x.id !== id);
        this.updateDisplayedInstructors();
        console.log(data);
      },
      error: err => console.log(err)
    });
  }

  updateDisplayedInstructors() {
    this.totalPages = Math.ceil(this.requestAppointment.length / this.itemsPerPage);
    this.displayedRequestAppointment = this.requestAppointment.slice(
      (this.currentPage - 1) * this.itemsPerPage,
      this.currentPage * this.itemsPerPage
    );
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateDisplayedInstructors();
    }
  }
}

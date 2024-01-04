import { Component } from '@angular/core';
import { InstructorService } from '../Servise/instructor.service';
import { IRequestAppointmentDTO } from '../Shared-Interfase/RequestAppointment';
import { StudentService } from '../Servise/student.service';

@Component({
  selector: 'app-all-pendding-student-request',
  templateUrl: './all-pendding-student-request.component.html',
  styleUrls: ['./all-pendding-student-request.component.scss']
})
export class AllPenddingStudentRequestComponent {
  requestAppointment: IRequestAppointmentDTO[] = [];
  displayedRequestAppointment: IRequestAppointmentDTO[] = [];
  itemsPerPage = 6;
  currentPage = 1;
  totalPages = 1;

  constructor(private serv: StudentService) { }

  ngOnInit(): void {
    this.serv.getAllPendingStudentRequest().subscribe({
      next: data => {
        this.requestAppointment = data;
        this.updateDisplayedRequestAppointment();
        console.log(data);
      },
      error: err => console.log(err)
    });
  }

  acceptedRequest(id: number = 0) {
    this.serv.acceptStudentRequest(id).subscribe({
      next: data => {
        this.requestAppointment = this.requestAppointment.filter(x => x.id !== id);
        this.updateDisplayedRequestAppointment();
        console.log(data);
      },
      error: err => console.log(err)
    });
  }

  rejectedRequest(id: number = 0) {
    this.serv.rejectedStudentRequest(id).subscribe({
      next: data => {
        this.requestAppointment = this.requestAppointment.filter(x => x.id !== id);
        this.updateDisplayedRequestAppointment();
        console.log(data);
      },
      error: err => console.log(err)
    });
  }

  updateDisplayedRequestAppointment() {
    this.totalPages = Math.ceil(this.requestAppointment.length / this.itemsPerPage);
    this.displayedRequestAppointment = this.requestAppointment.slice(
      (this.currentPage - 1) * this.itemsPerPage,
      this.currentPage * this.itemsPerPage
    );
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateDisplayedRequestAppointment();
    }
  }
}

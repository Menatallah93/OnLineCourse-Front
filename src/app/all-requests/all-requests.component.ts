import { Component, OnInit } from '@angular/core';
import { InstructorService } from '../Servise/instructor.service';
import { IInstructor } from '../Shared-Interfase/IUserRegister';

@Component({
  selector: 'app-all-requests',
  templateUrl: './all-requests.component.html',
  styleUrls: ['./all-requests.component.scss']
})
export class AllRequestsComponent implements OnInit {
  instructors: IInstructor[] = [];
  displayedInstructors: IInstructor[] = [];
  itemsPerPage = 6;
  currentPage = 1;
  totalPages = 1;

  constructor(private serv: InstructorService) {}

  ngOnInit(): void {
    this.serv.GetAllPending().subscribe({
      next: data => {
        this.instructors = data;
        this.updateDisplayedInstructors();
        console.log(data);
      },
      error: err => console.log(err)
    });
  }

  AcceptedRequest(id: string = "") {
    this.serv.Accept(id).subscribe({
      next: data => {
        this.instructors = this.instructors.filter(x => x.id !== id);
        this.updateDisplayedInstructors();
        console.log(data);
      },
      error: err => console.log(err)
    });
  }

  RejectedRequest(id: string = "") {
    this.serv.Rejected(id).subscribe({
      next: data => {
        this.instructors = this.instructors.filter(x => x.id !== id);
        this.updateDisplayedInstructors();
        console.log(data);
      },
      error: err => console.log(err)
    });
  }

  updateDisplayedInstructors() {
    this.totalPages = Math.ceil(this.instructors.length / this.itemsPerPage);
    this.displayedInstructors = this.instructors.slice(
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

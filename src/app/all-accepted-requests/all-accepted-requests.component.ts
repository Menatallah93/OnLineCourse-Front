import { Component, OnInit } from '@angular/core';
import { InstructorService } from '../Servise/instructor.service';
import { IInstructor } from '../Shared-Interfase/IUserRegister';

@Component({
  selector: 'app-all-accepted-requests',
  templateUrl: './all-accepted-requests.component.html',
  styleUrls: ['./all-accepted-requests.component.scss']
})
export class AllAcceptedRequestsComponent implements OnInit {
  instructors: IInstructor[] = [];
  displayedInstructors: IInstructor[] = [];
  itemsPerPage = 7; 
  currentPage = 1;
  totalPages = 1;

  constructor(private serv: InstructorService) {}

  ngOnInit(): void {
    this.serv.GetAllAccepted().subscribe({
      next: data => {
        this.instructors = data;
        this.updateDisplayedInstructors(); // Call the function here
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

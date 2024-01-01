import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IStudentRequestForInstructor } from '../Shared-Interfase/InstructorSubject';
import { InstructorService } from '../Servise/instructor.service';
import { AuthorizeService } from '../Servise/authorize.service';

@Component({
  selector: 'app-instractor-table',
  templateUrl: './instractor-table.component.html',
  styleUrls: ['./instractor-table.component.scss'],
})
export class InstractorTableComponent implements OnInit {
  selectedDay: string | null = null;
  tableData: IStudentRequestForInstructor[] = [];
  filtTable: IStudentRequestForInstructor[] = [];
  itemsPerPage = 7;
  currentPage = 1;
  totalPages = 1;
  instructorID: string = '';
  constructor(
    private auth: AuthorizeService,
    private instr: InstructorService,
    private router: Router ) 
  {
  }

  get displayedRows(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filtTable.slice(startIndex, startIndex + this.itemsPerPage);
  }

  ngOnInit(): void {
    this.instructorID = this.auth.getTokenID();
    this.instr.GetRequestForInstructor(this.instructorID).subscribe(
      (data) => {
        this.tableData = data.map((row) => ({ ...row, isEditing: false, isAddMode: false }));
        this.filtTable = this.tableData;
        this.updatePagination();
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
  updatePagination() {
    this.totalPages = Math.ceil(this.filtTable.length / this.itemsPerPage);
  }
  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  startEditing(row: any) {
    // Set isEditing property to true to show input fields for editing
    row.isEditing = true;
    row.isAddMode = true;
  }

  addOrUpdateRow(row: any) {
    if (row.isEditing) {
      row.isAddMode = false;
      row.isEditing = false;
      this.updatePagination();
    }
  }

  // navigateTo(studentId: string) {
  //   this.router.navigate(['/courses', studentId]);
  // }

  deleteRow(row: any) {
    const index = this.tableData.indexOf(row);
    if (index !== -1) {
      this.tableData.splice(index, 1);
      this.updatePagination();
    }
  }
  localTime = new Date();

  getLocalTime(): string {
    return this.localTime.toLocaleTimeString();
  }

  filterTable() {
    if (this.selectedDay !== null) {
      this.filtTable = this.tableData.filter((row) => row.dayOfWeek.toString() === this.selectedDay?.toString());
    } else {
      this.instr.GetRequestForInstructor(this.instructorID).subscribe(
        (data) => {
          this.tableData = data.map((row) => ({ ...row, isEditing: false, isAddMode: false }));
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
    }
  }

  // getLocalTime(): string {
  //   const localTime = new Date();

  //   // Example with options: use a specific locale and timezone
  //   const options: Intl.DateTimeFormatOptions = {
  //     hour: '2-digit',
  //     minute: '2-digit',
  //     second: '2-digit',
  //     hour12: false,
  //     timeZone: 'AST',  // Replace 'UTC' with the desired timezone
  //     // Other options as needed
  //   };

  //   return localTime.toLocaleTimeString('en-US', options);
  // }
}

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
  tableData: any[] = [];
  instructorID: string = '';
  route: any;
  constructor(
    private auth: AuthorizeService,
    private instr: InstructorService
  ) {}

  ngOnInit(): void {
    this.instructorID = this.auth.getTokenID();
    this.instr.GetRequestForInstructor(this.instructorID).subscribe(
      (data) => {
        this.tableData = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  startEditing(row: any) {
    // Set isEditing property to true to show input fields for editing
    row.isEditing = true;
    row.isAddMode = true;
  }

  addOrUpdateRow(row: any) {
    if (row.isEditing) {
      row.isAddMode = false;
      // Update row and set isEditing to false
      row.isEditing = false;
    }
  }

    navigateTo(studentID: number) {
      this.route.navigate(['/courses']);
  }

  deleteRow(row: any) {
    const index = this.tableData.indexOf(row);
    if (index !== -1) {
      this.tableData.splice(index, 1);
    }
  }
  localTime = new Date();

  getLocalTime(): string {
    return this.localTime.toLocaleTimeString();
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

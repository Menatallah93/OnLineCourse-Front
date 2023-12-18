import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instractor-table',
  templateUrl: './instractor-table.component.html',
  styleUrls: ['./instractor-table.component.scss']
})
export class InstractorTableComponent  {

  constructor(private route:Router){

  }
  tableData: any[] = [
    { stage: 'الثانويه', subject: 'الانجليزيه', day: 'الثلاثاء', date: 'العاشره صباحا' },
    { stage: 'الاعداديه', subject: 'الانجليزيه', day: 'الاربعاء', date: 'الخامسه عصرا' },
    { stage: 'الاعداديه', subject: 'الانجليزيه', day: 'الاربعاء', date: 'الخامسه عصرا' },
    { stage: 'الاعداديه', subject: 'الانجليزيه', day: 'الاربعاء', date: 'الخامسه عصرا' },
    { stage: 'الاعداديه', subject: 'الانجليزيه', day: 'الاربعاء', date: 'الخامسه عصرا' },
    { stage: 'الاعداديه', subject: 'الانجليزيه', day: 'الاربعاء', date: 'الخامسه عصرا' },
    // Add more initial data as needed
  ];
  startEditing(row: any) {
    // Set isEditing property to true to show input fields for editing
    row.isEditing = true;
    row.isAddMode=true;
  }

  addOrUpdateRow(row: any) {
    if (row.isEditing) {
      row.isAddMode=false;
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
 
  return this. localTime.toLocaleTimeString();
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

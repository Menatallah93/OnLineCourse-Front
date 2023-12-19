import { Component } from '@angular/core';

@Component({
  selector: 'app-join-course',
  templateUrl: './join-course.component.html',
  styleUrls: ['./join-course.component.scss']
})
export class JoinCourseComponent {
  rows: any[] = []; // Array to store dynamically added rows

  addRow() {
    this.rows.push({});


}
}

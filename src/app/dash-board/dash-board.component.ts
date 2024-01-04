import { Component } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent {
  navlink:string = "addsubject";
  shown:boolean = false;
  showStudentRequests:boolean = false;

  navigate(link:string){
    this.navlink = link ;
  }

  toggleRequests() {
    this.shown = !this.shown;
  }
  toggleStudentRequests() {
    this.showStudentRequests = !this.showStudentRequests;
  }

}

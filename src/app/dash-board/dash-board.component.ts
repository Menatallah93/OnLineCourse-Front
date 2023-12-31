import { Component } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent {
  navlink:string = "addsubject";

  navigate(link:string){
    this.navlink = link ;
  }
}

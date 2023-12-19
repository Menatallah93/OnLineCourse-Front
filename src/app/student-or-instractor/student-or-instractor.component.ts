import { Component } from '@angular/core';
import { AuthorizeService } from '../Servise/authorize.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-student-or-instractor',
  templateUrl: './student-or-instractor.component.html',
  styleUrls: ['./student-or-instractor.component.scss']
})
export class StudentOrInstractorComponent {

constructor(private auth: AuthorizeService,private route : Router){}

getRole(role: string){
  this.auth.selectedRoleType(role);
  if(role === "Student"){
    this.route.navigate(['/grades']);
  }
  else{
    this.route.navigate(['/login']);
  }
}



}

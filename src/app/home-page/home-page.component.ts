import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizeService } from '../Servise/authorize.service';
import { StudentService } from '../Servise/student.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  constructor(private student: StudentService,private route : Router){}

  getLevel(level: string){
    localStorage.setItem("Level" , level);
    this.student.selectedLevel(level);

    if(level === "الصف الرابع"){
      this.route.navigate(['/joinUs']);
    }
    else if(level === "الصف الخامس"){
      this.route.navigate(['/joinUs']);
    }
    else if(level === "الصف السادس"){
      this.route.navigate(['/joinUs']);
    }
    else if(level === "الصف السابع"){
      this.route.navigate(['/joinUs']);
    }
    else if(level === "الصف الثامن"){
      this.route.navigate(['/joinUs']);
    }
    else if(level === "الصف التاسع"){
      this.route.navigate(['/joinUs']);
    }
    else if(level === "الصف العاشر"){
      this.route.navigate(['/joinUs']);
    }
    else if(level === "الصف الحادي عشر"){
      this.route.navigate(['/joinUs']);
    }
    else {
      this.route.navigate(['/joinUs']);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from '../Servise/authorize.service';
import { InstructorService } from '../Servise/instructor.service';

@Component({
  selector: 'app-instuctor-home-page',
  templateUrl: './instuctor-home-page.component.html',
  styleUrls: ['./instuctor-home-page.component.scss']
})
export class InstuctorHomePageComponent implements OnInit {
  navlink:string = "request"
  instructorID: string = "";
  statusFlag : number = 0;
constructor(private auth:AuthorizeService, private instr: InstructorService){}

ngOnInit(){
  
  this.instructorID = this.auth.getTokenID();
  console.log(this.instructorID);
  this.instr.getInstructorByID(this.instructorID).subscribe((info) =>{
  console.log(info);
  if(info.status === 0){
    this.statusFlag = 0;
  }
  else if(info.status === 1 ){
    this.statusFlag = 1;
  }
  else{
    this.statusFlag = 2
  }
})

}


navigate(link:string){
  this.navlink = link ;
}
}
